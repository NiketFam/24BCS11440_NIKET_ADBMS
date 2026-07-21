# &#x09;	EXPERIMENT-2.3



QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS06/problems/GSQ76



SUBMISSION LINK:- https://www.codechef.com/viewsolution/1312940119





/\* Write a query to find the list of fruits available in the supermarket.

(f\_name column has the name of the fruits and inv\_name has the name of inventories, you are suppose to output the name of the fruits.)\*/



select f\_name  from fruit

INTERSECT

select inv\_name from inventory;

