// controllers/timerController.js
const Timer = require("../models/Timer");

// @desc    Start a new timer
// @route   POST /api/timers/start
// @access  Private
exports.startTimer = async (req, res) => {
  try {
    const { taskId } = req.body;

    const timer = await Timer.create({
      user: req.user.id,
      task: taskId || null,
      startTime: new Date(),
      status: "running",
    });

    res.status(201).json({
      success: true,
      timer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Stop a running timer
// @route   PUT /api/timers/:id/stop
// @access  Private
exports.stopTimer = async (req, res) => {
  try {
    let timer = await Timer.findOne({ _id: req.params.id, user: req.user.id });

    if (!timer) {
      return res.status(404).json({ success: false, message: "Timer not found" });
    }

    timer.endTime = new Date();
    timer.status = "completed";
    timer.duration = Math.round((timer.endTime - timer.startTime) / 60000); // minutes
    await timer.save();

    res.status(200).json({
      success: true,
      timer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Pause a running timer
// @route   PUT /api/timers/:id/pause
// @access  Private
exports.pauseTimer = async (req, res) => {
  try {
    let timer = await Timer.findOne({ _id: req.params.id, user: req.user.id });

    if (!timer || timer.status !== "running") {
      return res.status(400).json({ success: false, message: "No running timer found" });
    }

    timer.endTime = new Date();
    timer.duration = Math.round((timer.endTime - timer.startTime) / 60000);
    timer.status = "paused";
    await timer.save();

    res.status(200).json({
      success: true,
      timer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Resume a paused timer
// @route   PUT /api/timers/:id/resume
// @access  Private
exports.resumeTimer = async (req, res) => {
  try {
    let timer = await Timer.findOne({ _id: req.params.id, user: req.user.id });

    if (!timer || timer.status !== "paused") {
      return res.status(400).json({ success: false, message: "No paused timer found" });
    }

    // Start a new session linked to same task
    const newTimer = await Timer.create({
      user: req.user.id,
      task: timer.task || null,
      startTime: new Date(),
      status: "running",
    });

    res.status(200).json({
      success: true,
      newTimer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Get all timers of logged-in user
// @route   GET /api/timers
// @access  Private
exports.getTimers = async (req, res) => {
  try {
    const timers = await Timer.find({ user: req.user.id }).populate("task");

    res.status(200).json({
      success: true,
      count: timers.length,
      timers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
