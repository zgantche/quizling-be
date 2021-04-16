'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quiz_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Quizzes'
          },
          key: 'id'
        },
      },
      question_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      },
      question_text: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      answers: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        unique: false
      },
      details: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      img_url: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};