const { validationResult } = require("express-validator/check");
const FuelForm = require("../database/fuelform");

exports.getFuelQuotes = (req, res, next) => {
  let email = req.body.email;
  let userId = req.body.userId;

  res.status(200).json({
    success: "Quotes Found",
    quotes: [
      {
        gallonsRequested: 99,
        deliveryAddress: "1234 Test Address",
        deliveryDate: "7/03/2020",
        price: "$1000.00",
        amountDue: "$99,000.00",
      },
      {
        gallonsRequested: 99,
        deliveryAddress: "1234 Test Address",
        deliveryDate: "7/03/2020",
        price: "$1000.00",
        amountDue: "$99,000.00",
      },
      {
        gallonsRequested: 99,
        deliveryAddress: "1234 Test Address",
        deliveryDate: "7/03/2020",
        price: "$1000.00",
        amountDue: "$99,000.00",
      },
      {
        gallonsRequested: 99,
        deliveryAddress: "1234 Test Address",
        deliveryDate: "7/03/2020",
        price: "$1000.00",
        amountDue: "$99,000.00",
      },
    ],
  });

  /* @TODO: NEED ASSIGNMENT 4 DATABASE
  FuelForm.fetchAll()
    .then((quotes) => {
      if (!quotes) {
        res.json({ error: "Fuel Quotes not Found" });
      } else {
        res.status(200).json({ success: "Fuel Quotes found", quotes: quotes });
      }
    })
    .catch((err) => {
      res.json({ error: "Fuel Quote not Found" });
    });
  */
};

exports.postFuelQuotes = (req, res, next) => {
  let gallonsRequested = req.body.gallonsRequested;
  let deliveryAddress = req.body.deliveryAddress;
  let deliveryDate = req.body.deliveryDate;
  let price = req.body.price;
  let amountDue = req.body.amountDue;
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
  res.status(201).json({ success: "Fuel Quote added SUCCESS" });

  /*@TODO: Need Assignment 4 Database
  let form = new FuelForm(fullName, addressOne, addressTwo, city, zip);
  form
    .save()
    .then((result) => {
      res.status(200).json({ result: "Form added SUCCESS" });
    })
    .catch((err) => {
      res.json({ error: "Error adding Form" });
    });
  */
};
