# &#x09;		EXPERIMENT-10.2



QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS04/problems/GSQ74?tab=statement



SUBMISSION LINK:- https://www.codechef.com/viewsolution/1377549698



CODE:-

SELECT f\_name, f\_cost, f\_type

FROM food

WHERE f\_id IN (

&#x20; SELECT f\_id

&#x20; FROM ratings

&#x20; GROUP BY f\_id

&#x20; HAVING AVG(f\_rating) >= 4

);

