const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'eazy-ci-mysql',
  user: 'root',
  password: 'eazy-admin',
  database: 'registry'
});

connection.connect();

module.exports = connection;
