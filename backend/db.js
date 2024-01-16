'use strict';

let mysql = require('mysql2');
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_PORT } = process.env;
const connection = mysql.createPool({
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  port: DB_PORT
});

module.exports = { connection };