const { errorResponse } = require("../utils/response");
const { verifyAccessToken } = require("../helpers/auth/verifyToken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return errorResponse(res, "Unauthorized", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    return next();
  } catch (error) {
    return errorResponse(res, "Invalid or expired token", 401);
  }
};

const authorizeRoles =
  (...roles) =>
  (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return errorResponse(
        res,
        `Forbidden: required role ${roles.join(" or ")}`,
        403,
      );
    }

    return next();
  };

module.exports = {
  authenticate,
  authorizeRoles,
};
