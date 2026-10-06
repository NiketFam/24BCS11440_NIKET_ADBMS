# &#x09;	    EXPERIMENT-8



##### QUESTION:- Write a PostgreSQL stored procedure `Insert\_Employee` that accepts the following parameters as arguments:

##### 

##### EMP\_ID

##### EMP\_NAME

##### SALARY

##### DEPARTMENT\_NAME

##### 

##### The procedure should insert the employee details into the Employee table only if the EMP\_ID is an odd number.

##### 

##### If the user attempts to insert an employee with an even EMP\_ID, the procedure must raise an exception with the message:

##### 

##### "Even EMP\_ID is not allowed. Only odd EMP\_ID is allowed."

##### 

##### Requirements:

##### 

##### 1\. Create an Employee table with appropriate columns.

##### 2\. Create the Insert\_Employee procedure using PL/pgSQL.

##### 3\. Use a conditional statement to check whether EMP\_ID is odd or even.

##### 4\. Use RAISE EXCEPTION for an even EMP\_ID.

##### 5\. Insert the record into the table only when the EMP\_ID is odd.

##### 6\. Display a success message after successful insertion.





CODE:- 





CREATE TABLE Employee (

&#x20;   EMP\_ID INT PRIMARY KEY,

&#x20;   EMP\_NAME VARCHAR(50),

&#x20;   SALARY NUMERIC(10,2),

&#x20;   DEPARTMENT\_NAME VARCHAR(50)

);



CREATE OR REPLACE PROCEDURE Insert\_Employee(

&#x20;   EMP\_ID INT,

&#x20;   EMP\_NAME VARCHAR(50),

&#x20;   SALARY NUMERIC(10,2),

&#x20;   DEPARTMENT\_NAME VARCHAR(50)

)

LANGUAGE plpgsql

AS $$

BEGIN



&#x20;   

&#x20;   IF EMP\_ID % 2 = 0 THEN



&#x20;       RAISE EXCEPTION

&#x20;       'Even EMP\_ID is not allowed. Only odd EMP\_ID is allowed.';



&#x20;   ELSE



&#x20;       

&#x20;       INSERT INTO Employee

&#x20;       VALUES (EMP\_ID, EMP\_NAME, SALARY, DEPARTMENT\_NAME);



&#x20;       

&#x20;       RAISE NOTICE

&#x20;       'Employee inserted successfully.';



&#x20;   END IF;



END;

$$;



CALL Insert\_Employee(

&#x20;   101,

&#x20;   'Rahul',

&#x20;   50000,

&#x20;   'IT'

);

CALL Insert\_Employee(

&#x20;   103,

&#x20;   'Priya',

&#x20;   55000,

&#x20;   'Finance'

);

CALL Insert\_Employee(

&#x20;   102,

&#x20;   'Aman',

&#x20;   60000,

&#x20;   'HR'

);

SELECT \* FROM Employee;

