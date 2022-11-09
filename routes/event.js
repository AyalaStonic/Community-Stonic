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

