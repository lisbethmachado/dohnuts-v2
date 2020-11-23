require("dotenv").config();
const express = require("express");
const app = express();
const initDB = require("./config/initDb");
const PORT = process.env.PORT || 3002;
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

initDB();

app.listen(PORT, function() {
  console.log(`💫   ==> Donuts API Server now listening on PORT ${PORT}!`);
});