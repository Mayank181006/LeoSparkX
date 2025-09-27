// routes/reportRoutes.js
const express = require("express");
const router = express.Router();
const {
  getTaskReport,
  getTimerReport,
  getOverviewReport,
} = require("../controllers/reportController");
const { protect } = require("../middleware/authMiddleware");

// All routes are protected
router.use(protect);

// @route   GET /api/reports/tasks
router.get("/tasks", getTaskReport);

// @route   GET /api/reports/timers
router.get("/timers", getTimerReport);

// @route   GET /api/reports/overview
router.get("/overview", getOverviewReport);

module.exports = router;
