const express = require("express");
const userController = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { validateRequest } = require("../middlewares/validate.middleware");
const { updateProfileValidator } = require("../validators/user.validator");

const router = express.Router();

router.get("/me", authenticate, (req, res, next) =>
  userController.getMe(req, res, next),
);
router.patch(
  "/me",
  authenticate,
  updateProfileValidator,
  validateRequest,
  (req, res, next) => userController.updateMe(req, res, next),
);
router.delete("/me", authenticate, (req, res, next) =>
  userController.deleteMe(req, res, next),
);

module.exports = router;
