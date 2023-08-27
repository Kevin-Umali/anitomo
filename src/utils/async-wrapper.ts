import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/ban-types
export function asyncWrapper(fn: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
