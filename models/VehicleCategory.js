module.exports = (sequelize, DataTypes) => {
  const VehicleCategory = sequelize.define("vehicleCategories", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      notNull: true,
    },
    timestamps: true,
    paranoid: true,
  });

  VehicleCategory.associate = (models) => {
    VehicleCategory.hasMany(models.vehicles, {
      foreignKey: "vehicleCategoryId",
    });
  };
  return VehicleCategory;
};
