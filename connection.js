const config = require('./config/config.json')
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect //* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const checkConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = { sequelize, checkConnection };