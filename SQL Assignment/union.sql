show databases;
use food_delivery;
SELECT id, name FROM food UNION ALL
SELECT id, name FROM users;


use classicmodels;

SELECT lastName, firstName
FROM employees
WHERE officeCode IN (SELECT officeCode FROM offices WHERE country = 'USA');

SELECT customerNumber, checkNumber, amount 
FROM payments 
WHERE amount = (SELECT MAX(amount) FROM payments);

SELECT customerNumber, checkNumber, amount 
FROM payments 
WHERE amount > (SELECT AVG(amount) FROM payments);

SELECT * 
FROM customers
WHERE customerNumber = 
(SELECT customerNumber
FROM payments
WHERE amount = (SELECT MAX(amount) FROM payments));

SELECT customerNumber, checkNumber, amount
FROM payments
WHERE amount > (SELECT AVG(amount) FROM payments);

SELECT customerName
FROM customers
WHERE customerNumber NOT IN (SELECT DISTINCT customerNumber FROM orders);

SELECT MAX(items), MIN(items), FLOOR(AVG(items))
FROM (SELECT orderNUmber, COUNT(orderNumber) AS items FROM orderdetails GROUP BY orderNumber) AS lineitems;

SELECT productName, buyprice
FROM products p1
WHERE buyprice > (SELECT AVG(buyprice) 
				  FROM products
                  WHERE productline = p1.productline);
                  







use indexData;

select count(*) from data;
select * from data where name like '%f%';
# 0.0014 sec / 0.0012 sec

ALTER TABLE data ADD index data_idx (name);
				
