const { Model, DataTypes } = require("sequelize");
const postgres = require("../config/database");

class Order extends Model {}

Order.init(
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

    orderNumber: {
      type: DataTypes.STRING,
      unique: true,
    },

    orderItems: {
      type: DataTypes.JSONB,
      allowNull: false,
    },

    shippingAddress: {
      type: DataTypes.JSONB,
      allowNull: false,
    },

    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    paymentStatus: {
      type: DataTypes.ENUM("pending", "paid", "failed", "refunded"),
      defaultValue: "pending",
    },

    paymentMethod: {
      type: DataTypes.STRING,
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
      ),
      defaultValue: "pending",
    },
  },
  {
    sequelize: postgres,
    modelName: "Order",
    tableName: "orders",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Order;
