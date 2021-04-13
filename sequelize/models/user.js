module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        field: 'username',
        type: DataTypes.STRING,
        validate: { notEmpty: true },
        unique: true,
      },
      email: {
        field: 'email',
        type: DataTypes.STRING,
        validate: { isEmail: true, notEmpty: true },
        unique: true,
      },
    },
    {
      paranoid: true
    }
  );
  
  return User;
}
