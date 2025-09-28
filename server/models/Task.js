// // // controllers/taskController.js
// // const Task = require("./models/Task");

// // // @desc    Create new task
// // // @route   POST /api/tasks
// // // @access  Private
// // exports.createTask = async (req, res) => {
// //   try {
// //     const { title, description, priority, dueDate, project } = req.body;

// //     const task = await Task.create({
// //       title,
// //       description,
// //       priority,
// //       dueDate,
// //       project,
// //       user: req.user.id, // from auth middleware
// //     });

// //     res.status(201).json({
// //       success: true,
// //       task,
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, message: "Server Error" });
// //   }
// // };

// // // @desc    Get all tasks of logged-in user
// // // @route   GET /api/tasks
// // // @access  Private
// // exports.getTasks = async (req, res) => {
// //   try {
// //     const tasks = await Task.find({ user: req.user.id }).populate("project");

// //     res.status(200).json({
// //       success: true,
// //       count: tasks.length,
// //       tasks,
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, message: "Server Error" });
// //   }
// // };

// // // @desc    Get single task by ID
// // // @route   GET /api/tasks/:id
// // // @access  Private
// // exports.getTaskById = async (req, res) => {
// //   try {
// //     const task = await Task.findOne({ _id: req.params.id, user: req.user.id });

// //     if (!task) {
// //       return res.status(404).json({ success: false, message: "Task not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       task,
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, message: "Server Error" });
// //   }
// // };

// // // @desc    Update task
// // // @route   PUT /api/tasks/:id
// // // @access  Private
// // exports.updateTask = async (req, res) => {
// //   try {
// //     let task = await Task.findOne({ _id: req.params.id, user: req.user.id });

// //     if (!task) {
// //       return res.status(404).json({ success: false, message: "Task not found" });
// //     }

// //     task = await Task.findByIdAndUpdate(req.params.id, req.body, {
// //       new: true,
// //       runValidators: true,
// //     });

// //     res.status(200).json({
// //       success: true,
// //       task,
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, message: "Server Error" });
// //   }
// // };

// // // @desc    Delete task
// // // @route   DELETE /api/tasks/:id
// // // @access  Private
// // exports.deleteTask = async (req, res) => {
// //   try {
// //     const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });

// //     if (!task) {
// //       return res.status(404).json({ success: false, message: "Task not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "Task deleted successfully",
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, message: "Server Error" });
// //   }
// // };



// // models/Task.js
// import mongoose from "mongoose";

// const TaskSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   goal: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal' },
//   title: { type: String, required: true },
//   description: { type: String },
//   dueDate: { type: Date },
//   durationMinutes: { type: Number, default: 0 }, // planned duration
//   timeSpentMinutes: { type: Number, default: 0 }, // accumulated
//   isDone: { type: Boolean, default: false },
//   calendarDate: { type: Date },
//   quick: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now }
// });

// const Task = mongoose.model('Task', TaskSchema);
// export default Task;



// Task.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;   // ✅ Must have this
