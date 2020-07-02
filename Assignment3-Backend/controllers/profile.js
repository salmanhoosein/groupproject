const { validationResult } = require("express-validator/check");
const Profile = require("../models/profile");

exports.getProfile = (req, res, next) => {
  //find user profile based on fullName
  let fullName = req.body.fullName;
  Profile.findOne({
    fullName: fullName,
  }).then((profile) => {
    //if we don't find a email, user doesn't exist
    if (!profile) {
      res.json({ error: "Profile not Found" });
    } else {
      res.status(200).json({ success: "Profile found", profile: profile });
    }
  });
};

exports.postProfile = (req, res, next) => {
  let fullName = req.body.fullName;
  let addressOne = req.body.addressOne;
  let addressTwo = req.body.addressTwo;
  let city = req.body.city;
  let state = req.body.state;
  let zip = req.body.zip;

  //check if any validation errors, send back to frontend
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      error: errors.array()[0].msg,
    });
  }

  res.status(200).json({ success: "Profile added SUCCESS" });

  //add Profile To Database //Need Assignment 4 to complete
  let profile = new Profile({
    fullName: fullName,
    addressOne: addressOne,
    addressTwo: addressTwo,
    city: city,
    state: state,
    zip: zip,
  });

  profile.save().then((result) => {
    //return success after adding
    res.status(200).json({ result: "Profile added SUCCESS" });
  });
};
