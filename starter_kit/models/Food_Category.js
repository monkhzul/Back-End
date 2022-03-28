const Food_Category = (sequelize, Sequelize) => {sequelize.define('food_category', {
  // columns
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  }
  }, {
  // Other model options go here
  timestamps: false,
  freezeTableName: true
});

// async () => {
//   await Food_Category.sync({alter: true});
// }
}
module.exports = Food_Category;