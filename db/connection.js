const mysql = require('mysql2');

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


module.exports = db;