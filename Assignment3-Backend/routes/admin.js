const express = require("express");
const adminController = require("../controllers/controlleradmin.txt");
const router = express.Router();

// use destructuring because it's an object
const { check, body } = require("express-validator/check");

//add profile to database
router.post(
  "/addprofile",
  [
    check("fullName")
      .isLength({
        max: 50,
      })
      .withMessage("Full Name is required"),
    check("addressOne")
      .isLength({
        max: 100,
      })
      .withMessage("Address One is required"),
    check("addressTwo")
      .isLength({
        max: 100,
      })
      .withMessage("Address Two is optional"),
    check("city")
      .isLength({
        max: 100,
      })
      .withMessage("City is required"),
    check("state").withMessage("State is required"),
    check("zip")
      .isLength({
        min: 5,
        max: 9,
      })
      .withMessage("Zip is required and must be between 5-9 numbers"),
  ],
  adminController.postProfile
);

//get details about profile from database
router.get("/getprofile", adminController.getProfile);

module.exports = router;
