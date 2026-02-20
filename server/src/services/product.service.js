const productRepository = require("../repositories/product.repository");

class productService {
  async createProduct(productData) {
    return await productRepository.createProduct(productData);
  }
  async getAllProducts() {
    return await productRepository.getAllProducts();
  }
  async getProductById(id) {
    return await productRepository.getProductById(id);
  }
  async getProductByCategory(categoryId) {
    return await productRepository.getProductsByCategory(categoryId);
  }
  async updateProduct(id, updatedData) {
    return await productRepository.updateProduct(id, updatedData);
  }
  async deleteProduct(id) {
    return await productRepository.deleteProduct(id);
  }
}

module.exports = new productService();
