import express  from "express";
import RouterMain from "./router";
import configServer from "../config"

const cors = require('cors');   
const home = require('./router/home')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', home);

app.get('/', (req, res) => {
    res.send('oi');
});

configServer(app);
