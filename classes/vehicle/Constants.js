const { DataTypes } = require("sequelize");
const name = "vehicles";

const Attributes = {
  id: DataTypes.INTEGER,
  model: DataTypes.STRING,
  number: DataTypes.STRING,
  vehicleSubCategoryId: DataTypes.INTEGER,
  color: DataTypes.STRING,
  locationId: DataTypes.INTEGER,
  fuelTypeId: DataTypes.INTEGER,
  availabilityStatus: DataTypes.BOOLEAN,
  imageUrl: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
};

const createAttributes = [
  "model",
  "number",
  "vehicleSubCategoryId",
  "color",
  "locationId",
  "fuelTypeId",
  "availabilityStatus",
  "imageUrl",
];
const updateAttributes = [
  "model",
  "number",
  "vehicleSubCategoryId",
  "color",
  "locationId",
  "fuelTypeId",
  "availabilityStatus",
  "imageUrl",
];
const getAttributes = [
  "model",
  "number",
  "vehicleSubCategoryId",
  "color",
  "locationId",
  "fuelTypeId",
  "availabilityStatus",
  "imageUrl",
  "createdAt",
  "updatedAt",
  "deletedAt",
];

module.exports = {
  name,
  Attributes,
  createAttributes,
  updateAttributes,
  getAttributes,
};
