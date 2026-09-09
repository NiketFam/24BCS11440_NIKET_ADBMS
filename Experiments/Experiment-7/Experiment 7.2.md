# &#x09;	     EXPERIMENT-7.2



CREATE TABLE Orders (

&#x20;   Order\_ID INT,

&#x20;   Customer\_Name VARCHAR(50),

&#x20;   Amount NUMERIC(10,2)

);



INSERT INTO Orders VALUES

(1, 'Rahul', 5000),

(2, 'Aman', 15000),

(3, 'Priya', 8000),

(4, 'Ankit', 25000),

(5, 'Rohit', 12000);



DO $$

DECLARE

&#x09;ORDER\_RECORD RECORD;

&#x09;ORDER\_CURSOR CURSOR FOR

&#x09;	SELECT AMOUNT 

&#x09;	FROM ORDERS;

BEGIN

&#x09;FOR ORDER\_RECORD IN ORDER\_CURSOR LOOP

&#x09;	IF ORDER\_RECORD.AMOUNT>10000 THEN

&#x09;		RAISE NOTICE 'HIGH VALUE';

&#x09;	END IF;

&#x09;END LOOP;

END $$;

