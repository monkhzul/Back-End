// Database connection
// const { Sequelize } = require('sequelize');
const { Sequelize, DataTypes } = require('@sequelize/core');

const username = process.env.DATABASE_NAME;
const password = process.env.DATABASE_PASSWORD;
const sequelize = new Sequelize('food_delivery', username, password, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
sequelize.authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
     })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });

module.exports = sequelize;