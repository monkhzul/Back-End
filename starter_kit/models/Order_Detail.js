const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const Order_Detail = sequelize.define('order_detail', {
  // columns
  food_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  food_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false
});

async () => {
  await Order_Detail.sync({alter: true});
}

module.exports = Order_Detail;