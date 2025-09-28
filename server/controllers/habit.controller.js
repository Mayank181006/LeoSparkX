const habitService = require('../services/habitService');

exports.createHabit = async (req, res) => {
  try {
    const habit = await habitService.create(req.user.id, req.body);
    res.status(201).json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getHabits = async (req, res) => {
  try {
    const habits = await habitService.getAll(req.user.id);
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
