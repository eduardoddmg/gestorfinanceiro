import express  from "express";
import RouterMain from "./router";
import { configDatabase, configServer } from "../config/index"

const cors = require('cors');   

const app = express();
app.use(express.json());
app.use(cors());

RouterMain(app);
configDatabase();
configServer(app);
