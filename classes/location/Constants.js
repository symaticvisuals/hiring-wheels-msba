const { DataTypes } = require("sequelize");

const name = "locations";
const Attributes = {
  id: DataTypes.INTEGER,
  locationName: DataTypes.STRING,
  address: DataTypes.STRING,
  cityId: DataTypes.INTEGER,
  pincode: DataTypes.CHAR,
};

const createAttributes = ["locationName", "address", "cityId", "pincode"];
const updateAttributes = ["locationName", "address", "cityId", "pincode"];
module.exports = {
  name,
  Attributes,
  createAttributes,
};
