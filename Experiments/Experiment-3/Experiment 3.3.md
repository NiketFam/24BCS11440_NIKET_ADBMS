# &#x09;			EXPERIMENT 3.3

QUESTION LINK:-https://leetcode.com/problems/customers-who-never-order/

SUBMISSION LINK:- https://leetcode.com/problems/customers-who-never-order/submissions/2076637579/



SELECT NAME AS Customers FROM CUSTOMERS

WHERE ID NOT IN(

&#x20;   SELECT CUSTOMERID FROM ORDERS

)

