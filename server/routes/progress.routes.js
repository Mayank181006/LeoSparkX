

// routes/progress.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');
const Goal = require('../models/Goal');


// Simple progress: tasks completed vs planned, time spent summary
router.get('/', auth, async (req, res) => {
try {
const userId = req.user.id;
const totalTasks = await Task.countDocuments({ user: userId });
const doneTasks = await Task.countDocuments({ user: userId, isDone: true });
const totalPlannedMinutesAgg = await Task.aggregate([
{ $match: { user: require('mongoose').Types.ObjectId(userId) } },
{ $group: { _id: null, planned: { $sum: '$durationMinutes' }, spent: { $sum: '$timeSpentMinutes' } } }
]);
const planned = totalPlannedMinutesAgg[0]?.planned || 0;
const spent = totalPlannedMinutesAgg[0]?.spent || 0;
const goals = await Goal.countDocuments({ user: userId });
res.json({ totalTasks, doneTasks, plannedMinutes: planned, spentMinutes: spent, goals });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


module.exports = router;