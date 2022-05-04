const { Sequelize } = require('sequelize');

const dbName = process.env.DB_DATABASE;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbConnection = process.env.DB_CONNECTION;
const dbHost = process.env.DB_HOST;
// const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
    dialect : dbConnection,
    host : dbHost
});

module.exports = sequelize;


