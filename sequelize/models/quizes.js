module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define(
      'Quizes',
      {
        title: {
          field: 'title',
          type: DataTypes.STRING,
          validate: { notEmpty: true },
          unique: false,
        },
        description: {
          field: 'description',
          type: DataTypes.STRING,
          validate: { notEmpty: false },
          unique: false,
        },
      },
      {
        paranoid: true
      }
    );
    return Quiz;
} 