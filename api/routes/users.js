const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201);
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
