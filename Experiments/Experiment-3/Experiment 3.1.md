# &#x09;			EXPERIMENT 3.1

# 

#### QUESTION LINK:- https://www.codechef.com/learn/course/sql-intermediate/SQ00BS08/problems/GSQ82

#### 

#### SUBMISSION LINK:- https://www.codechef.com/viewsolution/1313611528





select department,sum(case when marks>80 then 1 else 0 end) as Dept\_HighScore\_count

from student

group by department;





