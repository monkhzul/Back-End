// const { Sequelize, DataTypes } = require('@sequelize/core');
// const sequelize = require('../database.js');

const User =(sequelize, Sequelize) => { sequelize.define('user', {
  // columns
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false
});
}
// async () => {
//   await User.sync({alter: true});
// }

module.exports = User;