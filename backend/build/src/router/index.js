"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const home = require('./home');
function RouterMain() {
    return app.use('/', home);
}
exports.default = RouterMain;
;
