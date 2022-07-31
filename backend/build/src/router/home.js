"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_1 = __importDefault(require("../middlewares/routing"));
const express = require('express');
const router = express.Router();
router.use(routing_1.default);
router.get('/', (req, res, next) => {
    res.send(req.user);
    console.log('funcionou');
});
module.exports = router;
