const authService = require("../services/user.service");
const { successResponse } = require("../utils/response");

class UserController {
  async getMe(req, res, next) {
    try {
      const user = await authService.getUserById(req.user.id);
      return successResponse(res, user, "User profile fetched successfully");
    } catch (error) {
      return next(error);
    }
  }

  async updateMe(req, res, next) {
    try {
      const user = await authService.updateUser(req.user.id, req.body);
      return successResponse(res, user, "User profile updated successfully");
    } catch (error) {
      return next(error);
    }
  }

  async deleteMe(req, res, next) {
    try {
      await authService.deleteUser(req.user.id);
      return successResponse(res, {}, "User account deleted successfully");
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new UserController();
