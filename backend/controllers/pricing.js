const { validationResult } = require("express-validator/check");
const Pricing = require("../database/pricing");

exports.getPricing = (req, res, next) => {
  let gallonsRequested = req.body.gallonsRequested;
  let deliveryAddress = req.body.deliveryAddress;
  let deliveryDate = req.body.deliveryDate;
  let email = req.body.email;
  let userId = req.body.userId;

  //check if any validation errors, send back to frontend
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      error: errors.array()[0].msg,
    });
  }
  console.log(deliveryAddress);
  res.status(200).json({
    success: "CALCULATED PRICE",
    price: gallonsRequested * 0.12,
    amountDue: gallonsRequested * 2.51,
    gallonsRequested: gallonsRequested,
    deliveryAddress: deliveryAddress,
    deliveryDate: deliveryDate,
  });
};
