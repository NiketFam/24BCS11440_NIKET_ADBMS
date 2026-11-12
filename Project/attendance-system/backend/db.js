const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qwertsql@440', 
    database: 'attendance_db',
    waitForConnections: true,
    connectionLimit: 10
});

pool.getConnection()
    .then(conn => {
        console.log('✅ Connected to MySQL database (attendance_db)');
        conn.release();
    })
    .catch(err => {
        console.error('❌ Database connection failed:', err.message);
    });

module.exports = pool;