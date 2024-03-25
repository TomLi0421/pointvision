const express = require("express");
const router = express.Router();
const auth = require("../auth");
const User = require("../models/user");

// authentication endpoint
router.get("/purchaseHistory", auth, async (req, res) => {
  User.findOne({ email: req.user.userEmail }).then((result) => {
    console.log(result);
  });

  res.json({ message: "You are authorized to access me" });
});

module.exports = router;
