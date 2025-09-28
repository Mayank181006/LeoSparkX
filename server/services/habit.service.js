const Habit = require('../models/Habit');

exports.create = async (userId, data) => {
  const habit = new Habit({ ...data, user: userId });
  return await habit.save();
};

exports.getAll = async (userId) => {
  return await Habit.find({ user: userId });
};

exports.update = async (habitId, data) => {
  return await Habit.findByIdAndUpdate(habitId, data, { new: true });
};

exports.remove = async (habitId) => {
  return await Habit.findByIdAndDelete(habitId);
};
