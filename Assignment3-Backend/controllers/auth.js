const User = require("../models/user");
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

  //hardcoded data without database
  const token = jwt.sign({ email: email }, "AuthSecretToken");
  res.status(200).json({
    token: token,
    email: email,
    success: "User Logged In",
  }); // need to be sure session is saved in some scenarios

  //@TODO: implement database assignment 4
  let loggedInUser;
  // find user in database and create a session for that user
  User.findOne({
    email: email,
  })
    .then((user) => {
      //if we don't find a email, user doesn't exist
      if (!user) {
        res.json({ error: "User Not Found" }); // need to be sure session is saved in some scenarios
      }
      loggedInUser = user;
      //if we do find email, check password inputted with password in database for user
      return bcrypt.compare(password, user.password);
    })
    .then((doMatch) => {
      //if passwords do match
      if (doMatch) {
        //create User AUTH jsonwebtoken
        const token = jwt.sign(
          {
            email: loggedInUser.email,
            userId: loggedInUser._id.toString(),
          },
          "AuthSecretToken"
        );
        console.log(token);
        // res.status(200).json({
        //   token: token,
        //   userId: loggedInUser._id.toString(),
        //   success: "User Logged In",
        // });
      }

      //if passwords don't match
      //res.json({ error: "Passwords dont match" });
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

  console.log(email);
  console.log(password);

  res.status(200).json({ success: "User Succesfully Saved" });

  // hashPassword and add user to Database
  bcrypt
    .hash(password, 12) //hash password if email doesn't exist
    .then((hashedPassword) => {
      /*
      //add user to database
      const user = new User({
        email: email,
        password: hashedPassword, //use hashedPassword
      });
      //save new user in database
      return user.save();
      */

      console.log(hashedPassword);
    })
    .then((result) => {
      //redirect before sending email
      // res.status(200).json({ success: "User Succesfully Saved" });
    })
    .catch((err) => {
      console.log(err);
    });
};
