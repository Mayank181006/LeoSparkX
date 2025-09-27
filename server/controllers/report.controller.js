// controllers/reportController.js
const Task = require("../models/Task");
const Timer = require("../models/Timer");

// @desc    Get task statistics (completed, pending, in-progress)
// @route   GET /api/reports/tasks
// @access  Private
exports.getTaskReport = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });

    const stats = {
      total: tasks.length,
      completed: tasks.filter((t) => t.status === "completed").length,
      inProgress: tasks.filter((t) => t.status === "in-progress").length,
      pending: tasks.filter((t) => t.status === "pending").length,
    };

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Get timer statistics (total focus time, session count)
// @route   GET /api/reports/timers
// @access  Private
exports.getTimerReport = async (req, res) => {
  try {
    const timers = await Timer.find({ user: req.user.id, status: "completed" });

    const totalSessions = timers.length;
    const totalMinutes = timers.reduce((acc, t) => acc + (t.duration || 0), 0);

    res.status(200).json({
      success: true,
      stats: {
        totalSessions,
        totalMinutes,
        hours: (totalMinutes / 60).toFixed(2),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Get combined report (tasks + timers)
// @route   GET /api/reports/overview
// @access  Private
exports.getOverviewReport = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    const timers = await Timer.find({ user: req.user.id, status: "completed" });

    const taskStats = {
      total: tasks.length,
      completed: tasks.filter((t) => t.status === "completed").length,
      inProgress: tasks.filter((t) => t.status === "in-progress").length,
      pending: tasks.filter((t) => t.status === "pending").length,
    };

    const totalSessions = timers.length;
    const totalMinutes = timers.reduce((acc, t) => acc + (t.duration || 0), 0);

    res.status(200).json({
      success: true,
      report: {
        tasks: taskStats,
        timers: {
          totalSessions,
          totalMinutes,
          hours: (totalMinutes / 60).toFixed(2),
        },
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
