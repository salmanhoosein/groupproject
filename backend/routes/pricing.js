const express = require("express");
const pricingController = require("../controllers/pricing");
const router = express.Router();
const { check } = require("express-validator/check");

router.get("/get", pricingController.getPricing);

module.exports = router;
