// models/Timer.js
const mongoose = require("mongoose");

const timerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task", // optional: timer linked to a specific task
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
    },
    duration: {
      type: Number, // in minutes (calculated when timer stops)
    },
    status: {
      type: String,
      enum: ["running", "paused", "stopped", "completed"],
      default: "running",
    },
  },
  { timestamps: true }
);

// 🕒 Virtual field to calculate duration if not stored
timerSchema.virtual("calculatedDuration").get(function () {
  if (this.startTime && this.endTime) {
    return Math.round((this.endTime - this.startTime) / 60000); // in minutes
  }
  return null;
});

const Timer = mongoose.model("Timer", timerSchema);
module.exports = Timer;
