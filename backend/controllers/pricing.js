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

  let currentPrice = 1.5;
  let locationFactor = 0.04;
  let gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;
  let companyProfitFactor = 0.1;
  let margin = 0;
  let suggestedPricePerGallon = 0;
  let rateHistoryFactor = 0;

  Pricing.checkState(email, userId)
    .then((value) => {
      // console.log("State: ", value[0][0].state);
      if (value[0][0].state === "TX") locationFactor = 0.02;
      return Pricing.checkHistory(email, userId);
    })
    .then((result) => {
      // console.log("Total ordered before: ", result[0][0]["count(*)"]);
      if (result[0][0]["count(*)"]) rateHistoryFactor = 0.01;
      margin =
        currentPrice *
        (locationFactor -
          rateHistoryFactor +
          gallonsRequestedFactor +
          companyProfitFactor);
      suggestedPricePerGallon = currentPrice + margin;
      /*
      console.log("galReq: ", gallonsRequested);
      console.log("margin: ", margin);
      console.log("locationFactor: ", locationFactor);
      console.log("rateHistoryFactor: ", rateHistoryFactor);
      console.log("galReqFactor: ", gallonsRequestedFactor);
      console.log("comProfFactor: ", companyProfitFactor);
      console.log("sugg price/gal: ", suggestedPricePerGallon);
      console.log("amountDue:", gallonsRequested * suggestedPricePerGallon);
      */
      res.status(200).json({
        success: "Calculated Price Succesfully",
        price: suggestedPricePerGallon,
        amountDue: (gallonsRequested * suggestedPricePerGallon).toFixed(2),
        gallonsRequested: gallonsRequested,
        deliveryAddress: deliveryAddress,
        deliveryDate: deliveryDate,
      });
    });
};
