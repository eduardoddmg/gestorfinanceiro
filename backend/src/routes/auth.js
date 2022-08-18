const userSchema = require("../models/user");

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

async function authUser(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ message: "Missing data in body request" });
    }

    const bdUser = await userSchema.findOne({ username: username });

    if (!bdUser)
        return res.status(401).json({ message: "Invalid credentials" });

    const check = await bcrypt.compare(password, bdUser.password);

    if (!check) return res.status(401).json({ message: "Invalid credentials" });

    req.userId = bdUser._id;
    console.log(bdUser._id);
    next();
}

function sendJWT(req, res) {
    const token = jwt.sign({ id: req.userId }, process.env.SECRET, {
        expiresIn: 300,
    });

    res.status(200).json({ isLogged: true, token: token });
}

async function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err)
            return res.status(500).json({ message: "Failed to authenticate" });

        req.userId = decoded.id;
        next();
    });
}

router.post("/createUser", async (req, res) => {
    try {
        const userData = req.body;

        if (!userData.username || !userData.password || !userData.email) {
            res.status(400).json({ type: 'error', message: "Missing data in body request" });
        }

        if (await userSchema.exists({ username: userData.username })) {
            res.status(200).json({ type: 'error', message: "Username already in use" });
        }

        if (await userSchema.exists({ email: userData.email })) {
            res.status(200).json({ type: 'error', message: "Email already in use" });
        }
        userData.password = await bcrypt.hash(userData.password, saltRounds);
        const newUser = new userSchema(userData);
        const user = await newUser.save();
        res.status(201).json({ type: 'success', message: "User successfully created" });
    } catch (error) {
        res.status(500).json({type: 'error',message: error})
    }
});

router.get("/loginUser", authUser, sendJWT);

module.exports = router;
