module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define(
    'Quiz',
    {
      quizId: {
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
      accessToken: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'email',
      },
    },
    { paranoid: true }
  );
  return PlaidItems;
};
