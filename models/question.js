module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define(
      'Question',
      {
        question_id: {
          field: 'id',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        question_number: {
          field: 'question_number',
          type: DataTypes.INTEGER,
          validate: { notEmpty: true },
          unique: false,
        },
        description: {
          field: 'question_text',
          type: DataTypes.STRING,
          validate: { notEmpty: true },
          unique: false,
        },
        answers: {
            field: 'answers',
            type: DataTypes.ARRAY(DataTypes.STRING),
            validate: { notEmpty: true },
            unique: false,
        },
        details: {
          field: 'details',
          type: DataTypes.STRING,
          validate: { notEmpty: false },
          unique: false,
        },
        img_url: {
            field: 'img_url',
            type: DataTypes.STRING,
            validate: { notEmpty: false },
            unique: false,
        }
      },
      {
        paranoid: true
      }
    );
    PlaidItems.associate = function (models) {
      models.PlaidItems.belongsTo(models.Quiz, {
        onDelete: 'CASCADE',
        foreignKey: 'quizId',
      });
    };
    return Question;
} 