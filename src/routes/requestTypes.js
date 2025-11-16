const express = require('express');
const RequestType = require('../models/RequestType');

const router = express.Router();

// GET- lister tous les types actifs
router.get('/', async (_req, res) => {
  const types = await RequestType.find({ isActive: true });
  res.json(types);
});

// GET- récupèrer un type par ID
router.get('/:id', async (req, res) => {
  const type = await RequestType.findById(req.params.id);
  if (!type) return res.status(404).json({ error: 'Not found' });
  res.json(type);
});

// POST- créer un nouveau type
router.post('/', async (req, res) => {
  try {
    const newType = new RequestType(req.body);
    await newType.save();
    res.status(201).json(newType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
