const mongoose = require("mongoose");

const mongo_url = process.env.MONGODB;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log(`MongoDb Connected..`);
  })
  .catch((err) => {
    console.log(`mongo db connent error`, err);
  });
