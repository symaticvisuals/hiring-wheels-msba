module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("locations", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    locationName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.CHAR(6),
      allowNull: false,
    },

    timestamps: true,
    paranoid: true,
  });


  Location.associate = (models) => {
    Location.hasMany(models.bookings, {
      foreignKey: "locationId",
    });
    Location.belongTo(models.cities, {
      foreignKey: "cityId",
    });
  };

  return Location;
};
