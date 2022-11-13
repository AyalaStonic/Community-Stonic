//  using multer and cloudinary to store user uploaded images
const cloudinary = require("cloudinary");
const multer = require("multer");
const cloudinaryStorage = require("multer-storage-cloudinary");
const dotenv = require('dotenv');
dotenv.config()

// configure the cloudinary storage
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "CommunityStonic",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 1000, height: 500, crop: "limit" }]
});


const parser = multer({ storage: storage });

// load in cloudinary environment variables
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});



// export the configured parser
module.exports = parser;