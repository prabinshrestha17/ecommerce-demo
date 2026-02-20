const Auth = require("../models/user.model");

class AuthRepository {
  async createUser(userData) {
    return Auth.create(userData);
  }

  async findUserByEmail(email) {
    return Auth.scope(null).findOne({
      where: { email },
    });
  }

  async verifyUser(email) {
    const result = await Auth.update(
      { isVerified: true },
      {
        where: { email },
        returning: true,
        plain: true,
      },
    );
    return result[1];
  }

  async verifyUserById(id) {
    const user = await Auth.scope(null).findByPk(id);

    if (!user) {
      return null;
    }

    await user.update({ isVerified: true });
    return Auth.findByPk(id);
  }

  async login(email) {
    return Auth.scope(null).findOne({
      where: { email },
    });
  }

  async findUserById(id) {
    return Auth.findByPk(id);
  }

  async findUserByIdWithPassword(id) {
    return Auth.scope(null).findByPk(id);
  }

  async updateUser(id, data) {
    const user = await Auth.scope(null).findByPk(id);

    if (!user) {
      return null;
    }

    await user.update(data);
    return Auth.findByPk(id);
  }

  async deleteUser(id) {
    return Auth.destroy({ where: { id } });
  }
}

module.exports = new AuthRepository();
