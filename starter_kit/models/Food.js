const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');
const Category = require('../models/Food_Category');

const Food = sequelize.define('food', {
  // columns
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  portion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  foodCategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false
});

Category.hasMany(Food);
Food.belongsTo(Category);

async () => {
  await Food.sync({alter: true});
}

module.exports = Food;