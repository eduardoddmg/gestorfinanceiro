import { NextFunction, Request, Response } from "express";

export type PortType = 3001 | 5000;

export interface RequestInterface extends Request {
  user: boolean;
}

export interface ExpressInterface {
  req: RequestInterface;
  res: Response;
  next: NextFunction;
} 



