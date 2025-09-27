// utils/calculateStats.js
exports.calculateTaskCompletion = (tasks) => {
  const total = tasks.length;
  if (total === 0) return 0;
  const completed = tasks.filter((t) => t.status === "completed").length;
  return Math.round((completed / total) * 100);
};

exports.totalFocusTime = (timers) => {
  return timers.reduce((acc, t) => acc + (t.duration || 0), 0); // in minutes
};
