const { Model, DataTypes } = require("sequelize");
const postgres = require("../config/database");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize: postgres,
    modelName: "Cart",
    tableName: "carts",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Cart;
