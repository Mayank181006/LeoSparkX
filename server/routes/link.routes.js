

// routes/links.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Link = require('../models/Link');


router.post('/', auth, async (req, res) => {
try {
const link = new Link({ ...req.body, user: req.user.id });
await link.save();
res.json(link);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


router.get('/', auth, async (req, res) => {
try {
const links = await Link.find({ user: req.user.id }).sort('-createdAt');
res.json(links);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


router.delete('/:id', auth, async (req, res) => {
try {
const link = await Link.findOneAndDelete({ _id: req.params.id, user: req.user.id });
if (!link) return res.status(404).json({ message: 'Link not found' });
res.json({ message: 'Link deleted' });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


module.exports = router;