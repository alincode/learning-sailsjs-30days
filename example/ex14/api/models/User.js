//  User.js
module.exports = {
  attributes: {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  associate: function() {},
  options: {
    tableName: 'users',
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
