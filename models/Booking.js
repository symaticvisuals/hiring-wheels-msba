module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("bookings", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    pickupDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dropOffDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bookingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
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
  });
  Booking.associate = (models) => {
    Booking.belongsTo(models.locations, {
      foreignKey: "locationId",
    });
    Booking.belongsTo(models.users, {
      foreignKey: "userId",
    });
    Booking.belongsTo(models.vehicles, {
      foreignKey: "vehicleId",
    });
  };
  return Booking;
};
