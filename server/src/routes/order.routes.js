const express = require("express");
const {
  authenticate,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const orderController = require("../controllers/order.controller");
const router = express.Router();

router.post("/create", authenticate, orderController.createOrder);

router.get(
  "/",
  authenticate,
  authorizeRoles("seller"),
  orderController.getAllOrders,
);

router.get("/user-orders", authenticate, orderController.getOrdersByUserId);

router.get(
  "/:id",
  authenticate,
  authorizeRoles("seller"),
  orderController.getOrderById,
);

router.put(
  "/:id/status",
  authenticate,
  authorizeRoles("seller"),
  orderController.updateOrderStatus,
);

router.delete(
  "/:id",
  authenticate,
  authorizeRoles("seller"),
  orderController.deleteOrder,
);

module.exports = router;
