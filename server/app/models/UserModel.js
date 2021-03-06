const db = require("../db/db");
const Sequelize = require("sequelize");

//**User model start */

const userSchema = {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    require: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    require: true,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    require: true,
    allowNull: false,
  },
};

exports.UserModel = db.define("users", userSchema);

//**User model end */
