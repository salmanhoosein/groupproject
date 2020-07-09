const { validationResult } = require("express-validator/check");
const FuelForm = require("../database/fuelform");

exports.getFuelQuotes = (req, res, next) => {
  let email = req.body.email;
  FuelForm.findFuelFormsByEmail(email)
    .then((quotes) => {
      console.log(JSON.parse(JSON.stringify(quotes[0])));
      res.status(200).json({
        success: "Fuel Quotes found",
        quotes: JSON.parse(JSON.stringify(quotes[0])),
      });
    })
    .catch((err) => {
      res.json({ error: "Fuel Quotes not Found" });
    });
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

  FuelForm.saveFuelform(
    userId,
    email,
    gallonsRequested,
    deliveryAddress,
    deliveryDate,
    price,
    amountDue
  )
    .then((result) => {
      res
        .status(201)
        .json({ result: result, success: "Fuel quote added successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: "Fuel quote not saved to database" });
    });
};
