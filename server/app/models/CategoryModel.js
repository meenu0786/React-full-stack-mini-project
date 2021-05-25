const db = require("../db/db");
const Sequelize = require("sequelize");

//**categories model start */

const catSchema = {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    require: true,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    require: true,
    allowNull: false,
  },
};

exports.CatModel = db.define("categories", catSchema);

//**categories model end */
