const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3002;
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lisbethmachado:donuts@cluster0.alvtr.mongodb.net/donuts?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(process.env.MONGO_Atlas || "mongodb://localhost/donuts",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}
);

app.listen(PORT, function() {
  console.log(`💫   ==> Donuts API Server now listening on PORT ${PORT}!`);
});