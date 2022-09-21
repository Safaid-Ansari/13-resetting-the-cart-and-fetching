const Sequelize = require("sequelize");

const sequelize = new Sequelize("complete-node", "root", "9012870272", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
