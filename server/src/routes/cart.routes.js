const express = require("express");
const cartController = require("../controllers/cart.controller");
const {
  authenticate,
  authorizeRoles,
} = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/create", authenticate, cartController.createCart);
router.get("/", authenticate, cartController.getCart);
router.put("/update", authenticate, cartController.updateCartItem);
router.delete("/delete", authenticate, cartController.removeCartItem);

module.exports = router;
