const categoryService = require("../services/category.service");
const { successResponse } = require("../utils/response");

class categoryController {
  async createCategory(req, res) {
    const category = await categoryService.createCategory(req.body);
    return successResponse(res, category, "Category created successfully");
  }

  async getCategoryById(req, res) {
    const category = await categoryService.getCategoryById(req.params.id);
    return successResponse(res, category, "Category fetched successfully");
  }

  async getAllCategories(req, res) {
    const categories = await categoryService.getAllCategories();
    return successResponse(res, categories, "Categories fetched successfully");
  }

  async updateCategory(req, res) {
    const category = await categoryService.updateCategory(
      req.params.id,
      req.body,
    );
    return successResponse(res, category, "Category updated successfully");
  }

  async deleteCategory(req, res) {
    await categoryService.deleteCategory(req.params.id);
    return successResponse(res, {}, "Category deleted successfully");
  }
}

module.exports = new categoryController();
