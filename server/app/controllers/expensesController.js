const { expensesModel } = require("../models/expensesModel");

exports.add = (req, res) => {
  const { title, date, value, user_id, cat_id } = req.body;

  expensesModel
    .create({
      user_id,
      title,
      value,
      cat_id,
      date: new Date(date),
    })
    .then((exp) =>
      res.send({
        status: 1,
        message: "success",
        data: exp,
      })
    )
    .catch((err) => res.status(400).send(err));
};

exports.edit = (req, res) => {
  const { title, date, value, user_id, cat_id } = req.body;
  expensesModel
    .update(
      {
        title,
        value,
        cat_id,
        date: date && new Date(date),
      },
      { where: { id: req.params.id, user_id } }
    )
    .then((exp) =>
      res.send({
        status: exp[0],
        message: exp[0] ? "success" : "record not updated",
      })
    )
    .catch((err) => res.status(400).send(err));
};

exports.delete = async (req, res) => {
  const { user_id } = req.body;
  await expensesModel
    .destroy({
      where: {
        id: parseInt(req.params.id),
        user_id,
      },
    })
    .then((exp) => {
      res.send({
        status: exp,
        message: exp ? "success" : "record not deleted",
      });
    })
    .catch((err) => {
      res.sendStatus(400);
    });
};
