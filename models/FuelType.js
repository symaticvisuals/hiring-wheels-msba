module.exports = (sequelize, DataTypes) => {
  const FuelType = sequelize.define("fuelTypes", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    timestamps: true,
    paranoid: true,
  });

  FuelType.associate = (models) => {
    FuelType.hasMany(models.vehicles, {
      foreignKey: "fuelTypeId",
    });
  };
  return FuelType;
};
