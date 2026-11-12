const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/employees', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT e.emp_id, e.first_name, e.last_name, e.email, e.designation, d.dept_name 
            FROM Employee e 
            LEFT JOIN Department d ON e.dept_id = d.dept_id
            ORDER BY e.emp_id ASC
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/employees', async (req, res) => {
    const { first_name, last_name, email, designation, dept_id } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO Employee (first_name, last_name, email, designation, dept_id) VALUES (?, ?, ?, ?, ?)',
            [first_name, last_name, email, designation, dept_id || 1]
        );
        res.status(201).json({ emp_id: result.insertId, message: 'Employee added successfully' });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'Email already exists.' });
        }
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/attendance/checkin', async (req, res) => {
    const { emp_id } = req.body;
    try {
        await db.query(
            `INSERT INTO Attendance_Log (emp_id, shift_id, attendance_date, check_in_time) 
             VALUES (?, 1, CURDATE(), CURTIME())`,
            [emp_id]
        );
        res.json({ message: 'Checked in successfully!' });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'Employee has already checked in today.' });
        }
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/attendance/checkout', async (req, res) => {
    const { emp_id } = req.body;
    try {
        const [result] = await db.query(
            `UPDATE Attendance_Log 
             SET check_out_time = CURTIME() 
             WHERE emp_id = ? AND attendance_date = CURDATE() AND check_out_time IS NULL`,
            [emp_id]
        );
        if (result.affectedRows === 0) {
            return res.status(400).json({ error: 'No active check-in found for today (or already checked out).' });
        }
        res.json({ message: 'Checked out successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/api/attendance/today', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT a.attendance_id, e.emp_id, CONCAT(e.first_name, ' ', e.last_name) AS name,
                   d.dept_name, a.attendance_date, a.check_in_time, a.check_out_time, a.status, a.work_hours
            FROM Attendance_Log a
            JOIN Employee e ON a.emp_id = e.emp_id
            LEFT JOIN Department d ON e.dept_id = d.dept_id
            WHERE a.attendance_date = CURDATE()
            ORDER BY a.check_in_time DESC
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/api/attendance/summary', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Monthly_Attendance_Summary');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});
// http://localhost:5000/api/employees