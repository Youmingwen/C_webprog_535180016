const localStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const passport = require("passport");

//user model
const user = require("../models/User");

module.exports = function (passport) {
    passport.use(
        new localStrategy({usernameField: "email"}, (email, password, done) => {
            //user cocok
            user.findOne({email: email})
                .then((user) => {
                    if(!user) {
                        return done(null, false, {message: "email tidak terdaftar"});
                    }

                    //cek password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;

                        if(isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, {message: "password salah"});
                        }
                    });
                })
                .catch((err) => console.log(err));
        })
    );
    // passport.serializeUser(function (user, done) {
    //     done(null, user.id);  
    // })

    // passport.deserializeUser(function (id, done) {
    //     User.findbyId(id, function (err, user) {
    //         done(err, user);
    //     });
    // });
    //Harus ditempatkan dimana???
};