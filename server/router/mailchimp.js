const express = require("express");
const router = express.Router();
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us18",
});

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  const listId = "c913008720";
  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
    });

    if (response.status === "subscribed") {
      res.status(200).json({ status: "subscribed" });
    }
  } catch (error) {
    res.status(400).json({ error: error.response.body.detail });
  }
});

module.exports = router;
