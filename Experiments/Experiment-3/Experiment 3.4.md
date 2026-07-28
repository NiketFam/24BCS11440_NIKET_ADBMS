# &#x09;	EXPERIMENT-3.4



QUESTION LINK:-https://leetcode.com/problems/employee-bonus/description/

SUBMISSION LINK:- https://leetcode.com/problems/employee-bonus/submissions/2084587911/



SELECT E1.name,B1.bonus FROM EMPLOYEE AS E1

LEFT JOIN bonus AS B1

ON E1.EMPID=B1.EMPID

WHERE B1.BONUS IS NULL

OR B1.BONUS<1000;

