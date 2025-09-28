// // // server.js
// // require("dotenv").config();
// // const express = require("express");
// // const connectDB = require("./config/db");
// // const logger = require("./middleware/logger");
// // const errorHandler = require("./middleware/errorMiddleware");

// // // Routes
// // const authRoutes = require("./routes/authRoutes");
// // const taskRoutes = require("./routes/taskRoutes");
// // const timerRoutes = require("./routes/timerRoutes");
// // const reportRoutes = require("./routes/reportRoutes");

// // const app = express();

// // // Connect to database
// // connectDB();

// // // Middleware
// // app.use(express.json()); // parse JSON requests
// // app.use(logger); // log all requests

// // // Mount routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/tasks", taskRoutes);
// // app.use("/api/timers", timerRoutes);
// // app.use("/api/reports", reportRoutes);

// // // Error middleware (must be after routes)
// // app.use(errorHandler);

// // // Start server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // server.js
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// // Load env variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(morgan("dev"));

// // Routes
// import authRoutes from "./routes/auth.js";
// import goalRoutes from "./routes/goals.routes.js";
// import taskRoutes from "./routes/tasks.js";
// import noteRoutes from "./routes/notes.js";
// import linkRoutes from "./routes/links.js";
// import habitRoutes from "./routes/habits.js";
// import progressRoutes from "./routes/progress.js";

// app.use("/api/auth", authRoutes);
// app.use("/api/goals", goalRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/notes", noteRoutes);
// app.use("/api/links", linkRoutes);
// app.use("/api/habits", habitRoutes);
// app.use("/api/progress", progressRoutes);

// // Test Route
// app.get("/", (req, res) => {
//   res.send("🚀 Time Management Backend is running");
// });

// // Server Start
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () =>
//   console.log(`✅ Server started on port ${PORT} in ${process.env.NODE_ENV} mode`)
// );




// // server.js
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// // Load env variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(morgan("dev"));

// // Routes
// import authRoutes from "./routes/auth.js";
// import goalRoutes from "./routes/goals.routes.js";
// import taskRoutes from "./routes/tasks.js";
// import noteRoutes from "./routes/notes.js";
// import linkRoutes from "./routes/links.js";
// import habitRoutes from "./routes/habits.js";
// import progressRoutes from "./routes/progress.js";

// app.use("/api/auth", authRoutes);
// app.use("/api/goals", goalRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/notes", noteRoutes);
// app.use("/api/links", linkRoutes);
// app.use("/api/habits", habitRoutes);
// app.use("/api/progress", progressRoutes);

// // Test Route
// app.get("/", (req, res) => {
//   res.send("🚀 Time Management Backend is running");
// });

// // Server Start
// const PORT = process.env.PORT || 4000;
// const server = app.listen(PORT, () =>
//   console.log(`✅ Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
// );

// // Handle unhandled promise rejections
// process.on("unhandledRejection", (err) => {
//   console.error(`❌ Unhandled Rejection: ${err.message}`);
//   server.close(() => process.exit(1));
// });

// // Handle uncaught exceptions
// process.on("uncaughtException", (err) => {
//   console.error(`❌ Uncaught Exception: ${err.message}`);
//   process.exit(1);
// });


// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env;

if (!DB_USERNAME || !DB_PASSWORD || !DB_CLUSTER || !DB_NAME) {
  throw new Error("❌ Missing required MongoDB environment variables in .env");
}

const MONGO_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
