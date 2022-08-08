const userSchema = require('../models/user');

const express = require("express");
const router = express.Router();

// http://localhost:9000/api/loginUser?username=dudu mello&password=05084100
// router.get("/loginUser", (req, res) => {
//   res.send(req.query);
//   loginUser(userSchema,req.query);
// });

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
