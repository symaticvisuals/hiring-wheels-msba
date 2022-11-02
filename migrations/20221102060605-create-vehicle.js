"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("vehicles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
        unique: true,
        notNull: true,
      },
      number: {
        type: Sequelize.STRING,

        notNull: true,
      },
      vehicleSubCategoryId: {
        type: Sequelize.INTEGER,
        notNull: true,
      },
      color: {
        type: Sequelize.STRING,
        notNull: true,
      },

      locationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fuelTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      availabilityStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("vehicles");
  },
};
