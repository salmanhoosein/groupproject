const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator/check");

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

  console.log(email);
  console.log(password);
  res.status(200).json({ success: "User Logged in" });

  /*
  // find user in database and create a session for that user
  User.findOne({
    email: email,
  })
    .then((user) => {
      //if we don't find a email, user doesn't exist
      if (!user) {
        res.status(401).json({ error: "User Not Found" }); // need to be sure session is saved in some scenarios
      }
      //if we do find email, check password inputted with password in database for user
      return bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          //doMatch is boolean if passwords equal
          if (doMatch) {
            //if passwords do match
            //if passwords don't match
            res.status(200).json({ success: "User Logged In" }); // need to be sure session is saved in some scenarios
          }

          //if passwords don't match
          res.status(401).json({ error: "Passwords dont match" });
        })
        .catch((err) => {
          console.log(err);
          res.redirect("/login");
        });
    })
    .catch((err) => console.log(err));
    */
};

exports.postRegister = (req, res, next) => {
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

  console.log(email);
  console.log(password);

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
      res.status(200).json({ success: "User Succesfully Saved" });
    })
    .catch((err) => {
      console.log(err);
    });
};
