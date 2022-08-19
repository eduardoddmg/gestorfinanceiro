const userSchema = require("../models/user");

const express = require("express");
const router = express.Router();

const { authUser, sendJWT, verifyJWT } = require("../utils/jwtfunc");

// get all users
router.get("/users", verifyJWT, async (req, res) => {
    const id = req.userId;
    if (!id) res.status(400).json({ message: "ID was not provided" });
    userSchema.findById(id, "username email", (err, user) => {
        if (err) res.status(500).json({ message: "Unknown error" });
        console.log(user);
        if (!user)
            res.status(400).json({ message: "This ID is not in the database" });
        res.status(200).json(user);
    });
});

module.exports = router;
