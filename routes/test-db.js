


const express = require('express');
const router = express.Router();
const connection = require('../DB/dbconnection.js'); // pool exported as 'connection'

// Test DB connection
router.get('/', async (req, res) => {
  try {
    const result = await connection.query('SELECT NOW()'); // use 'connection' here
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error('DB connection failed:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
