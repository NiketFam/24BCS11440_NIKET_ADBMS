# &#x09;	  EXPERIMENT 4.5



#### QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS01/problems/ASQL01C

#### 

#### SUBMISSION LINK:- https://www.codechef.com/viewsolution/1329091157



SELECT S1.ST\_ID, S1.ST\_NAME,S1.Department,S2.st\_id,S2.St\_Name,S2.Department

FROM Student as S1

join Student as S2

on S1.ST\_ID!=S2.ST\_ID and S1.Department=S2.Department;



SELECT S1.ST\_ID, S1.ST\_NAME,S1.Course\_id

FROM Student as S1

join Student as S2

on S1.ST\_ID!=S2.ST\_ID and S1.Course\_id=S2.Course\_id

order by S1.Course\_id;

