DROP DATABASE IF EXISTS attendance_db;
CREATE DATABASE attendance_db;
USE attendance_db;

CREATE TABLE Department (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE,
    location VARCHAR(100)
);

CREATE TABLE Shift (
    shift_id INT AUTO_INCREMENT PRIMARY KEY,
    shift_name VARCHAR(50) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    grace_period_mins INT DEFAULT 15
);

CREATE TABLE Employee (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    designation VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id) ON DELETE SET NULL
);

CREATE TABLE Attendance_Log (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT NOT NULL,
    shift_id INT NOT NULL DEFAULT 1,
    attendance_date DATE NOT NULL,
    check_in_time TIME,
    check_out_time TIME,
    status ENUM('Present', 'Absent', 'Late', 'Half-Day') DEFAULT 'Absent',
    work_hours DECIMAL(4,2) DEFAULT 0.00,
    UNIQUE (emp_id, attendance_date),
    FOREIGN KEY (emp_id) REFERENCES Employee(emp_id) ON DELETE CASCADE,
    FOREIGN KEY (shift_id) REFERENCES Shift(shift_id)
);

DELIMITER //
CREATE TRIGGER before_attendance_insert
BEFORE INSERT ON Attendance_Log
FOR EACH ROW
BEGIN
    DECLARE shift_start TIME;
    DECLARE grace INT;
    
    SELECT start_time, grace_period_mins INTO shift_start, grace 
    FROM Shift WHERE shift_id = NEW.shift_id;

    IF NEW.check_in_time IS NOT NULL THEN
        IF NEW.check_in_time > ADDTIME(shift_start, SEC_TO_TIME(grace * 60)) THEN
            SET NEW.status = 'Late';
        ELSE
            SET NEW.status = 'Present';
        END IF;
    END IF;
END //

CREATE TRIGGER before_attendance_update
BEFORE UPDATE ON Attendance_Log
FOR EACH ROW
BEGIN
    IF NEW.check_out_time IS NOT NULL AND NEW.check_in_time IS NOT NULL THEN
        SET NEW.work_hours = TIMESTAMPDIFF(MINUTE, NEW.check_in_time, NEW.check_out_time) / 60.0;
        IF NEW.work_hours < 4.0 THEN
            SET NEW.status = 'Half-Day';
        END IF;
    END IF;
END //
DELIMITER ;

CREATE VIEW Monthly_Attendance_Summary AS
SELECT 
    e.emp_id,
    CONCAT(e.first_name, ' ', e.last_name) AS employee_name,
    d.dept_name,
    COUNT(CASE WHEN a.status IN ('Present', 'Late') THEN 1 END) AS days_present,
    COUNT(CASE WHEN a.status = 'Late' THEN 1 END) AS late_marks,
    SUM(a.work_hours) AS total_hours_worked
FROM Employee e
LEFT JOIN Department d ON e.dept_id = d.dept_id
LEFT JOIN Attendance_Log a ON e.emp_id = a.emp_id
GROUP BY e.emp_id;
	
INSERT INTO Department (dept_name, location) VALUES 
('Engineering', 'Block A'), 
('Human Resources', 'Block B'), 
('Operations', 'Block C');

INSERT INTO Shift (shift_name, start_time, end_time, grace_period_mins) VALUES 
('Morning Shift', '09:00:00', '17:00:00', 15);

INSERT INTO Employee (first_name, last_name, email, designation, dept_id) VALUES 
('Aarav', 'Sharma', 'aarav@company.com', 'Software Engineer', 1),
('Priya', 'Verma', 'priya@company.com', 'HR Manager', 2),
('Rohan', 'Das', 'rohan@company.com', 'System Analyst', 1);