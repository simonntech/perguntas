const Sequelize = require('sequelize');
const password = process.env.PASSWORD;

const connection = new Sequelize('perguntas', 'root', password, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;