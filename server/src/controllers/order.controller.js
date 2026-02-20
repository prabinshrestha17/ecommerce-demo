const orderService = require("../services/order.service");
const { successResponse } = require("../utils/response");

class orderController {
  async createOrder(req, res, next) {
    try {
      const orderData = {
        ...req.body,
        userId: req.user.id,
      };
      const result = await orderService.createOrder(orderData);

      return successResponse(res, result, "Order Created Successfully", 201);
    } catch (error) {
      return next(error);
    }
  }

  async getAllOrders(req, res, next) {
    try {
      const result = await orderService.getAllOrders();
      return successResponse(res, result, "Orders fetched successfully");
    } catch (error) {
      return next(error);
    }
  }

  async getOrderById(req, res, next) {
    try {
      const result = await orderService.getOrderById(req.params.id);
      return successResponse(res, result, "Order fetched successfully");
    } catch (error) {
      return next(error);
    }
  }

  async getOrdersByUserId(req, res, next) {
    try {
      const userId = req.user.id;
      const result = await orderService.getOrdersByUserId(userId);
      return successResponse(res, result, "Orders fetched successfully");
    } catch (error) {
      return next(error);
    }
  }

  async updateOrderStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const result = await orderService.updateOrderStatus(id, status);
      return successResponse(res, result, "Order status updated successfully");
    } catch (error) {
      return next(error);
    }
  }

  async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      await orderService.deleteOrder(id);
      return successResponse(res, {}, "Order deleted successfully");
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new orderController();
