const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDb Connected..`);
  })
  .catch((err) => {
    console.log(`mongo db connent error`, err);
  });