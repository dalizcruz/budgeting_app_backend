const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  const transaction = transactionsArray[id];
  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("/404");
  }
});

transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  const newtransaction = transactionsArray.length - 1;
  res.json(transactionsArray[newtransaction]);
});

transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    const { body } = req;
    transactionsArray[id] = body;
    res.json(transactionsArray[id]);
  } else {
    res.redirect("/404");
  }
});

transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    const deletedTransaction = transactionsArray.splice(id, 1);
    res.json(deletedTransaction[0]);
  } else {
    res.redirect("/404");
  }
});

module.exports = transactions;
