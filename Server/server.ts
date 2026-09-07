import "dotenv/config";
import type { Server } from "node:http";
import mongoose from "mongoose";
import { app } from "./index.ts";
import { connectDB, disconnectDB } from "./src/Config/db.config.ts";

const PORT = Number(process.env.PORT) || 5000;

let server: Server;

const startServer = async (): Promise<void> => {
  try {
    // Connect to database first
    await connectDB();

    // Start HTTP server
    server = app.listen(PORT, () => {
      console.log(`Server is running on port :: ${PORT}`);
    });

    // Handle MongoDB runtime errors
    mongoose.connection.on("error", (error) => {
      console.error("MongoDB runtime error:", error);
    });
  } catch (error) {
    console.error("Failed to start application:", error);
    process.exit(1);
  }
};

const shutdown = async (signal: string): Promise<void> => {
  console.log(`${signal} received. Shutting down gracefully...`);

  try {
    // Stop accepting new requests
    if (server) {
      await new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });

      console.log("HTTP server closed");
    }

    // Close MongoDB connection
    await disconnectDB();

    console.log("Application shut down successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error during shutdown:", error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGINT", () => {
  void shutdown("SIGINT");
});

process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});

// Start application
void startServer();
