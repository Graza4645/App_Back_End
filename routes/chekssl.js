


const express = require('express');
const router = express.Router();
const connection = require('../DB/dbconnection.js'); // your existing DB connection


// Debug endpoint to check env vars in production
router.get('/', (req, res) => {
  res.json({
    NODE_ENV: process.env.NODE_ENV || null,
    SUPABASE_DB_URL: process.env.SUPABASE_DB_URL ? "✅ Loaded" : "❌ Missing",
  });
});




module.exports = router;