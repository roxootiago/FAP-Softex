const Sequelize = require('sequelize')

const sequelize = new Sequelize('crud', 'root', 'roxo1234', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
}); 

module.exports = sequelize