// // routes/taskRoutes.js
// const express = require("express");
// const router = express.Router();
// const {
//   createTask,
//   getTasks,
//   getTaskById,
//   updateTask,
//   deleteTask,
// } = require("../controllers/taskController");
// const { protect } = require("../middleware/authMiddleware"); // JWT verification

// // All routes are protected
// router.use(protect);

// // @route   POST /api/tasks
// router.post("/", createTask);

// // @route   GET /api/tasks
// router.get("/", getTasks);

// // @route   GET /api/tasks/:id
// router.get("/:id", getTaskById);

// // @route   PUT /api/tasks/:id
// router.put("/:id", updateTask);

// // @route   DELETE /api/tasks/:id
// router.delete("/:id", deleteTask);

// module.exports = router;





try {
const { date, quick } = req.query;
const filter = { user: req.user.id };
if (date) {
const d = new Date(date);
d.setHours(0, 0, 0, 0);
const d2 = new Date(d);
d2.setHours(23, 59, 59, 999);
filter.calendarDate = { $gte: d, $lte: d2 };
}
if (quick) filter.quick = quick === 'true';
const tasks = await Task.find(filter).sort('calendarDate');
res.json(tasks);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


// Update time spent (e.g., from timer)
router.post('/add-time/:id', auth, [body('minutes').isNumeric()], async (req, res) => {
const { minutes } = req.body;
try {
const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
if (!task) return res.status(404).json({ message: 'Task not found' });
task.timeSpentMinutes = (task.timeSpentMinutes || 0) + Number(minutes);
if (task.timeSpentMinutes >= (task.durationMinutes || 0) && task.durationMinutes > 0) task.isDone = true;
await task.save();
res.json(task);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


// Generic update / delete
router.put('/:id', auth, async (req, res) => {
try {
const task = await Task.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true });
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json(task);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


router.delete('/:id', auth, async (req, res) => {
try {
const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json({ message: 'Task deleted' });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


module.exports = router;