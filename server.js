const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to the db
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // Your MySql username,
        user: 'root',
        // Your MySql password
        password: 'AllThePuppies123!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


// Query the whole list of candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });


// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
// });


// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });


// To confirm the server is connected and working in the browser
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
});


// Route handler for req not supported, default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Function to start the express.js on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});