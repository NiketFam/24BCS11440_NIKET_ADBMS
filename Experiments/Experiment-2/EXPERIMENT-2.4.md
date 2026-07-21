# &#x09;	EXPERIMENT-2.4



QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS06/problems/GSQ77



SUBMISSION LINK:- https://www.codechef.com/viewsolution/1312942667





/\* Write a query to output the name of the fruits (f\_name) from the table 'fruit' which are not present in the table  inventory(f\_name column has the name of the fruits and inv\_name has the name of the items in inventory). \*/



select f\_name from fruit

EXCEPT

select inv\_name from inventory;

