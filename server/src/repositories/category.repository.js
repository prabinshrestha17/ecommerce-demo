const Category = require("../models/category.model");

class categoryRepository {
  async createCategory(categoryData) {
    return await Category.create(categoryData);
  }

  async findCategoryById(id) {
    return await Category.findByPk(id);
  }

  async findAllCategories() {
    return await Category.findAll();
  }

  async updateCategory(id, data) {
    await Category.update(data, { where: { id } });
    return this.findCategoryById(id);
  }

  async deleteCategory(id) {
    return await Category.destroy({ where: { id } });
  }
}

module.exports = new categoryRepository();
