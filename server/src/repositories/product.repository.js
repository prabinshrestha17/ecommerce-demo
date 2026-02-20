const Product = require("../models/product.model");

class productRepository {
  async createProduct(productData) {
    return await Product.create(productData);
  }

  async getAllProducts() {
    return await Product.findAll();
  }

  async getProductById(id) {
    return await Product.findByPk(id);
  }

  async updateProduct(id, updatedData) {
    const product = await this.getProductById(id);
    if (product) {
      return await product.update(updatedData);
    }
    return null;
  }

  async getProductsByCategory(categoryId) {
    return await Product.findAll({ where: { categoryId } });
  }

  async deleteProduct(id) {
    const product = await this.getProductById(id);
    if (product) {
      await product.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new productRepository();
