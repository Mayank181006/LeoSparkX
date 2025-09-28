const Link = require('../models/Link');

exports.create = async (userId, data) => {
  const link = new Link({ ...data, user: userId });
  return await link.save();
};

exports.getAll = async (userId) => {
  return await Link.find({ user: userId });
};

exports.update = async (linkId, data) => {
  return await Link.findByIdAndUpdate(linkId, data, { new: true });
};

exports.remove = async (linkId) => {
  return await Link.findByIdAndDelete(linkId);
};
