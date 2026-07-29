# &#x09;	EXPERIMENT 4.1



#### QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS01/problems/ASQL01E?tab=statement



#### SUBMISSION LINK:- https://www.codechef.com/viewsolution/1321381082



SELECT C1.CUSTOMER\_NAME,O1.\* FROM orders AS O1

INNER JOIN customers AS C1

ON C1.CUSTOMER\_ID=O1.CUSTOMER\_ID;



SELECT P1.product\_name,C2.category\_name FROM products AS P1

FULL OUTER JOIN categories AS C2

ON P1.CATEGORY\_ID=C2.CATEGORY\_ID;



SELECT C3.category\_name,P1.product\_name,P1.PRICE FROM products AS P1

RIGHT JOIN categories AS C3

ON P1.CATEGORY\_ID=C3.CATEGORY\_ID;

