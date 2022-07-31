import express  from "express";
import RouterMain from "./router";
import configServer from "../config"

const cors = require('cors');   


const app = express();
app.use(express.json());
app.use(cors());

RouterMain(app);
configServer(app);
