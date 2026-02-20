const cartService = require("../services/cart.service");
const { successResponse, errorResponse } = require("../utils/response");

class cartController {
  async createCart(req, res) {
    try {
      const userId = req.user.id;
      const { productId, quantity } = req.body;
      const cart = await cartService.createCart(userId, productId, quantity);
      return successResponse(res, cart, "Cart created successfully", 201);
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }

  async getCart(req, res) {
    try {
      const userId = req.user.id;
      const cart = await cartService.getCartByUserId(userId);
      return successResponse(res, cart, "Cart fetched successfully");
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }

  async updateCartItem(req, res) {
    try {
      const userId = req.user.id;
      const { productId, quantity } = req.body;
      const updatedItem = await cartService.updateCartItem(
        userId,
        productId,
        quantity,
      );
      return successResponse(
        res,
        updatedItem,
        "Cart item updated successfully",
      );
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }

  async removeCartItem(req, res) {
    try {
      const userId = req.user.id;
      const { productId } = req.body;
      await cartService.removeCartItem(userId, productId);
      return successResponse(res, {}, "Cart item removed successfully");
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }

  async clearCart(req, res) {
    try {
      const userId = req.user.id;
      await cartService.clearCart(userId);
      return successResponse(res, {}, "Cart cleared successfully");
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }
}

module.exports = new cartController();
