const express = require('express');
const app = express();
const home = require('./home');

export default function RouterMain() {
    return app.use('/', home);
};