const express = require("express");
const { body } = require("express-validator");

const User = require("../models/user");
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/", authController.getAllUsers);
router.post("/login", authController.login);
router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 5, max: 15 })
      .withMessage("Username must be between 5 and 15 characters")
      .custom(async (value) => {
        const existingUser = await User.findOne({ username: value });
        if (existingUser) {
          throw new Error("Username is already taken");
        }
        return true;
      }),
    body("email")
      .isLength({ min: 5, max: 30 })
      .withMessage("Email must be between 5 and 30 characters")
      .isEmail()
      .withMessage("Email must be a valid email address")
      .custom(async (value) => {
        const existingUser = await User.findOne({ email: value });
        if (existingUser) {
          throw new Error("Email is already taken");
        }
        return true;
      }),
    body("password").isLength({ min: 5, max: 12 }),
  ],
  authController.register,
);

module.exports = router;
