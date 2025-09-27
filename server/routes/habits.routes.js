

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Habit = require('../models/Habit');


// Create
router.post('/', auth, async (req, res) => {
try {
const habit = new Habit({ ...req.body, user: req.user.id });
await habit.save();
res.json(habit);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


// Mark as done today
router.post('/done/:id', auth, async (req, res) => {
try {
const habit = await Habit.findOne({ _id: req.params.id, user: req.user.id });
if (!habit) return res.status(404).json({ message: 'Habit not found' });
const now = new Date();
const last = habit.lastDone ? new Date(habit.lastDone) : null;
const sameDay = last && last.toDateString() === now.toDateString();
if (sameDay) return res.status(400).json({ message: 'Already marked done today' });
// simple streak logic: if yesterday was lastDone, increment else reset
const yesterday = new Date(now);
yesterday.setDate(now.getDate() - 1);
const wasYesterday = last && last.toDateString() === yesterday.toDateString();
habit.streak = wasYesterday ? habit.streak + 1 : 1;
habit.lastDone = now;
await habit.save();
res.json(habit);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


router.get('/', auth, async (req, res) => {
try {
const habits = await Habit.find({ user: req.user.id }).sort('-createdAt');
res.json(habits);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


module.exports = router;