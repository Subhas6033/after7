import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error("MONGO_URI is not defined");
  }

  // Prevent duplicate connections
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
    });

    console.log(
      `MongoDB connected successfully :: ${mongoose.connection.host}`,
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};

const disconnectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState === 0) {
    console.log("[Shutdown] MongoDB connection already closed");
    return;
  }

  await mongoose.connection.close();

  console.log("[Shutdown] MongoDB connection closed successfully");
};

export { connectDB, disconnectDB };
