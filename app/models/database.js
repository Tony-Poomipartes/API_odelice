const { Client } = require('pg');

const client = new Client({
  database: process.env.PG_DATABASE,
});

client.connect();

module.exports = client;
