var mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UsersSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    image: {
        url: {
            type: String,
            required: false,
            default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
        },
        id: {
            type: String,
            required: false
        }
    },

    events: [{
        type: Schema.Types.ObjectId,
        ref: "Events"
    }]

});