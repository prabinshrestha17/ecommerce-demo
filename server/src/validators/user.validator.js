const { body } = require("express-validator");

const registerValidator = [
  body("username").trim().notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("role")
    .optional()
    .isIn(["customer", "seller"])
    .withMessage("Role must be either customer or seller"),
];

const loginValidator = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

const verifyValidator = [
  body("email").isEmail().withMessage("Valid email is required"),
];

const updateProfileValidator = [
  body("username")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Username cannot be empty"),
  body("role")
    .optional()
    .isIn(["customer", "seller"])
    .withMessage("Role must be either customer or seller"),
];

module.exports = {
  registerValidator,
  loginValidator,
  verifyValidator,
  updateProfileValidator,
};
