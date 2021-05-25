const db = require("../db/db");
const Sequelize = require("sequelize");
const { UserModel } = require("./UserModel");

//**categories model start */

const catSchema = {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    require: true,
    references: {
      model: UserModel,
      key: "id",
    },
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
