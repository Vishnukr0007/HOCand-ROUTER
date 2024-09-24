// Route
const express = require('express');
const router = express.Router();
const User = require('./model/user'); 
const Route  =require('router')
//POST
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = await User.create({ name, email, age });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;


