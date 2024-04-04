const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/", async (req, res) => {
  console.log("register router");
  try {
    const { newUser } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email: newUser.email }, { phone: newUser.phone }],
    });

    if (existingUser) {
      return res
        .status(400)
        .send({ message: "This email or phone number is registered" });
    }

    // bcrypt password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);
    newUser.password = hashedPassword;

    // mongoose query
    const result = await User.create(newUser);
    res.send({ message: "User Created Successfully", result });
  } catch (e) {
    res.status(500).send({ message: "Unable to create a user account", e });
  }
});

module.exports = router;
