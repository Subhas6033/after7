import express from "express";
import type { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  APIERR,
  APIRES,
  asyncHandler,
  errorHandler,
} from "./src/utils/helper.utils.ts";
import { success } from "zod";

export const app = express();
const corsOrigin = process.env.CORS_ORIGIN;

if (!corsOrigin) {
  throw new Error(
    "CORS_ORIGIN environment variable is required but was not provided.",
  );
}

/*
  Trust the first reverse proxy when the application is deployed behind
  a load balancer, reverse proxy, or container platform.

  Adjust this value according to the actual deployment topology.
 */
app.set("trust proxy", 1);

/*
  Prevent Express from exposing the underlying framework through the
  X-Powered-By response header.
 */
app.disable("x-powered-by");

/*
  Restrict cross-origin requests to the configured frontend origin and
  allow credentials such as authentication cookies to be transmitted.
 */
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  }),
);

/*
  Parse JSON request bodies with a bounded payload size to prevent
  unnecessarily large requests from consuming application memory.
 */
app.use(express.json({ limit: "1mb" }));

/*
  Parse URL-encoded request bodies with support for nested objects.
 */
app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  }),
);

/*
  Parse cookies from incoming HTTP requests.
 */
app.use(cookieParser());

/*
  Basic application endpoint.
 
  This endpoint confirms that the HTTP application is reachable.
  It does not represent dependency or service health.
 */
app.get("/", (_req: Request, res: Response) => {
  const response = new APIRES(200, null, "Welcome to After7");

  res.status(response.statusCode).json(response);
});

/*
  Application health endpoint.
 
  TODO:
  Perform non-destructive health checks for all critical infrastructure
  and dependencies, such as MongoDB, Redis, messaging, authentication,
  storage, queues, and required external services.
 
  Individual health checks should live in dedicated modules so this route
  remains small, testable, and maintainable as the application grows.
 
  The endpoint should return:
  - 200 when all required dependencies are healthy.
  - 503 when one or more required dependencies are unavailable.
 */
app.get(
  "/health",
  asyncHandler(async (_req: Request, res: Response) => {
    const health = {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };

    const response = new APIRES(200, health, "Application is healthy");

    res.status(response.statusCode).json(response);
  }),
);

// TODO: APP endpoints goes here as projects grows

/*
  Handle requests that do not match any registered route.
  This middleware must remain after all application routes.
 */
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new APIERR(404, "Route not found"));
});

/*
  Centralized error handling for all application errors.
 
  The errorHandler is responsible for:
  - Formatting APIERR responses.
  - Returning safe generic responses for unexpected errors.
  - Exposing stack traces only in development.
  - Preventing internal implementation details from leaking to clients.
 
  This middleware must be registered after all routes and middleware.
 */
app.use(errorHandler);
