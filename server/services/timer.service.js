const Timer = require('../models/Timer');

exports.create = async (userId, data) => {
  const timer = new Timer({ ...data, user: userId });
  return await timer.save();
};

exports.getAll = async (userId) => {
  return await Timer.find({ user: userId });
};

exports.update = async (timerId, data) => {
  return await Timer.findByIdAndUpdate(timerId, data, { new: true });
};

exports.remove = async (timerId) => {
  return await Timer.findByIdAndDelete(timerId);
};
