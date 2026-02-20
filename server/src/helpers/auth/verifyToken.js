const jwt = require("jsonwebtoken");
const env = require("../../config/env");

const verifyAccessToken = token => jwt.verify(token, env.jwt.accessSecret);
const verifyRefreshToken = token => jwt.verify(token, env.jwt.refreshSecret);
const verifyVerificationToken = token =>
  jwt.verify(token, env.jwt.verificationSecret);

module.exports = {
  verifyAccessToken,
  verifyRefreshToken,
  verifyVerificationToken,
};
