const { CatModel } = require("../models/CategoryModel");

exports.addCat = (req, res) => {
  const { title, description, user_id } = req.body;

  CatModel.create({
    user_id,
    title,
    description,
  })
    .then((cat) =>
      res.send({
        status: 1,
        message: "success",
        data: cat,
      })
    )
    .catch((err) => res.status(400).send(err));
};

exports.editCat = (req, res) => {
  const { title, description, user_id } = req.body;
  const cat_id = req.params.id;
  CatModel.update(
    {
      title,
      description,
    },
    { where: { id: cat_id, user_id } }
  )
    .then((cat) =>
      res.send({
        status: cat[0],
        message: cat[0] ? "success" : "record not updated",
      })
    )
    .catch((err) => res.status(400).send(err));
};

exports.deleteCat = async (req, res) => {
  const { user_id } = req.body;
  await CatModel.destroy({
    where: {
      id: parseInt(req.params.id),
      user_id,
    },
  })
    .then((cat) => {
      res.send({
        status: cat,
        message: cat ? "success" : "record not deleted",
      });
    })
    .catch((err) => {
      res.sendStatus(400);
    });
};
