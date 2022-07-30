import { NextFunction, Request, Response } from "express";
import { ExpressInterface, RequestInterface } from "../types";

export default function middlewareRouter(req: RequestInterface, res: Response, next: NextFunction) {
  req.user = true;
  next();
}
