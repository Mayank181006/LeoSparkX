const Task = require('../models/Task');

exports.create = async (userId, data) => {
  const task = new Task({ ...data, user: userId });
  return await task.save();
};

exports.getAll = async (userId) => {
  return await Task.find({ user: userId });
};

exports.update = async (taskId, data) => {
  return await Task.findByIdAndUpdate(taskId, data, { new: true });
};

exports.remove = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};
