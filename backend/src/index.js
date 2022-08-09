const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const authRoute = require('./routes/auth');
const transactionRoute = require('./routes/transaction');

// settings
const app = express();
const port = process.env.PORT || 3001;

// middlewaresa
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/transaction", transactionRoute);

// mongodb connection
mongoose.connect(process.env.MONGODB_URI);

// server listening
app.listen(port, () => console.log("Server listening to", port));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

