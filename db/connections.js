const mysql = require("mysql2");

//configure your own server connection here
const db = mysql.createConnection(
  {
    host: '',
    user: '',
    password: '',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

module.exports = db;
