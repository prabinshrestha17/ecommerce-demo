const categoryRepository = require("../repositories/category.repository");

class CategoryService {
  async createCategory(categoryData) {
    return await categoryRepository.createCategory(categoryData);
  }

  async getCategoryById(id) {
    return await categoryRepository.findCategoryById(id);
  }

  async getAllCategories() {
    return await categoryRepository.findAllCategories();
  }

  async updateCategory(id, data) {
    return await categoryRepository.updateCategory(id, data);
  }

  async deleteCategory(id) {
    return await categoryRepository.deleteCategory(id);
  }
}

module.exports = new CategoryService();
