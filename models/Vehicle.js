module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("vehicles", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    model: {
      type: DataTypes.STRING,
      unique: true,
      notNull: true,
    },
    number: {
      type: DataTypes.STRING,

      notNull: true,
    },
    vehicleSubCategoryId: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    color: {
      type: DataTypes.STRING,
      notNull: true,
    },

    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuelTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availabilityStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Vehicle.associate = (models) => {
    Vehicle.hasMany(models.bookings, {
      foreignKey: "vehicleId",
    });
    Vehicle.belongsTo(models.locations, {
      foreignKey: "locationId",
    });
    Vehicle.belongsTo(models.fuelTypes, {
      foreignKey: "fuelTypeId",
    });
    Vehicle.belongsTo(models.vehicleSubCategories, {
      foreignKey: "vehicleSubCategoryId",
    });
    
  };

  return Vehicle;
};
