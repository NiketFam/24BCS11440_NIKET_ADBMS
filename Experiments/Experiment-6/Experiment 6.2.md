# &#x09;		EXPERIMENT 6.2



CREATE TABLE employees (

&#x20;   emp\_id INT PRIMARY KEY,

&#x20;   emp\_name VARCHAR(100) NOT NULL,

&#x20;   emp\_salary DECIMAL(10, 2) NOT NULL,

&#x20;     emp\_city VARCHAR(100) NOT NULL

);



INSERT INTO employees (emp\_id, emp\_name, emp\_salary, emp\_city) VALUES

(101, 'Amit Sharma', 85000.00, 'Mumbai'),

(102, 'Priya Patel', 95000.00, 'Mumbai'),

(103, 'Rahul Verma', 60000.00, 'Delhi'),

(104, 'Ananya Iyer', 110000.00, 'Bangalore'),

(105, 'Vikram Singh', 55000.00, 'Delhi'),

(106, 'Sneha Reddy', 105000.00, 'Bangalore'),

(107, 'Rohan Das', 72000.00, 'Kolkata')







SELECT \*FROM EMPLOYEES





\--	SIMPLE VIEW

&#x09;--COLUMN LEVEL

&#x09;CREATE VIEW EMP\_VIEW\_KRG AS

&#x09;SELECT EMP\_ID,EMP\_NAME

&#x09;FROM EMPLOYEES



&#x09;SELECT \*FROM EMP\_VIEW\_KRG



&#x09;--ROW LEVEL

&#x09;CREATE VIEW EMP\_VIEW\_KRG\_1 AS

&#x09;SELECT EMP\_ID,EMP\_NAME

&#x09;FROM EMPLOYEES

&#x09;WHERE EMP\_ID=101



&#x09;--ROW LEVEL AND COLUMN LEVEL

&#x09;SELECT \*FROM EMP\_VIEW\_KRG\_1



&#x09;DELETE FROM EMP\_VIEW\_KRG\_1

&#x09;WHERE EMP\_ID=101



\-- MATERIALIZED VIEW

&#x09;CREATE MATERIALIZED VIEW MV\_EMP\_VIEW\_KRG AS

&#x09;SELECT EMP\_ID,EMP\_NAME

&#x09;FROM EMPLOYEES

&#x09;WITH NO DATA



&#x09;SELECT \*FROM MV\_EMP\_VIEW\_KRG



&#x09;REFRESH MATERIALIZED VIEW MV\_EMP\_VIEW\_KRG

