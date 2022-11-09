const router = require("express").Router();
const db = require("../model");
const passport = require("../passport");
const parser = require("../cloudinary/cloudinary");
const cloudinary = require("cloudinary");

// get route for all users
router.get("/user", function (req, res) {
    db.Users.find({})
        .then((response) => res.json(response))
});

// post route to create a new user
router.post("/user", parser.single("image"), (req, res) => {
    console.log("api POST request received");
    console.log(req.file);
    const newUser = {};
    let image = {};

    if (req.file) {
        image.url = req.file.url;
        image.id = req.file.public_id;
    } else {
        image = req.body.image
    }

    newUser.username = req.body.username;
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.password = req.body.password;
    newUser.email = req.body.email;
    newUser.image = image;

});

  // checks to see if a username or email already exists, if not creates new user
  db.Users.findOne({ username: newUser.username }, (err, user) => {
    if (err) {
        console.log('User.js post error: ', err)
    } else if (user) {
        res.json({
            error: `Sorry, already a user with the username: ${newUser.username}`
        });
    } else if (user) {
        res.json({
            error: `Sorry, already a user with the username: ${req.body.username}`
        });
    }
    else {
        db.Users.findOne({ email: newUser.email }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the email: ${newUser.email}`
                })
            } else {
                db.Users.create(newUser)
                    .then((response) => res.json(response))
                    .catch(err => res.status(422).json(err));
            }
        });
    }
});


// get route for a specific user by id
router.get("/user/:id", (req, res) => {
    console.log(`this is req.params.id ${req.params.id}`)
    db.Users.find({ _id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
});

// put route to update user information
router.put("/user/:id", parser.single("image"), (req, res) => {
    db.Users.findById(req.params.id)
        .then(user => {
            // stores current user image id to use for deletion
            const id = user.image.id;
            let image = {};

            // if the user is uploading a new image, set the image object properties to the new image
            if (req.file) {
                console.log(req.file);
                image.url = req.file.url;
                image.id = req.file.public_id;
                // takes the old stored image id and deletes it from cloudinary storage
                if (id) {
                    cloudinary.v2.uploader.destroy(id, (err, res) => {
                        if(err) console.log(err);
                        console.log("This is the response:" + res)
                    });