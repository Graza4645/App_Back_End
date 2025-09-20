
// const {Pool} = require('pg')

// const connection = new Pool(
//     {
//   host: 'localhost',
//   port: 5432,
//   user: 'postgres',
//   password: 'kolkata260@G',
//   database: 'places',
//     }
// )

// connection.connect()
// .then(()=>{console.log('Data Base Connected ......')})
// .catch((err)=>{console.error('Filed to connect with Date Base : ', err)})

// module.exports = connection;

// require('dotenv').config();
// const { Pool } = require('pg');

// const isProduction = process.env.NODE_ENV === 'production';
//  console.log('Connected with : ',process.env.SUPABASE_DB_URL)
// const connectionString = isProduction
//   ? process.env.RENDER_DB_URL
//   : process.env.LOCAL_DB_URL;

// const pool = new Pool({
 
//   connectionString,
//   ssl: isProduction ? { rejectUnauthorized: false } : false, // Render requires SSL
// });

// // Test connection
// pool.query('SELECT NOW()')
//   .then(res => {
//     console.log(`✅ Connected to ${isProduction ? 'Render' : 'Local'} Database`);
//   })
//   .catch(err => {
//     console.error('❌ Failed to connect: ', err);
//   });

// module.exports = pool;




// require('dotenv').config();
// const { Pool } = require('pg');

// const isProduction = process.env.NODE_ENV === 'production';

// // Always prefer Supabase, else fallback to Local
// const connectionString = process.env.SUPABASE_DB_URL || process.env.LOCAL_DB_URL;


// if (!connectionString) {
//   console.error('❌ No database connection string found!');
//   console.log('Environment:', process.env.NODE_ENV);
//   console.log('Available env vars:', Object.keys(process.env).filter(key => key.includes('DB')));
//   process.exit(1);
// }

// const pool = new Pool({
//   connectionString,
//   ssl: isProduction ? { rejectUnauthorized: false } : false, // Only use SSL in production
// });

// // Test connection
// pool.query('SELECT NOW()')
//   .then(res => {
//     console.log(`✅ Connected to ${isProduction ? 'Supabase' : 'Local'} Database`);
//     console.log('Connection time:', res.rows[0].now);
//     console.log('Connection string (masked):', connectionString?.replace(/:[^:@]*@/, ':****@'));

//   })
//   .catch(err => {
//     console.error('❌ Failed to connect to database:');
//     console.error('Error code:', err.code);
//     console.error('Error message:', err.message);
//     console.error('Connection string (masked):', connectionString?.replace(/:[^:@]*@/, ':****@'));
//   });

// module.exports = pool;

////////////  final worked



















require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.SUPABASE_DB_URL || process.env.LOCAL_DB_URL;

if (!connectionString) {
  console.error('❌ No database connection string found!');
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Available env vars:', Object.keys(process.env).filter(key => key.includes('DB')));
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }, // ✅ Always enable SSL (safe for both local + Vercel)
});

// Test connection
pool.query('SELECT NOW()')
  .then(res => {
    console.log(`✅ Connected to Database`);
    console.log('Connection time:', res.rows[0].now);
    console.log('Connection string (masked):', connectionString?.replace(/:[^:@]*@/, ':****@'));
  })
  .catch(err => {
    console.error('❌ Failed to connect to database:');
    console.error('Error code:', err.code);
    console.error('Error message:', err.message);
    console.error('Connection string (masked):', connectionString?.replace(/:[^:@]*@/, ':****@'));
  });

module.exports = pool;






// require('dotenv').config();
// const { Pool } = require('pg');

// // Pick DB connection string: Supabase → fallback to Local
// const connectionString =
//   process.env.SUPABASE_DB_URL || process.env.LOCAL_DB_URL;

// if (!connectionString) {
//   console.error('❌ No database connection string found!');
//   console.log('Environment:', process.env.NODE_ENV);
//   process.exit(1);
// }

// // Detect if it's localhost
// const isLocal =
//   connectionString.includes('localhost') ||
//   connectionString.includes('127.0.0.1');

// // Enable SSL only for remote
// const pool = new Pool({
//   connectionString,
//   ssl: isLocal ? false : { rejectUnauthorized: false },
// });

// // Test connection
// pool
//   .query('SELECT NOW()')
//   .then(res => {
//     console.log(
//       `✅ Connected to ${isLocal ? 'Local' : 'Remote (Supabase)'} Database`
//     );
//     console.log('Connection time:', res.rows[0].now);
//   })
//   .catch(err => {
//     console.error('❌ Failed to connect to database:');
//     console.error('Error code:', err.code);
//     console.error('Error message:', err.message);
//     console.error(
//       'Connection string (masked):',
//       connectionString?.replace(/:[^:@]*@/, ':****@')
//     );
//   });

// module.exports = pool;







// require('dotenv').config();
// const { Pool } = require('pg');


// // Pick DB connection string: Supabase → fallback to Local
// const connectionString = process.env.SUPABASE_DB_URL || process.env.LOCAL_DB_URL;

// if (!connectionString) {
//   console.error('❌ No database connection string found!');
//   console.log('Environment:', process.env.NODE_ENV);
//   console.log(
//     'Available env vars:',
//     Object.keys(process.env).filter(key => key.includes('DB'))
//   );
//   process.exit(1);
// }

// // Enable SSL only for remote (Supabase/Render), not localhost
// const useSSL =
//   connectionString.includes('supabase.com') ||
//   connectionString.includes('render.com');

// const pool = new Pool({
//   connectionString,
//   ssl: useSSL ? { rejectUnauthorized: false } : false,
// });

// // Test connection
// pool
//   .query('SELECT NOW()')
//   .then(res => {
//     console.log(
//       `✅ Connected to ${useSSL ? 'Supabase/Remote' : 'Local'} Database`
//     );
//     console.log('Connection time:', res.rows[0].now);
//   })
//   .catch(err => {
//     console.error('❌ Failed to connect to database:');
//     console.error('Error code:', err.code);
//     console.error('Error message:', err.message);
//     console.error(
//       'Connection string (masked):',
//       connectionString?.replace(/:[^:@]*@/, ':****@')
//     );
//   });


// module.exports = pool;


















// require("dotenv").config();
// const { Pool } = require("pg");

// let connectionString = process.env.SUPABASE_DB_URL;

// console.log("🔗 Raw from env:", JSON.stringify(connectionString)); // Debug

// const pool = new Pool({
//   connectionString: String(connectionString), // ensure it's a string
//   ssl: { rejectUnauthorized: false },
// });

// pool.connect()
//   .then(() => console.log("✅ Connected to Supabase"))
//   .catch(err => console.error("❌ Connection error:", err));