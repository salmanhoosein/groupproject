const { validationResult } = require("express-validator/check");
const Pricing = require("../database/pricing");

exports.getPricing = (req, res, next) => {
  let gallonsRequested = req.body.gallonsRequested;
  let deliveryAddress = req.body.deliveryAddress;
  let deliveryDate = req.body.deliveryDate;
  res.status(200).json({
    success: "CALCULATED PRICE",
    suggestedPrice: 1000,
    amountDue: 1999,
  });
};
