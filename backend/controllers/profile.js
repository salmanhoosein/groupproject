const { validationResult } = require("express-validator/check");
const Profile = require("../database/profile");
const db = require("../database/connection");

exports.getProfile = (req, res, next) => {
  //find user profile based on fullName
  let email = req.body.email;
  let userId = req.body.userId;


  Profile.findProfileByEmail(email)
    .then((profile) => {
      if (!profile) {
        res.json({ error: "Profile not Found" });
      } else {
        res.status(200).json({ success: "Profile found", profile: profile });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: "Profile not Found" });
    });
  
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
/*
 const INSERT_PROFILE_QUERY = `INSERT INTO profile (fullName,addressOne,addressTwo,city,state,zip) VALUES ('${fullName}','${addressOne}','${addressTwo}','${city}','${state}','${zip}')`
db.query(INSERT_PROFILE_QUERY, (err,results) => {
  if(err) {
    return res.send(err)
  }
  else{ 
    return res.send('added profile')
  }
});
 */
Profile
    .saveProfile(fullName, addressOne, addressTwo, city, state, zip)
    .then((result) => {
      console.log('SUCCESSFULLY ADDED PROFILE');
      res.status(200).json({ result: "Profile added SUCCESS" });
    })
    .catch((err) => {
      console.log(err)
      res.json({ error: "Error adding profile" });
  


});
};
