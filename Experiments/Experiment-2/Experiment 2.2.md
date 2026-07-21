# &#x09;	EXPERIMENT-2.2



QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS07/problems/GSQ78A



SUBMISSION LINK:- https://www.codechef.com/viewsolution/1312935960





/\* Write a query to output a single table with the names of employees in both  the table 'employee' and 'pt\_employee'.

Employee names are added on the field emp\_name in both the tables.

Note: Do not remove the duplicate names while combining both the tables. \*/



select emp\_name from employee 

union all

select emp\_name from pt\_employee;





