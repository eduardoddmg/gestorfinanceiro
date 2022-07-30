import middlewareRouter from "../middlewares/routing";
import { Request, Response } from "express-serve-static-core";
import { ExpressInterface, RequestInterface } from "../types";
import { NextFunction } from "express";

const express = require('express');
const router = express.Router();

router.use(middlewareRouter);

router.get('/', (req: RequestInterface, res: Response, next: NextFunction) => {
    res.send(req.user);
    console.log('funcionou');
});

module.exports = router;