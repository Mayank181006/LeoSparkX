const noteService = require('../services/noteService');

exports.createNote = async (req, res) => {
  try {
    const note = await noteService.create(req.user.id, req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await noteService.getAll(req.user.id);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
