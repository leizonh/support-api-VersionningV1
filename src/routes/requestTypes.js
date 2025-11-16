import express from 'express';
import RequestType from '../models/RequestType.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  const types = await RequestType.find({ isActive: true });
  res.json(types);
});

router.get('/:id', async (req, res) => {
  const type = await RequestType.findById(req.params.id);
  if (!type) return res.status(404).json({ error: 'Not found' });
  res.json(type);
});

router.post('/', async (req, res) => {
  try {
    const newType = new RequestType(req.body);
    await newType.save();
    res.status(201).json(newType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
