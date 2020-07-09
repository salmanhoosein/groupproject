const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const { check } = require("express-validator/check");

const User = require("../database/user");

router.post(
    "/login",
    [
        check("email").isEmail().withMessage("Enter a valid email"),
        check("password", "Invalid Password").isLength({
            min: 1,
        }),
    ],
    authController.postLogin
);

router.post(
    "/register",
    [
        check("email")
            .isEmail()
            .withMessage("Enter a valid email")
            .isLength({
                min: 1,
            })
            .normalizeEmail()
            //no duplicate emails
            .custom((value, { req }) => {
                return User.findUserByEmail(value).then((user) => {
                    //if email exists in system, send error
                    if (user[0].length > 0) {
                        return Promise.reject("Email already exists");
                    }
                });
            }),
        check("password", "Invalid Password").isLength({
            min: 1,
        }),
    ],
    authController.postRegister
);

module.exports = router;
