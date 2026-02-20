const orderRepository = require("../repositories/order.repository");
const productRepository = require("../repositories/product.repository");

class OrderService {
  async createOrder(orderData) {
    const { orderItems } = orderData;

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      const error = new Error("orderItems must be a non-empty array");
      error.status = 400;
      throw error;
    }

    let totalAmount = 0;

    for (const item of orderItems) {
      if (
        !item?.productId ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1
      ) {
        const error = new Error(
          "Each order item must include a valid productId and quantity >= 1",
        );
        error.status = 400;
        throw error;
      }

      const product = await productRepository.getProductById(item.productId);
      if (!product) {
        const error = new Error(`Product not found: ${item.productId}`);
        error.status = 404;
        throw error;
      }

      const price = Number(product.sellingPrice);
      totalAmount += price * item.quantity;
    }

    const roundedTotalAmount = Number(totalAmount.toFixed(2));

    return await orderRepository.createOrder({
      ...orderData,
      totalAmount: roundedTotalAmount,
    });
  }

  async getAllOrders() {
    return await orderRepository.getAllOrders();
  }

  async getOrderById(id) {
    return await orderRepository.getOrderById(id);
  }

  async getOrdersByUserId(userId) {
    return await orderRepository.getOrdersByUserId(userId);
  }

  async updateOrderStatus(id, status) {
    return await orderRepository.updateOrderStatus(id, status);
  }

  async deleteOrder(id) {
    return await orderRepository.deleteOrder(id);
  }
}

module.exports = new OrderService();
