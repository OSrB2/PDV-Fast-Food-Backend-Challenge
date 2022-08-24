import { NextFunction, Request, Response } from "express";

import { ValidationError } from "express-validation";

export default function (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  return res.status(500).json(error);
}
