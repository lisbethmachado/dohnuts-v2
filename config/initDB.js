const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/donuts";

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://lisbethmachado:donuts@cluster0.alvtr.mongodb.net/donuts?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("donuts").collection("donuts");
//   // perform actions on the collection object
//   client.close();
// });

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = () => {
  return mongoose
    .connect(mongoUri, dbOptions)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.error(err));
};