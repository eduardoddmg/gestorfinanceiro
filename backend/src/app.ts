import RouterMain from "./router";
import { PortType } from "./types";
const express = require('express');
const app = express();

const port: PortType = 3001;

app.use(RouterMain());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});