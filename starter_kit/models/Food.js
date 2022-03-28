// const { Sequelize, DataTypes } = require('@sequelize/core');
// const sequelize = require('../database.js');
// const Category = require('../models/Food_Category');

const Food = (sequelize, Sequelize) => { sequelize.define('food', {
  // columns
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  portion: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  discount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  foodCategoryId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false
});
}
// Category.hasMany(Food);
// Food.belongsTo(Category);

// async () => {
//   await Food.sync({alter: true});
// }

module.exports = Food;