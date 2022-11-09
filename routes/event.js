const router = require("express").Router();
const db = require("../model/index");
const Moment = require("moment");
var nodemailer = require('nodemailer');
const parser = require("../cloudinary/cloudinary");
const cloudinary = require("cloudinary");

router.get("/event", function (req, res) {
    db.Events.find({}).then((response) => {

        console.log(response);
        console.log("showing events");
        if (response.length > 5) {
            let lastFive = response.slice(Math.max(response.length - 7, 1));
            res.json(lastFive);
        }
        else {
            res.json(response);
        }
    });
});


// route for getting event information to display on event page
router.get("/event/:id", function (req, res) {
    let id = req.params.id
    db.Events.findById(id)
        .populate("attendees")
        .then((response) => {
            let timeToEvent = Moment(`${response.date} ${response.time}`).fromNow();
            // the response should now have timeToEvent, which we can display as how long until this event
            res.json({ fromDB: response, time: timeToEvent });
        });
});

// creating a new event
router.post("/event", parser.single("image"), function (req, res) {
    console.log("event POST request received");
    let newEvent = {};
    let image = {};


    if (req.file) {
        image.url = req.file.url;
        image.id = req.file.public_id;
    } else {
        image = req.body.image;
    }

    newEvent.name = req.body.name;
    newEvent.address = req.body.address;
    // ** NEED TO MAKE SURE DATE is ENTERED AS "2020-02-04"
    newEvent.date = req.body.date;
    // ** NEED TO MAKE SURE TIME IS ENTERED AS "14:00"
    newEvent.time = req.body.time;
    newEvent.description = req.body.description
    newEvent.organizer = req.body.organizer;
    newEvent.image = image;

    // takes the organizer's username and finds its objectId 
    db.Users.findOne({ username: newEvent.organizer })
        .then(response => newEvent.organizerId = response._id)
        .then(response => {
            // creates the new event and pushes its id to the organizing user
            db.Events.create(newEvent)
                .then((dbEvent) => {
                    res.json(dbEvent);
                    return db.Users.findByIdAndUpdate(
                        newEvent.organizerId,
                        { $push: { events: dbEvent._id } },
                        { new: true }
                    )
                })
                .catch(err => res.status(422).json(err))
        })
        .catch(err => console.log(err))

});

// updating an existing event
router.put("/event/:id", parser.single("image"), function (req, res) {
    db.Events.findById(req.params.id)
        .then(event => {
            // stores current event image id to use for deletion
            const id = event.image.id;
            let image = {};

            // if a new image is being uploaded to an event, set the image object properties to the new image
            if (req.file) {
                console.log(req.file);
                image.url = req.file.url;
                image.id = req.file.public_id;
                // takes the old stored image id and deletes it from cloudinary storage
                if (id) {
                    cloudinary.v2.uploader.destroy(id, (err, res) => {
                        if (err) console.log(err);
                        console.log("This is the response:" + res)
                    });
                }