const { DataTypes } = require("sequelize");

const name = "vehicleSubCategories";
const Attributes = {
  id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  pricePerDay: DataTypes.FLOAT,
  vehicleCategoryId: DataTypes.INTEGER,
};
const createAttributes = ["name", "pricePerDay", "vehicleCategoryId"];
const updateAttributes = ["name", "pricePerDay", "vehicleCategoryId"];
const getAttributes = [
  "id",
  "name",
  "pricePerDay",
  "vehicleCategoryId",
  "updatedAt",
  "createdAt",
];

module.exports = {
  name,
  Attributes,
  createAttributes,
  updateAttributes,
  getAttributes,
};
