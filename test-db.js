require('dotenv').config();
const pool = require('./DB/dbconnection');

async function testConnection() {
  try {
    console.log('Testing database connection...');
    const result = await pool.query('SELECT version()');
    console.log('✅ Database connected successfully!');
    console.log('PostgreSQL version:', result.rows[0].version);
    
    // Test a simple query
    const timeResult = await pool.query('SELECT NOW() as current_time');
    console.log('Current time from DB:', timeResult.rows[0].current_time);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    process.exit(1);
  }
}

testConnection();