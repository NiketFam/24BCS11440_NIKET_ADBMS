# &#x09;	EXPERIMENT 4.3 



#### QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS01/problems/ASQL01F?tab=statement



#### SUBMISSION LINK:- https://www.codechef.com/viewsolution/1321431201



SELECT E.employee\_name AS EMPLOYEE, E1.employee\_name AS MANAGER 

FROM employees AS E

LEFT JOIN employees AS E1

on E.MANAGER\_ID=E1.EMPLOYEE\_ID;





SELECT C1.customer\_name,P1.product\_name FROM customers AS C1

CROSS JOIN products AS P1;

