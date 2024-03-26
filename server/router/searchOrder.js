const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");

router.get("/", async (req, res) => {
  const { orderId } = req.query;

  Transaction.findOne({ id: orderId }).then((result) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  });
});

module.exports = router;
