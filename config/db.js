const Sequelize = require("sequelize");

module.exports = new Sequelize("schema", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: true,

  pool: {
    max: 200,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
