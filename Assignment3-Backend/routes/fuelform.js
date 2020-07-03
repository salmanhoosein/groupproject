const express = require("express");
const fuelformController = require("../controllers/fuelform");
const router = express.Router();
const { check } = require("express-validator/check");
const authToken = require("./protection");

//add fuel quote to database
router.post(
  "/add",
  authToken,
  [
    check("gallonsRequested")
      .isLength({
        min: 1,
        max: 50,
      })
      .withMessage("Gallons requested is required"),
    check("deliveryAddress")
      .isLength({
        min: 1,
        max: 100,
      })
      .withMessage("Delivery address is required"),
    check("deliveryDate")
      .isLength({
        min: 1,  
        max: 20,
      })
      .withMessage("Delivery date is required"),
    check("price")
      .isLength({
        min: 1,
        max: 100,
      })
      .withMessage("Price is required"),
    check("state")
      .isLength({
        min: 2,
        max: 2,
      })
      .withMessage("State is required"),
    check("amountDue")
      .isLength({
        min: 1,
        max: 100,
      })
      .withMessage("Amount due is required"),
  ],
  fuelformController.postFuelQuotes
);

//get details about profile from database
router.get("/get", authToken, fuelformController.getFuelQuotes);

module.exports = router;
