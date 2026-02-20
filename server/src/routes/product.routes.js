const express = require("express");
const productController = require("../controllers/product.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/create",
  authenticate,
  authorizeRoles("seller"),
  productController.createProduct,
);
router.get("/:id", productController.getProductById);
router.get("/", productController.getAllProducts);
router.get("/get-product-by-category", productController.getProductByCategory);
router.put(
  "/:id",
  authenticate,
  authorizeRoles("seller"),
  productController.updateProduct,
);
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("seller"),
  productController.deleteProduct,
);

module.exports = router;
