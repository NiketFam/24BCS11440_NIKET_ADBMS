# &#x09;	    EXPERIMENT-7.1





CREATE TABLE staff (

&#x20;   name VARCHAR(50),

&#x20;   salary NUMERIC(10,2)

);



INSERT INTO staff VALUES ('Rahul', 90000);

INSERT INTO staff VALUES ('Amit', 85000);

INSERT INTO staff VALUES ('Neha', 80000);

INSERT INTO staff VALUES ('Priya', 75000);

INSERT INTO staff VALUES ('Rohit', 70000);

INSERT INTO staff VALUES ('Ankit', 65000);

INSERT INTO staff VALUES ('Pooja', 60000);



SELECT \* FROM staff;





DO $$

DECLARE

&#x09;EMP\_CURSOR CURSOR FOR

&#x09;	SELECT NAME,SALARY

&#x09;	FROM STAFF

&#x09;	ORDER BY SALARY DESC

&#x09;	LIMIT 5;



&#x09;	V\_NAME STAFF.NAME%TYPE;

&#x09;	V\_SALARY STAFF.SALARY%TYPE;

BEGIN

&#x09;OPEN EMP\_CURSOR;



&#x09;LOOP 

&#x09;	FETCH EMP\_CURSOR INTO V\_NAME,V\_SALARY;

&#x09;	EXIT WHEN NOT FOUND;

&#x09;	RAISE NOTICE 'NAME: %, SALARY: % ',V\_NAME,V\_SALARY;

&#x09;END LOOP;

&#x09;CLOSE EMP\_CURSOR;

END $$;

&#x20;

