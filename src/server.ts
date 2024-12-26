import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/config/config";

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    // Connect to the database
    await mongoose.connect(config.mongoDbURI as string);

    console.log("Connected to MongoDB");

    // Start the server
    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();
