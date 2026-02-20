const Cart = require("../models/cart.model");

class CartRepository {
  async createCart(userId, productId = null, quantity = 1) {
    if (quantity < 1) {
      throw new Error("Quantity must be at least 1");
    }
    return await Cart.create({ userId, productId, quantity });
  }

  async getCartByUserId(userId) {
    return await Cart.findAll({ where: { userId } });
  }

  async addToCart(userId, productId, quantity) {
    const cartItem = await Cart.findOne({ where: { userId, productId } });

    if (cartItem) {
      cartItem.quantity += quantity;
      return await cartItem.save();
    } else {
      return await Cart.create({ userId, productId, quantity });
    }
  }

  async updateCartItem(userId, productId, quantity) {
    const cartItem = await Cart.findOne({ where: { userId, productId } });

    if (cartItem) {
      cartItem.quantity = quantity;
      return await cartItem.save();
    }
    return null;
  }

  async removeFromCart(userId, productId) {
    const cartItem = await Cart.findOne({ where: { userId, productId } });

    if (cartItem) {
      await cartItem.destroy();
      return true;
    }
    return false;
  }

  async clearCart(userId) {
    await Cart.destroy({ where: { userId } });
  }
}

module.exports = new CartRepository();
