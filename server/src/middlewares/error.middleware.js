const { errorResponse } = require("../utils/response");

const notFoundHandler = (req, res) =>
  errorResponse(res, `Route not found: ${req.originalUrl}`, 404);

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal server error";
  const errors = err.errors || null;

  if (process.env.NODE_ENV !== "test") {
    console.error(err);
  }

  return errorResponse(res, message, statusCode, errors);
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
