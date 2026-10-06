# &#x09;								  EXPERIMENT-9.2

### 

##### QUESTION:- Implement a Row-Level BEFORE UPDATE Trigger on the Salary\_Hike table that restricts a salary increase tono more than 15% of the :OLD.salary value; if the increase exceeds this limit, the trigger must raise a custom User-Defined Exception  with a specific message.





CODE:- 



CREATE TABLE Salary\_Hike (

&#x20;   employee\_id INT PRIMARY KEY,

&#x20;   employee\_name VARCHAR(50),

&#x20;   salary NUMERIC(10,2)

);



INSERT INTO Salary\_Hike VALUES

(101, 'Rahul', 50000),

(102, 'Aman', 60000),

(103, 'Priya', 40000);



CREATE OR REPLACE FUNCTION check\_salary\_hike()

RETURNS TRIGGER

LANGUAGE plpgsql

AS $$

BEGIN



&#x20;   IF NEW.salary > OLD.salary \* 1.15 THEN



&#x20;       RAISE EXCEPTION

&#x20;       'Salary increase cannot exceed 15%% of the old salary.';



&#x20;   END IF;



&#x20;   RETURN NEW;



END;

$$;



SELECT \* FROM Salary\_Hike;

