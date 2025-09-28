const Goal = require('../models/Goal');

exports.create = async (userId, data) => {
  const goal = new Goal({ ...data, user: userId });
  return await goal.save();
};

exports.getAll = async (userId) => {
  return await Goal.find({ user: userId });
};

exports.update = async (goalId, data) => {
  return await Goal.findByIdAndUpdate(goalId, data, { new: true });
};

exports.remove = async (goalId) => {
  return await Goal.findByIdAndDelete(goalId);
};
