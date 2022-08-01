import middlewareRouter from "../middlewares/routing";
import { Request, Response } from "express-serve-static-core";
import { ExpressInterface, RequestInterface } from "../types";
import { NextFunction } from "express";
import { addUser } from "../controllers";
import { UserModel } from "../models";

const express = require("express");
const router = express.Router();

router.use(middlewareRouter);

router.get("/", (req: RequestInterface, res: Response, next: NextFunction) => {
  res.send({ user: req.user });
  console.log("funcionou");
});

router.post("/", async(req: RequestInterface, res: Response, next: NextFunction) => {
  const data = {
    username: "eduardo",
    email: "eduardoddmg@gmail.com",
    cpf: 1356258402,
  };
  const requestStatus: Promise<boolean> = addUser(UserModel, data);
  await requestStatus ? res.send('success') : res.send('error')
});

module.exports = router;
