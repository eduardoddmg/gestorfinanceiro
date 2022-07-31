"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var home = require('./home');
function RouterMain() {
    return app.use('/', home);
}
exports["default"] = RouterMain;
;
