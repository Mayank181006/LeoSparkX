// services/reportService.js
const Task = require("../models/Task");
const Timer = require("../models/Timer");

exports.getTaskStats = async (userId) => {
  const tasks = await Task.find({ user: userId });
  return {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "completed").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    pending: tasks.filter((t) => t.status === "pending").length,
  };
};

exports.getTimerStats = async (userId) => {
  const timers = await Timer.find({ user: userId, status: "completed" });
  const totalMinutes = timers.reduce((acc, t) => acc + (t.duration || 0), 0);
  return {
    totalSessions: timers.length,
    totalMinutes,
    hours: (totalMinutes / 60).toFixed(2),
  };
};

// Combined report
exports.getOverviewReport = async (userId) => {
  const tasks = await this.getTaskStats(userId);
  const timers = await this.getTimerStats(userId);

  return {
    tasks,
    timers,
  };
};
