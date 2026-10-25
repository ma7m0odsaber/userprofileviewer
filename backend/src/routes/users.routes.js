const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

/**
 * GET /api/users
 * Returns all user profiles sorted by name.
 */
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ name: 1 });
    res.json({ success: true, count: users.length, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

/**
 * GET /api/users/:id
 * Returns a single user profile by MongoDB ObjectId.
 */
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

module.exports = router;
