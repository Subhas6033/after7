import "dotenv/config";
type NodeEnvironment = "development" | "test" | "production";

// TODO: Update the env as project grows and uncomments from here or add here

/*
  Read a string environment variable.
  If the variable is not provided and no default value exists,
  the application will fail fast during startup.
  Failing fast is important in production because the application
  should never start with missing critical configuration.
 */
const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;

  if (value === undefined || value === "") {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

/*
  Read and validate a numeric environment variable.
  Used for values such as:
  - PORT
  - MAIL_PORT
  - Database ports
  - Other numeric configuration values
 */
const getNumberEnv = (key: string, defaultValue?: number): number => {
  const value = process.env[key];

  if (value === undefined || value === "") {
    if (defaultValue !== undefined) {
      return defaultValue;
    }

    throw new Error(`Missing required environment variable: ${key}`);
  }

  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`${key} must be a valid number`);
  }

  return parsedValue;
};

/*
  Application environment.
  Defaults to development so the application can be started
  locally without explicitly setting NODE_ENV.
  In production, NODE_ENV should always be explicitly set:
  NODE_ENV=production
 */
const nodeEnv = getEnv("NODE_ENV", "development") as NodeEnvironment;

/*
  Prevent the application from starting with an unsupported
  environment value.
  This protects production deployments from configuration
  mistakes such as:
  NODE_ENV=prod
  Instead, only the supported environments are accepted.
 */
if (!["development", "test", "production"].includes(nodeEnv)) {
  throw new Error(
    `Invalid NODE_ENV: ${nodeEnv}. ` +
      `Must be development, test, or production.`,
  );
}

/*
  Centralized application environment configuration.
  IMPORTANT:
  - Do NOT commit the real .env file to Git.
  - Production secrets should be injected by the deployment
    environment, CI/CD system, Docker secrets, or a secret manager.
 */
export const env = {
  //  Current application environment.
  nodeEnv,

  /*
    Server host.
    0.0.0.0 allows the application to accept connections from
    outside the Docker container.
   */
  host: getEnv("HOST", "0.0.0.0"),

  /*
    HTTP server port.
    Production value should normally be supplied through
    the deployment environment.
   */
  port: getNumberEnv("PORT", 5000),

  /*
    Allowed frontend origin for CORS.
    Development:
    http://localhost:3000
   */
  corsOrigin: getEnv("CORS_ORIGIN", "http://localhost:3000"),

  /*
    Database configuration.
    DATABASE_URL is required because the application
    cannot operate without a database connection.
    NEVER hard-code database credentials in source code.
   */
  database: {
    url: getEnv("MONGO_URI"),
  },

  /*
    JWT authentication configuration.
    JWT_SECRET is mandatory and must be a strong,
    randomly generated secret in production.
    NEVER commit JWT_SECRET to Git.
   */
  // jwt: {
  //   secret: getEnv("JWT_SECRET"),

  //   /*
  //     JWT expiration time.
  //     Example values:
  //     - 15m
  //     - 1h
  //     - 7d
  //     Choose the value according to your authentication
  //     and refresh-token strategy.
  //    */
  //   expiresIn: getEnv("JWT_EXPIRES_IN", "7d"),
  // },

  /*
    Redis configuration.
    Redis can be used for:
    - Caching
    - Sessions
    - Rate limiting
    - Socket scaling
    - Background jobs
   *The localhost default is intended for development only.
    Production should provide REDIS_URL explicitly.
   */
  // redis: {
  //   url: getEnv("REDIS_URL", "redis://localhost:6379"),
  // },

  /*
    Email / SMTP configuration.
    Used for application emails such as:
    - Email verification
    - Password reset
    - Notifications
   */
  // mail: {
  //   host: getEnv("MAIL_HOST"),

  //   /*
  //     Standard SMTP submission port.
  //     587 is commonly used with STARTTLS.
  //    */
  //   port: getNumberEnv("MAIL_PORT", 587),

  //   /*
  //     SMTP authentication credentials.
  //     These values must come from environment variables
  //     or a production secret manager.
  //    */
  //   user: getEnv("MAIL_USER"),
  //   password: getEnv("MAIL_PASSWORD"),
  // },
} as const;
