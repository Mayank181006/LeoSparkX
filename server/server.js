// server.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorMiddleware");

// Routes
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const timerRoutes = require("./routes/timerRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // parse JSON requests
app.use(logger); // log all requests

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/timers", timerRoutes);
app.use("/api/reports", reportRoutes);

// Error middleware (must be after routes)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
