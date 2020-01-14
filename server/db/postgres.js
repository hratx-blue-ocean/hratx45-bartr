// PostgresSQL connection
const { Pool } = require('pg');

let config;

if (process.env.NODE_ENV === 'production') {
  config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE
  }
} else {
  config = require('./config');
}

const pool = new Pool(config);


pool.connect()
  .then(result => {
    console.log(`FILE: postgres.js Connected to PostgresSQL`);
  })
  .catch(error => {
    console.log(`FILE: postgres.js Error connecting to PostgresSQL | Error: \n`, error);
  });

module.exports = pool;

