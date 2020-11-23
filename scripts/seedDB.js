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
    title: "Red Velvet Cream Cheese Donut",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Raspberry Jelly Pecans Swirl",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Coconut Cream Berry Donut",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Cinnamon Roll Glazed Donut",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Peanut Butter Cup Donut",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Caramel Apple Crisp Donut",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Sugar Glazed Donut Twist",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Dozen Sugar Donut Holes",
    ate: false,
    date: new Date(Date.now())
  },
  {
    title: "Plain Doughy Donut",
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