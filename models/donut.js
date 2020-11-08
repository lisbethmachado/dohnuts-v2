const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donutSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Donut = mongoose.model("Donut", donutSchema);

module.exports = Donut;
