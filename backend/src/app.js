"use strict";
exports.__esModule = true;
var router_1 = require("./router");
var config_1 = require("../config");
var express = require('express');
var app = express();
var cors = require('cors');
app.use((0, router_1["default"])());
app.use(express.json());
app.use(cors());
(0, config_1["default"])(app);