const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_practice', 'root', 'ruler#DB22',
    { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;
