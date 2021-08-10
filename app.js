const express = require("express");
const transactionsController = require("./controllers/transactions")
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController)

// ROOT route
app.get("/", (req, res) => {
  res.send("Basic Express App. ROOT");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!")
});
module.exports = app;
