import type { Request, Response, NextFunction, RequestHandler } from "express";

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<unknown>;

const asyncHandler = (requestHandler: AsyncRequestHandler): RequestHandler => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof APIERR) {
    return res.status(error.statusCode).json({
      success: error.success,
      message: error.message,
      errors: error.errors,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }

  console.error(error);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
    errors: [],
    stack:
      process.env.NODE_ENV === "development"
        ? error instanceof Error
          ? error.stack
          : undefined
        : undefined,
  });
};

class APIERR extends Error {
  statusCode: number;
  success: boolean;
  errors: unknown[];
  stack?: string;

  constructor(
    statusCode: number,
    message = "Something went wrong",
    errors: unknown[] = [],
  ) {
    super(message);

    this.name = "APIERR";
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }
}

class APIRES<T = unknown> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;

  constructor(statusCode: number, data: T, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { asyncHandler, errorHandler, APIERR, APIRES };
