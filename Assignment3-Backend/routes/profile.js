const express = require("express");
const profileController = require("../controllers/profile");
const router = express.Router();
const { check } = require("express-validator/check");
const authGuard = require("./protection");
//add profile to database
router.post(
  "/add",
  authGuard,
  [
    check("fullName")
      .isLength({
        min: 1,
        max: 50,
      })
      .withMessage("Full Name is required"),
    check("addressOne")
      .isLength({
        min: 1,
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
        min: 1,
        max: 100,
      })
      .withMessage("City is required"),
    check("state")
      .isLength({
        min: 2,
        max: 2,
      })
      .withMessage("State is required"),
    check("zip")
      .isLength({
        min: 5,
        max: 9,
      })
      .withMessage("Zip is required and must be between 5-9 numbers"),
  ],
  profileController.postProfile
);

//get details about profile from database
authGuard, router.get("/get", authGuard, profileController.getProfile);

module.exports = router;
