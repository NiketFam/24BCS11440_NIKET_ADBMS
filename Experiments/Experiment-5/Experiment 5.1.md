# &#x09;	EXPERIMENT 5.1



#### QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS09/problems/GSQ85D?tab=statement

#### 

#### SUBMISSION LINK:- https://www.codechef.com/viewsolution/1328274335



SELECT ROUND(100\*(SUM(CASE WHEN Cuisine="American" THEN price ELSE 0 END))/(SUM(price)),2) AS American\_Revenue

FROM orders;



