require("dotenv").config();
const bcrypt = require("bcrypt");

const { UserModel } = require("../models/UserModel");

exports.sign_up = async (req, res) => {
  const { password, email, name } = req.body;

  await bcrypt

    .hash(password, parseInt(process.env.SALTROUNDS))
    .then((hash) => {
      UserModel.create({
        name,
        email,
        password: hash,
      })
        .then((data) => {
          res.send({
            status: 1,
            message: "success",
            data: {
              userId: user.id,
              userName: user.name,
            },
          });
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.login = async (req, res) => {
  const { password, email } = req.body;

  UserModel.findOne({ where: { email } })
    .then(async (user) => {
      if (!user) {
        res.send({ status: 0, message: "You have enter wrong credentials." });
      } else {
        await bcrypt
          .compare(password.trim(), user.password)
          .then(async (result) => {
            if (result) {
              res.send({
                status: 1,
                message: "success",
                data: {
                  userId: user.id,
                  userName: user.name,
                },
              });
            } else {
              res.send({
                status: 0,
                message: "You have enter wrong credentials.",
              });
            }
          });
      }
    })
    .catch((err) => res.status(400).send(err));
};
