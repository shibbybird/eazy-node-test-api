const express = require('express')
const app = express()

const mysql = require('./lib/db/mysql')

const PORT = 3000

app.get('/health', (req, res) => {
  mysql.query('SELECT 1', function (error, results, fields) {
    if (error) {
      res.status(503)
      res.send();
    } else {
      res.status(200).send();
    }
  });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
