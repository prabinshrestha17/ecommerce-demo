const { Model, DataTypes } = require("sequelize");
const postgres = require("../config/database");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: postgres,
    modelName: "Category",
    tableName: "categories",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Category;
