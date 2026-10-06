# &#x09;								   EXPERIMENT-9.2



&#x09;					      TRIGGER







CREATE TABLE employee2 (

&#x20;   emp\_id INT PRIMARY KEY,

&#x20;   emp\_name VARCHAR(100),

&#x20;   per\_hour\_salary NUMERIC(10,2),

&#x20;   working\_hours NUMERIC(10,2),

&#x20;   payable\_amount NUMERIC(10,2)

);



INSERT INTO employee2

(emp\_id, emp\_name, per\_hour\_salary, working\_hours, payable\_amount)

VALUES

(101, 'Amit', 500, 8, 0),

(102, 'Rahul', 600, 7, 0),

(103, 'Priya', 550, 9, 0);







SELECT \* FROM EMPLOYEE2



TRUNCATE TABLE employee2;

\-- TRUNCATE TABLE EMPLOYEE2





CREATE OR REPLACE FUNCTION CAL\_PAYABLE() RETURNS TRIGGER

AS

$$

BEGIN

NEW.payable\_amount=NEW.working\_hours\*NEW.per\_hour\_salary;

IF NEW.payable\_amount>25000 THEN

RAISE EXCEPTION 'PAYABLE AMOUNT GREATER THAN 2500 NOT ALLOWED';

END IF;

RETURN NEW;

END;

$$ LANGUAGE PLPGSQL





&#x09;CREATE  TRIGGER CAL\_PAYABLEAMT

&#x09;BEFORE INSERT OR UPDATE

&#x09;ON EMPLOYEE2

&#x09;FOR EACH ROW

&#x09;EXECUTE FUNCTION CAL\_PAYABLE();

&#x09;







CREATE OR REPLACE FUNCTION PRINT\_MSG() RETURNS TRIGGER

AS

$$

BEGIN



&#x09;RAISE NOTICE 'ROWS UPDATED SUCCESSFULLY';



RETURN NULL;

END;

$$ LANGUAGE PLPGSQL

