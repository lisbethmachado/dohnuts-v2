const db = require("../models");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lisbethmachado:2k19Pepp$@cluster1.0lage.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("donuts").collection("donuts");
  // perform actions on the collection object
  client.close();
});

module.exports = {
  findAll: function(req, res) {
    db.Donut
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel) + console.log("Results: " + dbModel))
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
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log("Selected" + res))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Donut
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
