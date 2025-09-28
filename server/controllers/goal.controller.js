const goalService = require('../services/goalService');

exports.createGoal = async (req, res) => {
  try {
    const goal = await goalService.create(req.user.id, req.body);
    res.status(201).json(goal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await goalService.getAll(req.user.id);
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
