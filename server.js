require("dotenv").config();
const express = require("express");
const app = express();
const initDB = require("./config/initDB");
const morgan = require("morgan")
const logger = require("morgan");
const PORT = process.env.PORT || 3002;
// const path = require("path");
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

app.use(routes, logger);

initDB();

app.listen(PORT, function() {
  console.log(`💫   ==> Donuts API Server now listening on PORT ${PORT}!`);
});