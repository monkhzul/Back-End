// const { Sequelize, DataTypes } = require('@sequelize/core');
// const sequelize = require('../database.js');

const Order = (sequelize,Sequelize) =>{ sequelize.define('order', {
  // columns
  customer_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  deliverman_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  ordered_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  order_status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  total_fee: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false
});
}
// async () => {
//   await Order.sync({alter: true});
// }

module.exports = Order;