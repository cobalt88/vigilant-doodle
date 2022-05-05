const mysql = require("mysql2");
const express = require("express");

const PORT = process.env.PORT || 3001; 
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'B8ea6f88**',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello There!'
  })
});

//select all data on the candidates table
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows)
// });

// select data from the candidates table based on the id
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err,row) => {
//   if(err) {
//     console.log(err);
//   }
//   console.log(row);
// });

//delete data from the candidates table - important note: ? = a placeholder value.
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err,result) => {
//   if(err){
//     console.log(err);
//   }
//   console.log(result);
// });

//create candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// 404 not found
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


