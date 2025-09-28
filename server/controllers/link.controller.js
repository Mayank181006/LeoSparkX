const linkService = require('../services/linkService');

exports.createLink = async (req, res) => {
  try {
    const link = await linkService.create(req.user.id, req.body);
    res.status(201).json(link);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getLinks = async (req, res) => {
  try {
    const links = await linkService.getAll(req.user.id);
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
