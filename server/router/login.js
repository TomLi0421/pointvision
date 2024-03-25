const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/", async (req, res) => {
  const { user } = req.body;

  try {
    const userEmail = await User.findOne({
      email: user.email,
    });

    if (!userEmail) {
      return res.status(401).send({
        message: "Incorrect email or password",
      });
    }

    const isPasswordMatch = bcrypt.compareSync(
      user.password,
      userEmail.password
    );

    if (!isPasswordMatch) {
      return res.status(401).send({
        message: "Incorrect email or password",
      });
    }

    const token = jwt.sign(
      { userId: userEmail._id, userEmail: userEmail.email },
      "RANDOM-TOKEN",
      { expiresIn: "24h" }
    );

    res.status(200).send({
      message: "Login Successful",
      email: user.email,
      token,
    });
  } catch (e) {
    res.status(401).send({
      message: "An error occurred during login",
      e,
    });
  }
});

module.exports = router;
