const User = require("../database/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator/check");
const jwt = require("jsonwebtoken");

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    //check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            error: errors.array()[0].msg,
        });
    }

    let loggedInUser;
    let token;
    // find user in database
    User.findUserByEmail(email)
        .then((user) => {
            //if we don't find a email, user doesn't exist
            if (!user) {
                res.json({ error: "User Not Found" });
            }
            const foundUserData = JSON.parse(JSON.stringify(user[0]))[0];
            loggedInUser = foundUserData;
            //if we do find email, check password from request with password in database for user
            return bcrypt.compare(password, foundUserData.password);
        })
        .then((doMatch) => {
            console.log(loggedInUser);
            //if passwords do match
            if (doMatch) {
                //create User AUTH jsonwebtoken
                token = jwt.sign(
                    {
                        email: loggedInUser.email,
                        userId: loggedInUser.id,
                    },
                    "AuthSecretToken"
                );
                res.status(200).json({
                    token: token,
                    userId: loggedInUser.id,
                    email: loggedInUser.email,
                    success: "User Logged In",
                });
            } else {
                //if passwords don't match
                res.json({ error: "Passwords dont match" });
            }
        })
        .catch((err) => console.log(err));
};

exports.postRegister = (req, res, next) => {
    //retreive data from request body
    const email = req.body.email;
    const password = req.body.password;

    //check validation errors
    const errors = validationResult(req);
    //if there are errors in input
    if (!errors.isEmpty()) {
        return res.json({
            error: errors.array()[0].msg,
        });
    }

    //hash password
    bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
            /* add user to DB */
            return User.saveUser(email, hashedPassword);
        })
        .then((result) => {
            res
                .status(200)
                .json({ result: result, success: "User Succesfully Saved" });
        })
        .catch((err) => {
            console.log(err);
            res.json({ error: "Error saving user" });
        });
};