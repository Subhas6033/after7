import "dotenv/config";
import type { Server } from "node:http";
import mongoose from "mongoose";
import { app } from "./index.ts";
import { connectDB, disconnectDB } from "./src/config/db.config.ts";
import { appConfig } from "./src/config/app.config.ts";

let server: Server;
let isShuttingDown = false;

const SHUTDOWN_TIMEOUT = 10_000; // Maximum time allowed for graceful shutdown

/*
  Initializes application dependencies and starts the HTTP server.
  The database connection is established before the server begins
  accepting requests to prevent the application from serving traffic
  while required infrastructure is unavailable.
 */

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    server = app.listen(appConfig.app.port, () => {
      console.log(`Server is running on port :: ${appConfig.app.port}`);
    });

    /*
      Monitor unexpected MongoDB connection errors that occur after
      the initial connection has been established.
     */
    mongoose.connection.on("error", (error) => {
      console.error("MongoDB runtime error:", error);
    });
  } catch (error) {
    console.error("Failed to start application:", error);
    process.exit(1);
  }
};

/*
  Gracefully shuts down the application in response to an OS termination signal.
  Shutdown order:
  1. Stop accepting new HTTP connections.
  2. Allow in-flight requests to complete.
  3. Close external resources such as the database connection.
  4. Terminate the process with the appropriate exit code.

  A timeout is used as a safety mechanism to prevent the process from
  remaining indefinitely blocked by a long-running request or resource.
 */
const shutdown = async (signal: string): Promise<void> => {
  // Ignore subsequent termination signals while shutdown is already in progress.
  if (isShuttingDown) {
    console.log("Shutdown already in progress...");
    return;
  }
  isShuttingDown = true;
  console.log(`[Shutdown] ${signal} received. Starting graceful shutdown...`);

  /*
    Force termination if graceful shutdown exceeds the configured timeout.
    This prevents a stuck connection or request from keeping the process alive.
   */
  const forceShutdownTimer = setTimeout(() => {
    console.error("Graceful shutdown timed out. Forcing process termination.");
    process.exit(1);
  }, SHUTDOWN_TIMEOUT);

  // The timeout itself should not prevent the event loop from becoming idle.
  forceShutdownTimer.unref();

  try {
    /*
      Stop accepting new connections while allowing existing requests
      to complete before the HTTP server is closed.
     */
    if (server) {
      await new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        });
      });
      console.log("[Shutdown] HTTP server closed");
    }

    /*
      Release the database connection after HTTP traffic has stopped,
      ensuring no new application requests can start database operations.
     */
    await disconnectDB();
    console.log("[Shutdown] Server shut down successfully");
    clearTimeout(forceShutdownTimer);
    // Exit with a success status after all resources have been released.
    process.exit(0);
  } catch (error) {
    clearTimeout(forceShutdownTimer);
    console.error("Error during graceful shutdown:", error);
    // A non-zero exit code signals an unsuccessful shutdown to the runtime/container.
    process.exit(1);
  }
};

/*
  Handle interactive termination, such as Ctrl+C from a terminal.
 */
process.on("SIGINT", () => {
  void shutdown("SIGINT");
});

/*
  Handle termination requests from process managers and container
  orchestration platforms such as Docker or Kubernetes.
 */
process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});

// Start the application after registering lifecycle handlers.
void startServer();
