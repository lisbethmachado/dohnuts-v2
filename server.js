const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://lisbethmachado:2k19Pepp$@cluster1.0lage.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("donuts").collection("donuts");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(process.env.MONGO_Atlas || "mongodb://localhost/donuts",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});