import { NextFunction, Request, Response } from "express";

export function notFoundMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);

  if (res.statusCode === 404) {
    res.status(404).json({ message: "Not Found" });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
