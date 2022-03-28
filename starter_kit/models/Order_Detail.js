// const { Sequelize, DataTypes } = require('@sequelize/core');
// const sequelize = require('../database.js');

const Order_Detail = (sequelize, Sequelize)=> {sequelize.define('order_detail', {
  // columns
  food_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  food_price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false
});
}
// async () => {
//   await Order_Detail.sync({alter: true});
// }

module.exports = Order_Detail;