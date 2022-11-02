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
    timestamps: true,
    paranoid: false,
  });

  Role.associate = (models) => {
    Role.hasMany(models.users, {
      foreignKey: "roleId",
    });
  };

  return Role;
};
