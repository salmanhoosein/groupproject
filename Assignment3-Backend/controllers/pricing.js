const { validationResult } = require("express-validator/check");
const Pricing = require("../database/pricing");


exports.getPricing = (req, res, next) => {

  //find pricing module based on fullName
  let fullName = req.body.fullName;

  res.status(200).json({
    profile: {
      margin: 5,
      currentPrice: 2,
      location: "TX",
      rateHistory: 0.04,
      gallonRequested: 200,
      suggestedPrice: 3,
      profit: 0.1,
      total: 99999
    },
  });

};	