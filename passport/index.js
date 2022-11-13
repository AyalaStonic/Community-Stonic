const passport = require("passport");
const LocalStrategy = require('./localStrategy');
const db = require('../model');

// user object attaches to req.user
passport.deserializeUser((id, done) => {
    console.log('DeserializeUser called');
    db.Users.findOne(
        { _id: id },
        'username',
        (err, user) => {
            console.log('*** Deserialize user, user:');
            console.log(user);
            console.log('--------------');
            done(null, user);
        }
    );
});

// called on login
passport.serializeUser((user, done) => {
    console.log('*** serializeUser called, user: ');
    console.log(user); // the whole raw user object!
    console.log('---------');
    done(null, { _id: user._id });
});


//  Use Strategies 
passport.use(LocalStrategy);

module.exports = passport;