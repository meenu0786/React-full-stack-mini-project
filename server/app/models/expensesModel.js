const db = require("../db/db");
const Sequelize = require("sequelize");
const { UserModel } = require("./UserModel");
const { CatModel } = require("./CategoryModel");

//**expenses model start */

const expensesSchema = {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  cat_id: {
    type: Sequelize.INTEGER(11),
    require: true,
    allowNull: false,
    references: {
      model: CatModel,
      key: "id",
    },
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    require: true,
    allowNull: false,
    references: {
      model: UserModel,
      key: "id",
    },
  },
  date: {
    type: Sequelize.DATE,
    require: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    require: true,
    unique: true,
    allowNull: false,
  },
  value: {
    type: Sequelize.NUMBER,
    require: true,
    allowNull: false,
  },
};

exports.expensesModel = db.define("expenses", expensesSchema);

//**expenses model end */
