module.exports = (sequelize, DataTypes) => {
  const VehicleSubCategory = sequelize.define("vehicleSubCategories", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    pricePerDay: {
      type: DataTypes.FLOAT(10),
      allowNull: false,
    },
    vehicleCategoryId: {
      type: DataTypes.INTEGER,
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

  VehicleSubCategory.associate = (models) => {
    VehicleSubCategory.hasMany(models.vehicles, {
      foreignKey: "vehicleSubCategoryId",
    });
    VehicleSubCategory.belongsTo(models.vehicleCategories, {
      foreignKey: "vehicleCategoryId",
    });
  };

  return VehicleSubCategory;
};
