module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("cities", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    timestamps: true,
    paranoid: true,
  });

  City.associate = (models) => {
    City.hasMany(models.locations, {
      foreignKey: "cityId",
    });
  };
  return City;
};
