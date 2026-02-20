const cartRepository = require("../repositories/cart.repository");

class cartService {
  async createCart(userId, productId = null, quantity = 1) {
    return await cartRepository.createCart(userId, productId, quantity);
  }

  async getCartByUserId(userId) {
    return await cartRepository.getCartByUserId(userId);
  }

  async updateCartItem(userId, productId, quantity) {
    return await cartRepository.updateCartItem(userId, productId, quantity);
  }

  async removeCartItem(userId, productId) {
    return await cartRepository.removeFromCart(userId, productId);
  }

  async clearCart(userId) {
    return await cartRepository.clearCart(userId);
  }
}

module.exports = new cartService();
