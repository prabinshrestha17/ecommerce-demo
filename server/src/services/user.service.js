const {
  generateAccessToken,
  generateRefreshToken,
  generateVerificationToken,
} = require("../helpers/auth/generateToken");
const { hashPassword, comparePassword } = require("../helpers/auth/password");
const { verifyVerificationToken } = require("../helpers/auth/verifyToken");
const env = require("../config/env");
const authRepository = require("../repositories/user.repository");
const { sendEmail, renderTemplate } = require("../utils/email");

const sanitizeUser = user => {
  if (!user) {
    return null;
  }

  const plainUser = user.toJSON ? user.toJSON() : user;
  const { password, ...safeUser } = plainUser;
  return safeUser;
};

class AuthService {
  async register(userData) {
    const { username, email, password } = userData;

    const existingUser = await authRepository.findUserByEmail(email);
    if (existingUser) {
      const error = new Error("Email already in use");
      error.status = 409;
      throw error;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await authRepository.createUser({
      username,
      email,
      password: hashedPassword,
      role: userData.role || "customer",
    });

    try {
      const verifyToken = generateVerificationToken({
        id: newUser.id,
        email: newUser.email,
      });

      const verificationLink = `${env.appUrl}/api/auth/verify-account?token=${verifyToken}`;
      const html = renderTemplate("verify-account", {
        username: newUser.username,
        verificationLink,
        expiryText: env.jwt.verificationExpiresIn,
      });

      await sendEmail({
        to: email,
        subject: "Verify your Ecommerce account",
        html,
        text: `Hello ${username}, verify your account: ${verificationLink}`,
      });
    } catch (error) {
      console.error("Email send failed:", error.message);
    }

    return sanitizeUser(newUser);
  }

  async verifyUser(email) {
    const user = await authRepository.login(email);
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }

    const updatedUser = await authRepository.verifyUser(email);

    return sanitizeUser(updatedUser);
  }

  async login(email, password) {
    const user = await authRepository.login(email);
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }

    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      throw error;
    }

    if (!user.isVerified) {
      const error = new Error("Please verify your account from email first");
      error.status = 403;
      throw error;
    }

    const tokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      user: sanitizeUser(user),
      accessToken: generateAccessToken(tokenPayload),
      refreshToken: generateRefreshToken(tokenPayload),
    };
  }

  async getUserById(id) {
    const user = await authRepository.findUserById(id);
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }
    return sanitizeUser(user);
  }

  async verifyUserByToken(token) {
    let payload;

    try {
      payload = verifyVerificationToken(token);
    } catch (tokenError) {
      const error = new Error("Invalid or expired verification token");
      error.status = 400;
      throw error;
    }

    const user = await authRepository.findUserByIdWithPassword(payload.id);

    if (!user || user.email !== payload.email) {
      const error = new Error("User not found for this token");
      error.status = 404;
      throw error;
    }

    if (user.isVerified) {
      return sanitizeUser(user);
    }

    const verifiedUser = await authRepository.verifyUserById(payload.id);
    return sanitizeUser(verifiedUser);
  }

  async updateUser(id, data) {
    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    const updatedUser = await authRepository.updateUser(id, data);
    if (!updatedUser) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }
    return sanitizeUser(updatedUser);
  }

  async deleteUser(id) {
    const deleted = await authRepository.deleteUser(id);
    if (!deleted) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }
  }
}

module.exports = new AuthService();
