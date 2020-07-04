const express = require("express");
const pricingController = require("../controllers/pricing");
const router = express.Router();
const { check } = require("express-validator/check");
const authToken = require("./protection");


router.get("/get", authToken, pricingController.getPricing);

module.exports = router;
