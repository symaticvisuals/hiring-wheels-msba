const { DataTypes } = require("sequelize");


const name = "roles"
const Attributes = {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
}

const getAttributes = ["id","name"]
const createAttributes = ["name"]
const updateAttributes = ["name"]
const deleteAttributes = ["id"]


module.exports = {
    name,
    Attributes,
    getAttributes,
    createAttributes,
    updateAttributes,
    deleteAttributes
}