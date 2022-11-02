module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("roles", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
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

  Role.associate = (models) => {
    Role.hasMany(models.users, {
      foreignKey: "roleId",
    });
  };

  return Role;
};
