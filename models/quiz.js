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
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { paranoid: true }
  );
  Quiz.associate = function (models) {
    models.Quiz.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: 'id',
    });
  };
  return Quiz;
}
