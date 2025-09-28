// models/Habit.js
import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  schedule: { type: String }, // e.g. "daily", "mon,wed,fri" or cron-expression
  streak: { type: Number, default: 0 },
  lastDone: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

const Habit = mongoose.model('Habit', HabitSchema);
export default Habit;
