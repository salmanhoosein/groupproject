const { validationResult } = require("express-validator/check");
const FuelForm = require("../database/fuelform");

// Profile.createProfileTable().then().catch()

exports.getFuelQuotes = (req, res, next) => {
  //find user quotes based on fullName
  let fullName = req.body.fullName;

  res.status(200).json({
    quotes: {
      gallonsRequested: 99,
      deliveryAddress: "1234 Test Address",
      deliveryDate: "7/03/2020",
      price: "$1000.00",
      state: "TX",
      amountDue: "$99,000.00",
    },
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

exports.postFuelQuotes = (req, res, next) => {
  let gallonsRequested = req.body.gallonsRequested;
  let deliveryAddress = req.body.deliveryAddress;
  let deliveryDate = req.body.deliveryDate;
  let price = req.body.price;
  let state = req.body.state;
  let amountDue = req.body.amountDue;

  //check if any validation errors, send back to frontend
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      error: errors.array()[0].msg,
    });
  }

  //send dummy data since no db
  res.status(200).json({ success: "Fuel Quote added SUCCESS" });

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
