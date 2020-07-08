const { validationResult } = require("express-validator/check");
const Profile = require("../database/profile");

exports.getProfile = (req, res, next) => {
  //find user profile based on fullName
  let email = req.body.email;
  let userId = req.body.userId;

  res.status(200).json({
    success: "Profile found",
    fullName: "jane doe",
    addressOne: "1234 Test Address",
    addressTwo: "1234 second address",
    city: "Houston",
    state: "TX",
    zip: "77099",
  });

  /* @TODO: NEED ASSIGNMENT 4 DATABASE
  Profile.findByName(fullName)
    .then((profile) => {
      if (!profile) {
        res.json({ error: "Profile not Found" });
      } else {
        res.status(200).json({ success: "Profile found", profile: profile });
      }
    })
    .catch((err) => {
      res.json({ error: "Profile not Found" });
    });
  */
};

exports.postProfile = (req, res, next) => {
  let fullName = req.body.fullName;
  let addressOne = req.body.addressOne;
  let addressTwo = req.body.addressTwo;
  let city = req.body.city;
  let state = req.body.state;
  let zip = req.body.zip;

  let email = req.body.email;
  let userId = req.body.userId;

  //check if any validation errors, send back to frontend
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      error: errors.array()[0].msg,
    });
  }

  //send dummy data since no db
  res.status(201).json({ success: "Profile added SUCCESS" });

  /*@TODO: Need Assignment 4 Database
  let profile = new Profile(fullName, addressOne, addressTwo, city, state, zip);
  profile
    .save()
    .then((result) => {
      res.status(200).json({ result: "Profile added SUCCESS" });
    })
    .catch((err) => {
      res.json({ error: "Error adding profile" });
    });
  */
};
