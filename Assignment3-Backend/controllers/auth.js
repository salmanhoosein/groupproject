const User = require("../models/user");
const bcrypt = require("bcryptjs");

const { validationResult } = require("express-validator/check");

exports.getTesting = (req, res, next) => {
  res.status(200).json({ result: "TEST AUTH SUCCESS" });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  //check validation errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errorMessage: errors.array()[0].msg,
    });
  }

  res.status(200).json({ result: "TEST LOGIN SUCCESS" });

  //find user in database and create a session for that user
  // User.findOne({
  //   email: email,
  // })
  //   .then((user) => {
  //     //if we don't find a email, user doesn't exist
  //     if (!user) {
  //       //flash a message through a session
  //       req.flash("error", "Invalid Email or password"); //key is error
  //       return res.redirect("/login");
  //     }
  //     //if we do find email, check password inputted with password in database for user
  //     return bcrypt
  //       .compare(password, user.password)
  //       .then((doMatch) => {
  //         //doMatch is boolean if passwords equal
  //         if (doMatch) {
  //           //if passwords do match
  //           //create session for user
  //           req.session.isLoggedIn = true; //session shares data across requests
  //           req.session.user = user;
  //           return req.session.save((result) => {
  //             console.log(result);
  //             res.redirect("/");
  //           }); // need to be sure session is saved in some scenarios
  //         }

  //         //if passwords don't match
  //         req.flash("error", "Invalid Email or password"); //key is error
  //         res.redirect("/login");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         res.redirect("/login");
  //       });
  //   })
  //   .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {};

exports.postSignUp = (req, res, next) => {
  //retreive data from request body
  const email = req.body.email;
  const password = req.body.password;

  //check validation errors
  const errors = validationResult(req);

  //if there are errors in input
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errorMessage: errors.array()[0].msg,
    });
  }

  res.status(200).json({ result: "TEST SUCCESS" });

  //hashPassword and add user to Database
  // bcrypt
  //   .hash(password, 12) //hash password if email doesn't exist
  //   .then((hashedPassword) => {
  //     //add user to database
  //     // const user = new User({
  //     //   email: email,
  //     //   password: hashedPassword, //use hashedPassword
  //     // });
  //     // //save new user in database
  //     // return user.save();
  //   })
  //   .then((result) => {
  //     //redirect before sending email
  //     res.status(200).json({ result: result });
  //     console.log("NEW USER SAVED!!!");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
