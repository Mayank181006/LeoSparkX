// services/timerService.js
const Timer = require("../models/Timer");

exports.calculateDuration = (startTime, endTime) => {
  if (!startTime || !endTime) return 0;
  return Math.round((endTime - startTime) / 60000); // duration in minutes
};

// Optional: get total focus time for a user
exports.getTotalFocusTime = async (userId) => {
  const timers = await Timer.find({ user: userId, status: "completed" });
  return timers.reduce((acc, t) => acc + (t.duration || 0), 0);
};
