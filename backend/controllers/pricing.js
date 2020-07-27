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

  //let userState = null;

  /*
  function setValue(value){
    userState = value;
    console.log(userState)
  }*/

  
  Pricing.checkState(email,userId).then((value) => {
    var userState = values[0].state;
    console.log(userState);  
  });


  res.status(200).json({
    success: "CALCULATED PRICE",
    price: Math.floor(Math.random() * 16) + 5,
    amountDue: Math.floor(Math.random() * 16) + 5,
    gallonsRequested: gallonsRequested,
    deliveryAddress: deliveryAddress,
    deliveryDate: deliveryDate,
  });
};
