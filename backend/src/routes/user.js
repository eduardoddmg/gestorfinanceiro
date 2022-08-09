const userSchema = require('../models/user');

const express = require("express");
const router = express.Router();

// get all users
router.get("/users", async(req, res) => {
  try {
    const resp = await userSchema.find();
    const data = await resp;
    res.json(data);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
