import { NextFunction, Request, Response } from "express";
import { ValidationError } from "express-validation";
import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (error instanceof ValidationError) {
    res.status(error.statusCode).json(error);
  } else {
    res.status(500).json({ message: error.message});
  }
};

export default errorHandler;
