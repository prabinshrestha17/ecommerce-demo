const Order = require("../models/order.model");

class orderRepository {
  async generateOrderNumber() {
    let orderNumber;
    let exists = true;

    while (exists) {
      const timestamp = Date.now().toString();
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      orderNumber = `ORD-${timestamp}-${randomSuffix}`;
      const existingOrder = await Order.findOne({ where: { orderNumber } });
      exists = Boolean(existingOrder);
    }

    return orderNumber;
  }

  async createOrder(orderData) {
    const orderNumber =
      orderData.orderNumber || (await this.generateOrderNumber());
    return await Order.create({
      ...orderData,
      orderNumber,
    });
  }

  async getOrderById(id) {
    return await Order.findByPk(id);
  }
  async getAllOrders() {
    return await Order.findAll();
  }

  async getOrdersByUserId(userId) {
    return await Order.findAll({ where: { userId } });
  }

  async updateOrderStatus(id, status) {
    const order = await this.getOrderById(id);
    if (order) {
      order.status = status;
      return await order.save();
    }
    return null;
  }

  async deleteOrder(id) {
    const order = await this.getOrderById(id);
    if (order) {
      await order.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new orderRepository();
