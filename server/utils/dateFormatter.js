// utils/dateFormatter.js
exports.formatDate = (date) => {
  if (!date) return null;
  return new Date(date).toLocaleString("en-IN", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
