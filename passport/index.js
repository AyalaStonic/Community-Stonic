const passport = require("passport");
const LocalStrategy = require('./localStrategy');
const db = require('../model');

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
    console.log('*** serializeUser called, user: ');
    console.log(user); // the whole raw user object!
    console.log('---------');
    done(null, { _id: user._id });
});
