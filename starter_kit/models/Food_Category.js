const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const Food_Category = sequelize.define('food_category', {
  // columns
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false,
  freezeTableName: true
});

async () => {
  await Food_Category.sync({alter: true});
}

module.exports = Food_Category;