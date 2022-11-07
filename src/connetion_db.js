const sequelize = require('sequelize');
const config = require('./config')

const conn = new sequelize.Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS,{
    host: config.DB_HOST,
    dialect: 'mariadb'
});


module.exports = conn