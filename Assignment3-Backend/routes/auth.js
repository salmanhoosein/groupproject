const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const User = require("../models/user");

// use destructuring because it's an object
const { check, body } = require("express-validator/check");


// /admin/test => GET
router.get("/test", authController.getTesting);


router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Enter a valid email"),
    check("password", "Invalid Password")
      .isLength({
        min: 6,
      })
      .isAlphanumeric(),
  ],
  authController.postLogin
);

router.post("/logout", authController.postLogout);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Enter a valid email")
      .normalizeEmail(), //make all lowercase //Sanitizing
    // .custom((value, { req }) => {
    //   return User.findOne({
    //     email: value, //if email is found
    //   }).then((userDoc) => {
    //     //if email exists in system, redirect
    //     if (userDoc) {
    //       return Promise.reject("Email already exists"); //
    //     }
    //   });
    // }),
    check("password", "Invalid Password")
      .isLength({
        min: 6,
      })
      .isAlphanumeric()
      .trim(), //remove white spaces //Sanitizing
    check("confirmPassword")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords aren't the same");
        }
        return true;
      })
      .trim(), //remove white spaces  //Sanitizing
  ],
  authController.postSignUp
);

module.exports = router;
