const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 5000),
  appUrl: process.env.APP_URL || `http://localhost:${process.env.PORT || 5000}`,
  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    dialect: process.env.DB_DIALECT || "postgres",
    ssl: String(process.env.DB_SSL || "true") === "true",
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || "change_me_access_secret",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "change_me_refresh_secret",
    verificationSecret:
      process.env.JWT_VERIFICATION_SECRET || "change_me_verification_secret",
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "1d",
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    verificationExpiresIn: process.env.JWT_VERIFICATION_EXPIRES_IN || "1d",
  },
  email: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || "false") === "true",
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.EMAIL_FROM || "no-reply@ecommerce.local",
  },
};

module.exports = env;
