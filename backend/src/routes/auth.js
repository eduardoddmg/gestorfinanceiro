const userSchema = require("../models/user");

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { authUser, sendJWT, verifyJWT } = require("../utils/jwtfunc");

const saltRounds = 10;

router.post("/createUser", async (req, res) => {
    try {
        const userData = req.body;

        if (!userData.username || !userData.password || !userData.email) {
            res.status(400).json({
                type: "error",
                message: "Missing data in body request",
            });
        }

        if (await userSchema.exists({ username: userData.username })) {
            res.status(200).json({
                type: "error",
                message: "Username already in use",
            });
        }

        if (await userSchema.exists({ email: userData.email })) {
            res.status(200).json({
                type: "error",
                message: "Email already in use",
            });
        }
        userData.password = await bcrypt.hash(userData.password, saltRounds);
        const newUser = new userSchema(userData);
        const user = await newUser.save();
        res.status(201).json({
            type: "success",
            message: "User successfully created",
        });
    } catch (error) {
        res.status(500).json({ type: "error", message: "Unkown error" });
    }
});

router.post("/loginUser", authUser, sendJWT);

module.exports = router;
