const jwt = require("jsonwebtoken");
const env = require("../../config/env");

const generateAccessToken = payload =>
  jwt.sign(payload, env.jwt.accessSecret, {
    expiresIn: env.jwt.accessExpiresIn,
  });

const generateRefreshToken = payload =>
  jwt.sign(payload, env.jwt.refreshSecret, {
    expiresIn: env.jwt.refreshExpiresIn,
  });

const generateVerificationToken = payload =>
  jwt.sign(payload, env.jwt.verificationSecret, {
    expiresIn: env.jwt.verificationExpiresIn,
  });

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateVerificationToken,
};
