const express = require('express');
const Faculty = require('../models/Faculty');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/faculty
router.get('/', protect, async (req, res) => {
  try {
    const { dept, search } = req.query;
    const filter = {};
    if (dept)   filter.department = dept;
    if (search) filter.name = { $regex: search, $options: 'i' };
    const faculty = await Faculty.find(filter).sort({ createdAt: -1 });
    res.json(faculty);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// POST /api/faculty
router.post('/', protect, async (req, res) => {
  try {
    const { name, designation, department, subject, email, color } = req.body;
    if (!name || !designation || !department || !subject)
      return res.status(400).json({ message: 'Name, designation, department and subject are required' });
    const faculty = await Faculty.create({
      name, designation, department, subject, email, color, added_by: req.user._id
    });
    res.status(201).json(faculty);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// PUT /api/faculty/:id
router.put('/:id', protect, async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
    res.json(faculty);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// DELETE /api/faculty/:id
router.delete('/:id', protect, async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.json({ message: 'Faculty deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// DELETE /api/faculty — delete all
router.delete('/', protect, async (req, res) => {
  try {
    await Faculty.deleteMany({});
    res.json({ message: 'All faculty deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
