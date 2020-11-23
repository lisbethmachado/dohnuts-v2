const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGO_Atlas ||
  "mongodb://localhost/donuts"
);

const donut = [
  {
    title: "Chocolate Fudge Sprinkles",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Raspberry Jelly Filled Swirl",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Caramel Chocolate Filled Churro",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Glazed Sugar Donut Twist",
    ate: false,
    date: new Date(Date.now())
  }
];

db.Donut
  .remove({})
  .then(() => db.Donut.collection.insertMany(donut))
  .then(data => {
    console.log(data.result.n + " donuts baked!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });