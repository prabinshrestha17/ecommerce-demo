const express = require("express");
const authController = require("../controllers/auth.controller");
const { validateRequest } = require("../middlewares/validate.middleware");
const {
  registerValidator,
  verifyValidator,
  loginValidator,
} = require("../validators/user.validator");

const router = express.Router();

router.post("/register", registerValidator, validateRequest, (req, res, next) =>
  authController.register(req, res, next),
);
router.post("/verify", verifyValidator, validateRequest, (req, res, next) =>
  authController.verify(req, res, next),
);
router.get("/verify-account", (req, res, next) =>
  authController.verifyAccount(req, res, next),
);
router.post("/login", loginValidator, validateRequest, (req, res, next) =>
  authController.login(req, res, next),
);

module.exports = router;
