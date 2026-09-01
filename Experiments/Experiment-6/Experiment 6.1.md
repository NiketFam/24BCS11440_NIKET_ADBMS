# &#x09;		EXPERIMENT 6.1





CREATE TABLE Products (

&#x20;   ProductID INT PRIMARY KEY,

&#x20;   ProductName VARCHAR(50),

&#x20;   Category VARCHAR(50)

);



INSERT INTO Products (ProductID, ProductName, Category)

VALUES (1, 'Laptop', 'Electronics');



INSERT INTO Products (ProductID, ProductName, Category)

VALUES (2, 'Mouse', 'Electronics');



INSERT INTO Products (ProductID, ProductName, Category)

VALUES (3, 'Chair', 'Furniture');



INSERT INTO Products (ProductID, ProductName, Category)

VALUES (4, 'Keyboard', 'Electronics');



INSERT INTO Products (ProductID, ProductName, Category)

VALUES (5, 'Table', 'Furniture');





CREATE TABLE Order\_Details (

&#x20;   OrderID INT,

&#x20;   ProductID INT,

&#x20;   Quantity INT

);



INSERT INTO Order\_Details (OrderID, ProductID, Quantity)

VALUES (101, 1, 2);



INSERT INTO Order\_Details (OrderID, ProductID, Quantity)

VALUES (102, 3, 1);



INSERT INTO Order\_Details (OrderID, ProductID, Quantity)

VALUES (103, 1, 1);



\--COMPLEX VIEW



CREATE VIEW UNSOLD\_ITEM AS

SELECT ProductName,Category

FROM Products

WHERE ProductID NOT IN(

&#x09;SELECT ProductID 

&#x09;FROM Order\_Details

);



SELECT \* FROM Unsold\_Item;



