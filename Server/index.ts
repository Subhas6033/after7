import express from "express";
import type { Request, Response } from "express";

export const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to After7",
    statusCode: 200,
    success: true,
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
  });
});
