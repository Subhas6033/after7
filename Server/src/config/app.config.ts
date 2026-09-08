import { env } from "./env.config.ts";

export const appConfig = {
  app: {
    name: "After7",
    environment: env.nodeEnv,
    port: env.port,
    apiPrefix: "/api",
  },
  server: {
    host: env.host,
    port: env.port,
  },
  cors: {
    origin: env.corsOrigin,
    credentials: true,
  },
  security: {
    trustProxy: env.nodeEnv === "production",
  },
  logging: {
    level: env.nodeEnv === "production" ? "info" : "debug",
  },
} as const;
