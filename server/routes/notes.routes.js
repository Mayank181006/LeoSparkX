

// routes/notes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Note = require('../models/Note');


router.post('/', auth, async (req, res) => {
try {
const note = new Note({ ...req.body, user: req.user.id, updatedAt: new Date() });
await note.save();
res.json(note);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


router.get('/', auth, async (req, res) => {
try {
const notes = await Note.find({ user: req.user.id }).sort('-updatedAt');
res.json(notes);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


router.put('/:id', auth, async (req, res) => {
try {
const note = await Note.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, { ...req.body, updatedAt: new Date() }, { new: true });
if (!note) return res.status(404).json({ message: 'Note not found' });
res.json(note);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


router.delete('/:id', auth, async (req, res) => {
try {
const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user.id });
if (!note) return res.status(404).json({ message: 'Note not found' });
res.json({ message: 'Note deleted' });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


module.exports = router;