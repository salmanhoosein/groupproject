const express = require("express");
const pricingController = require("../controllers/pricing");
const router = express.Router();
const { check } = require("express-validator/check");
const authGuard = require("./protection");

//get Pricing value
router.post(
  "/get",
  authGuard,
  [
    check("gallonsRequested")
      .isLength({
        min: 1,
        max: 50,
      })
      .isInt({ gt: 0 })
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
  ],
  pricingController.getPricing
);
module.exports = router;
