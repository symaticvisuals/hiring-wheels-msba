const { DataTypes } = require("sequelize");

const name = "fuelTypes";
const Attributes = {
  id: DataTypes.INTEGER,
  type: DataTypes.STRING,
};

const getAttributes = ["id", "type"];
const createAttributes = ["type"];
const updateAttributes = ["type"];
const deleteAttributes = ["id"];

module.exports = {
  name,
  Attributes,
  getAttributes,
  createAttributes,
  updateAttributes,
  deleteAttributes,
};
