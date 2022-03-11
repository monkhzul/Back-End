const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const Order = sequelize.define('order', {
  // columns
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  deliverman_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ordered_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  order_status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total_fee: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false
});

async () => {
  await Order.sync({alter: true});
}

module.exports = Order;