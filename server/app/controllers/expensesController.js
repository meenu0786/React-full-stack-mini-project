const Sequelize = require("sequelize");
const { CatModel } = require("../models/CategoryModel");
const { expensesModel } = require("../models/expensesModel");

const Op = Sequelize.Op;

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

exports.list = (req, res) => {
  const { user_id } = req.body;

  CatModel.hasOne(expensesModel, { foreignKey: "id" });
  expensesModel.belongsTo(CatModel, { foreignKey: "cat_id" });

  expensesModel
    .findAll({
      where: { user_id },
      include: [CatModel],
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

const getSumAndCount = async (exp) => {
  return [
    ...exp
      .reduce((r, o) => {
        // add a new item to the map, and set price and count to 0
        r.has(o.cat_id) ||
          r.set(
            o.cat_id,
            Object.assign({}, o.dataValues, { value: 0, count: 0 })
          );

        // get current item;
        const item = r.get(o.cat_id);

        // add current price to item
        item.value += parseInt(o.value);

        // increment quantity
        item.count++;

        return r;
      }, new Map())
      .values(),
  ];
};

exports.report = (req, res) => {
  console.log("....................");
  const { user_id } = req.body;
  const date = new Date();
  date.setDate(date.getDate() - 30);
  const date_befor_30 = date;

  CatModel.hasOne(expensesModel, { foreignKey: "id" });
  expensesModel.belongsTo(CatModel, { foreignKey: "cat_id" });

  expensesModel
    .findAll({
      where: {
        date: { [Op.gt]: date_befor_30, [Op.lt]: new Date() },
        user_id,
      },

      include: {
        model: CatModel,
      },
    })
    .then(async (exp) => {
      const result = await getSumAndCount(exp);

      await Promise.all(result).then((values) => {
        res.send({
          status: 1,
          message: "success",
          data: values,
        });
      });
    })
    .catch((err) => res.status(400).send(err));
};
