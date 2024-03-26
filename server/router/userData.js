const express = require("express");
const router = express.Router();
const auth = require("../auth");
const User = require("../models/user");
const Transaction = require("../models/transaction");

// authentication endpoint
router.get("/purchase-history", auth, async (req, res) => {
  try {
    const response = await Transaction.find({ email: req.user.userEmail });

    if (!response) {
      return res.status(404).send({
        message: "No purchase history found",
      });
    } else {
      return res.status(200).send({
        message: "Purchase history found",
        response,
      });
    }
  } catch (e) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

router.get("/get-personal-data", auth, async (req, res) => {
  try {
    const response = await User.findOne({ email: req.user.userEmail });

    if (response) {
      return res.status(200).send({
        message: "Personal data found",
        response,
      });
    } else {
      return res.status(404).send({
        message: "User does not exist",
      });
    }
  } catch (e) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

module.exports = router;
