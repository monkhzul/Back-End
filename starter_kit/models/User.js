const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const User = sequelize.define('user', {
  // columns
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
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

async () => {
  await User.sync({alter: true});
}

module.exports = User;