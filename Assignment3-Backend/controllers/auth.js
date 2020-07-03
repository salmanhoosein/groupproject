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

  //send hardcoded data without database
  const token = jwt.sign({ email: email }, "AuthSecretToken");
  res.status(200).json({
    token: token,
    email: email,
    success: "User Logged In",
  });

  /*@TODO: implement database assignment 4
  let loggedInUser;
  // find user in database and create a session for that user
  User.findByEmail(email)
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
    return res.json({
      error: errors.array()[0].msg,
    });
  }

  //Send back dummy since no dabtabase
  res.status(200).json({ success: "User Succesfully Saved" });


  //  @TODO: Need assignment4 hashPassword and add user to Database
  // bcrypt
  //   .hash(password, 12) //hash password if email doesn't exist
  //   .then((hashedPassword) => {
  //     /* add user to DB */
  //     const user = new User(email, hashedPassword);
  //     return user.save();
  //   })
  //   .then((result) => {
  //     //redirect before sending email
  //     res.status(200).json({ success: "User Succesfully Saved" });
  //   })
  //   .catch((err) => {
  //     res.json({ error: "Error saving user" });
  //     console.log(err);
  //   });
};
