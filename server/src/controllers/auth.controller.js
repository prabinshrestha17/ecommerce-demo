const authService = require("../services/user.service");
const { successResponse } = require("../utils/response");

class AuthController {
  async register(req, res, next) {
    try {
      const user = await authService.register(req.body);
      return successResponse(res, user, "User registered successfully", 201);
    } catch (error) {
      return next(error);
    }
  }

  async verify(req, res, next) {
    try {
      const { email } = req.body;
      const user = await authService.verifyUser(email);
      return successResponse(res, user, "User verified successfully");
    } catch (error) {
      return next(error);
    }
  }

  async verifyAccount(req, res, next) {
    try {
      const token = req.query.token;

      if (!token) {
        return res.status(400).send("Verification token is required");
      }

      await authService.verifyUserByToken(token);

      return res
        .status(200)
        .send(
          "<h2>Account verified successfully. You can close this tab and login now.</h2>",
        );
    } catch (error) {
      return next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const data = await authService.login(email, password);
      return successResponse(res, data, "Login successful");
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new AuthController();
