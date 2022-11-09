const mongoose = require("mongoose");
const express = require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");
const passport = require("./passport");
const MongoStore = require("connect-mongo")(session);
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;

