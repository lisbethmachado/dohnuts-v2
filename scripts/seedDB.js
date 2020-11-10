const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGO_Atlas ||
  "mongodb://localhost/dohnuts"
);

const donutSeed = [
  {
    title: "Chocolate Fudge Sprinkles",
    date: new Date(Date.now())
  },
  {
    title: "Red Velvet Cream Cheese Donut",
    date: new Date(Date.now())
  },
  {
    title: "Raspberry Jelly Pecans Swirl",
    date: new Date(Date.now())
  },
  {
    title: "Coconut Cream Berry Donut",
    date: new Date(Date.now())
  },
  {
    title: "Cinnamon Roll Glazed Donut",
    date: new Date(Date.now())
  },
  {
    title: "Peanut Butter Cup Donut",
    date: new Date(Date.now())
  },
  {
    title: "Caramel Apple Crisp Donut",
    date: new Date(Date.now())
  },
  {
    title: "Sugar Glazed Donut Twist",
    date: new Date(Date.now())
  },
  {
    title: "Dozen Sugar Donut Holes",
    date: new Date(Date.now())
  },
  {
    title: "Plain Doughy Donut",
    date: new Date(Date.now())
  }
];

db.Donut
  .remove({})
  .then(() => db.Donut.collection.insertMany(donutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// This file empties the Donuts collection and inserts the donuts above