const { Model, DataTypes } = require("sequelize");
const postgres = require("../config/database");

class Auth extends Model {}

Auth.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password",
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    role: {
      type: DataTypes.ENUM("customer", "seller"),
      allowNull: false,
      defaultValue: "customer",
    },
  },
  {
    sequelize: postgres,
    modelName: "Auth",
    tableName: "auth",
    timestamps: true,
    underscored: true,
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
  },
);

module.exports = Auth;
