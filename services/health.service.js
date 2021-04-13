const { sequelize, User } = require('../sequelize');

const getHealth = () => {
    try {
        sequelize.authenticate();

        return 'Health check successful!';
    } catch (error) {
        console.log('db error while performing health check!')
        console.log(error)
        //TODO: error handing
    }
}

module.exports = {
    getHealth
};