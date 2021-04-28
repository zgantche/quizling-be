const { sequelize, User } = require('../../sequelize');

const getHealth = () => {
  try {
    sequelize.authenticate();

    return 'Health check successful!';
  } catch (error) {
    throw Error(
      `${new Date()}: Error while accessing database - getHealth -  Health Service.`
      );
  }
}

module.exports = {
  getHealth
};