// routes/timerRoutes.js
const express = require("express");
const router = express.Router();
const {
  startTimer,
  stopTimer,
  pauseTimer,
  resumeTimer,
  getTimers,
} = require("../controllers/timerController");
const { protect } = require("../middleware/authMiddleware");

// All routes are protected
router.use(protect);

// @route   POST /api/timers/start
router.post("/start", startTimer);

// @route   PUT /api/timers/:id/stop
router.put("/:id/stop", stopTimer);

// @route   PUT /api/timers/:id/pause
router.put("/:id/pause", pauseTimer);

// @route   PUT /api/timers/:id/resume
router.put("/:id/resume", resumeTimer);

// @route   GET /api/timers
router.get("/", getTimers);

module.exports = router;
