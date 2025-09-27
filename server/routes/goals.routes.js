

const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const Goal = require('../models/Goal');


// Create goal
router.post('/', auth, [body('title').notEmpty()], async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
try {
const goal = new Goal({ ...req.body, user: req.user.id });
await goal.save();
res.json(goal);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


// Get user's goals
router.get('/', auth, async (req, res) => {
try {
const goals = await Goal.find({ user: req.user.id }).sort('-createdAt');
res.json(goals);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


// Update / delete
router.put('/:id', auth, async (req, res) => {
try {
const goal = await Goal.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true });
if (!goal) return res.status(404).json({ message: 'Goal not found' });
res.json(goal);
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


router.delete('/:id', auth, async (req, res) => {
try {
const goal = await Goal.findOneAndDelete({ _id: req.params.id, user: req.user.id });
if (!goal) return res.status(404).json({ message: 'Goal not found' });
res.json({ message: 'Goal deleted' });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
});


module.exports = router;