module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: true,

      validate: {
        len: [5, 50],
      },
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    mobileNo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wallet_money: {
      type: DataTypes.FLOAT(10),
      defaultValue: 10000.0,
    },

    timestamps: true,
    paranoid: true,
  });

  User.associate = (models) => {
    User.hasMany(models.bookings, {
      foreignKey: "userId",
    });
    User.belongsTo(models.roles, {
      foreignKey: "roleId",
    });
  };

  return User;
};
