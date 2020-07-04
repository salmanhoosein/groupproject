const express = require("express");
const fuelformController = require("../controllers/fuelform");
const router = express.Router();
const { check } = require("express-validator/check");

//add fuel quote to database
router.post(
  "/add",
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
    check("amountDue")
      .isLength({
        min: 1,
        max: 100,
      })
      .withMessage("Amount due is required"),
  ],
  fuelformController.postFuelQuotes
);

//get details about fuelQuotes from database
router.get("/get", fuelformController.getFuelQuotes);

module.exports = router;
