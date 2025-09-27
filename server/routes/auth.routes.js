// // routes/authRoutes.js
// const express = require("express");
// const router = express.Router();
// const { signup, login, getMe } = require("../controllers/authController");
// const { protect } = require("../middleware/authMiddleware"); // JWT verification

// // @route   POST /api/auth/signup
// router.post("/signup", signup);

// // @route   POST /api/auth/login
// router.post("/login", login);

// // @route   GET /api/auth/me
// router.get("/me", protect, getMe);

// module.exports = router;




// routes/auth.js
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Sign up
router.post(
'/signup',
[
body('name').notEmpty(),
body('email').isEmail(),
body('password').isLength({ min: 6 })
],
async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });


const { name, email, password } = req.body;
try {
let user = await User.findOne({ email });
if (user) return res.status(400).json({ message: 'User already exists' });
user = new User({ name, email, password: await bcrypt.hash(password, 10) });
await user.save();
const payload = { user: { id: user.id } };
const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
}
);


// Login
router.post(
'/login',
[body('email').isEmail(), body('password').exists()],
async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: 'Invalid credentials' });
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
const payload = { user: { id: user.id } };
const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token });
} catch (err) {
console.error(err.message);
res.status(500).send('Server error');
}
}
);


module.exports = router;