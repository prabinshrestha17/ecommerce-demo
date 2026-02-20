const { body } = require("express-validator");

const createProductValidator = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("price").isFloat({ gt: 0 }).withMessage("Price must be greater than 0"),
  body("stock").isInt({ min: 0 }).withMessage("Stock must be 0 or greater"),
  body("description").optional().trim(),
  body("imageUrl")
    .optional()
    .isURL()
    .withMessage("imageUrl must be a valid URL"),
];

const updateProductValidator = [
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Title cannot be empty"),
  body("price")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Price must be greater than 0"),
  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock must be 0 or greater"),
  body("imageUrl")
    .optional()
    .isURL()
    .withMessage("imageUrl must be a valid URL"),
];

module.exports = {
  createProductValidator,
  updateProductValidator,
};
