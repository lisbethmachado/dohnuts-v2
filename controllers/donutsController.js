const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Donut
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Donut
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Donut
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Donut
    findByIdAndUpdate(params.id,
      { $push: { ate: true } },)
      .then(dbModel => {
        res.json(dbModel);
        console.log("Donut " + dbModel)
      })
      .catch(err => {
        res.json(err);
      })
  },
  remove: function(req, res) {
    db.Donut
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};