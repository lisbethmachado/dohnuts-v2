const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donuts = new Schema({
  title: { type: String, required: true },
  ate: { type: Boolean, default: false},
  date: { type: Date, default: Date.now }
});

const Donut = mongoose.model("Donut", donuts);

module.exports = Donut;
