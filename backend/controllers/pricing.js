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

  let locationFactor=0;
  let gallonsRequestedFactor =0;
  let profitFactor = 0.1;
  let pricePerGallon = 0;
  let totalPrice =0;
  // let historyFactor=0;

  if (gallonsRequested>1000) {
    gallonsRequestedFactor=0.02
  }
  else{
    gallonsRequestedFactor=0.03
  }
 
  Pricing.checkState(email,userId).then((value) => {
      console.log(value[0][0].state);
        if(value[0][0].state ==="TX")  {
       
          locationFactor = 0.02;
        }
        else {
          locationFactor=0.01;
        }

        pricePerGallon=1.5*(locationFactor+gallonsRequestedFactor+profitFactor);
        totalPrice = gallonsRequested*pricePerGallon;
        let check = pricePerGallon.toFixed(3)
        

  }).then((result) =>    res.status(200).json({
        success: "CALCULATED PRICE",
        price: +pricePerGallon.toFixed(3),
        amountDue: +totalPrice.toFixed(2),
        gallonsRequested: gallonsRequested,
        deliveryAddress: deliveryAddress,
        deliveryDate: deliveryDate,
        })); 
  
};
