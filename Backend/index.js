const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const perfumeRouter = require('./Routes/perfumeRouter.js')
require("dotenv").config();
require("./Models/db.js");

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/perfume', perfumeRouter )

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
