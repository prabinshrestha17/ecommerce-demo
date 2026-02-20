const sequelize = require("../config/database");
const Auth = require("./user.model");

module.exports = {
  sequelize,
  Auth,
  User: Auth,
};
