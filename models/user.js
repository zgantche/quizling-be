module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id',
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        field: 'username',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'email',
      },
    },
    { paranoid: true }
  );
  return User;
};
