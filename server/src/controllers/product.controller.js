const productService = require("../services/product.service");
const { successResponse } = require("../utils/response");

class productController {
  async createProduct(req, res, next) {
    try {
      const product = await productService.createProduct(req.body);
      return successResponse(res, product, "Product created successfully");
    } catch (error) {
      return next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const product = await productService.getProductById(req.params.id);
      return successResponse(res, product, "Product fetched successfully");
    } catch (error) {
      return next(error);
    }
  }

  async getProductByCategory(req, res, next) {
    try {
      const categoryId = req.query.category;
      const products = await productService.getProductByCategory(categoryId);
      return successResponse(res, products, "Products fetched successfully");
    } catch (error) {
      return next(error);
    }
  }

  async getAllProducts(req, res, next) {
    try {
      const products = await productService.getAllProducts();
      return successResponse(res, products, "Products fetched successfully");
    } catch (error) {
      return next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const product = await productService.updateProduct(
        req.params.id,
        req.body,
      );
      return successResponse(res, product, "Product updated successfully");
    } catch (error) {
      return next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      await productService.deleteProduct(req.params.id);
      return successResponse(res, {}, "Product deleted successfully");
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new productController();
