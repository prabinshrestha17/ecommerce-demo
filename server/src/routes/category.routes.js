const express = require("express");
const categoryController = require("../controllers/category.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/create",
  authenticate,
  authorizeRoles("seller"),
  categoryController.createCategory,
);
router.get("/:id", categoryController.getCategoryById);
router.get("/", categoryController.getAllCategories);
router.put(
  "/:id",
  authenticate,
  authorizeRoles("seller"),
  categoryController.updateCategory,
);
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("seller"),
  categoryController.deleteCategory,
);

module.exports = router;
