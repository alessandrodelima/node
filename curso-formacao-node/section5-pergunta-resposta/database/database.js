const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root','Fiel2020', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;