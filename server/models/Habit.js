// models/Habit.js
const mongoose = require('mongoose');


const HabitSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
name: { type: String, required: true },
schedule: { type: String }, // e.g. "daily", "mon,wed,fri" or cron-expression
streak: { type: Number, default: 0 },
lastDone: { type: Date },
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Habit', HabitSchema);