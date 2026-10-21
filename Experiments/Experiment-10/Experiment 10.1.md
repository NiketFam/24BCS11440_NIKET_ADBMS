# &#x09;		EXPERIMENT-10.1



QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS04/problems/GSQ71



SUBMISSION LINK:- https://www.codechef.com/viewsolution/1377548107



CODE:- 

SELECT f\_name,f\_cost,f\_type FROM FOOD

WHERE f\_cost>(SELECT AVG(f\_cost) FROM FOOD);



