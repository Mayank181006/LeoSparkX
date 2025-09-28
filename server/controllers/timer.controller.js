const timerService = require('../services/timerService');

exports.createTimer = async (req, res) => {
  try {
    const timer = await timerService.create(req.user.id, req.body);
    res.status(201).json(timer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTimers = async (req, res) => {
  try {
    const timers = await timerService.getAll(req.user.id);
    res.json(timers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
