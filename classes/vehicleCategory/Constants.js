const { DataTypes } = require("sequelize");

const name = "vehicleCategories";
const Attributes = {
  id: DataTypes.INTEGER,
  name: DataTypes.STRING,
};
const createAttributes = ["name"];
const updateAttributes = ["name"];
const getAttributes = ["id", "name"];

module.exports = {
  name,
  Attributes,
  createAttributes,
  updateAttributes,
  getAttributes,
};
