const userSchema = require("../models/user");

const express = require("express");
const router = express.Router();

const { authUser, sendJWT, verifyJWT } = require("../utils/jwtfunc");

// get all users
router.get("/users", verifyJWT, async (req, res) => {
    const id = req.userId;
    const user = await userSchema.findById(id);
    console.log(user);
    if (!user)
        res.status(400).json({ message: "This ID is not in the database" });
    delete user.password;
    res.status(200).json(user);
});

module.exports = router;
