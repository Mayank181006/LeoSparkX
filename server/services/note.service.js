const Note = require('../models/Note');

exports.create = async (userId, data) => {
  const note = new Note({ ...data, user: userId });
  return await note.save();
};

exports.getAll = async (userId) => {
  return await Note.find({ user: userId });
};

exports.update = async (noteId, data) => {
  return await Note.findByIdAndUpdate(noteId, data, { new: true });
};

exports.remove = async (noteId) => {
  return await Note.findByIdAndDelete(noteId);
};
