// Database connection
// const { Sequelize } = require('sequelize');
// const { Sequelize, DataTypes } = require('@sequelize/core');

// const username = process.env.DATABASE_NAME;
// const password = process.env.DATABASE_PASSWORD;
// const sequelize = new Sequelize('food_delivery', username, password, {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false
// });
// sequelize.authenticate()
//  .then(() => {
//    console.log('Connection has been established successfully.');
//      })
//  .catch(err => {
//    console.error('Unable to connect to the database:', err);
//  });

const { Sequelize, DataTypes } = require('sequelize');

const username = "COKE\\Munkhzul.E";
const password = "Zulaa#0119";
const sql = require('mssql');
const connection = require('tedious').Connection;

const sequelize = new Sequelize('food_delivery', username, password, {
  host: 'localhost',
  port: 1433,
  dialect: 'mssql',
  pool: {
    max: 10,
    min: 0,
    idleTimeOutMillis: 30000
  }
});

const db = {};

db.sequelize = Sequelize;
db.Sequelize = sequelize;

db.Food = require("./Food")(sequelize, Sequelize);

module.exports = db;