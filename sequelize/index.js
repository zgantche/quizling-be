const { Sequelize, DataTypes } = require('sequelize');
const db = {};

const sequelize = new Sequelize({
    database: 'node-capsule_local',
    username: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 5432,
	dialect: 'postgres',
});

// const User = require('./models/user')(sequelize, DataTypes);
// sequelize['User'] = User;

const modelDefiners = [
	// Add models here...
    require('./models/user'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize, DataTypes);
}

module.exports = {
    sequelize
}