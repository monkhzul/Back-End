CREATE DATABASE sql_assignment;
show databases;
use sql_assignment;

CREATE TABLE users(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
name varchar(255),
last_active timestamp
);
INSERT INTO users(name, last_active)
VALUES ('Ariunaa', current_timestamp());
SELECT * FROM users;


CREATE TABLE user_books(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id int,
book_id int, 
checkout_date timestamp,
return_date timestamp
);
INSERT INTO user_books(user_id, book_id, checkout_date, return_date)
VALUES ('7', '9', '2022-02-15', '2022-03-05');
SELECT * FROM user_books;


CREATE TABLE books(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
title varchar(255),
author varchar(255),
published_date date,
isbn varchar(255) 
);
INSERT INTO books(title, author, published_date, isbn)
VALUES ('Programchlaliin arga zui', 'Munkhzul Enkhbayar', '2022-02-01', '97890759826735');
SELECT * FROM books;


CREATE TABLE addresses(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id int,
city text,
street text
);
INSERT INTO addresses(user_id, city, street)
VALUES ('3', 'Ulaanbaatar', 'Enkh-Taivnii urgun chuluu');
SELECT * FROM addresses;


CREATE TABLE reviews(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id int, 
book_id int,
review_comment text,
created_date timestamp
);
INSERT INTO reviews(user_id, book_id, review_comment, created_date)
VALUES ('9', '4', 'among the best … refreshing in its specificity … relentlessly logical … fresh and forceful … an important contribution', current_timestamp());
SELECT * FROM reviews;

show tables;

ALTER TABLE addresses
ADD CONSTRAINT fk_userId_to_addresses
FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE user_books
ADD CONSTRAINT fk_userBooks_userID
FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE user_books
ADD CONSTRAINT fk_userBooks_bookID
FOREIGN KEY (book_id)
REFERENCES books(id);

ALTER TABLE reviews
ADD CONSTRAINT fk_reviews_userID
FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE reviews
ADD CONSTRAINT fk_reviews_bookID
FOREIGN KEY (book_id)
REFERENCES books(id);

ALTER TABLE books
ADD UNIQUE (isbn);

                              /* TASK SQL*/
/* 1 */
SELECT * FROM books WHERE published_date < '2010-01-01';
/* 2 */
SELECT count(*) AS Total FROM books WHERE published_date < '2010-01-01';
/* 3 */
ALTER TABLE users
ADD age int AFTER name;
/* 4 */
SELECT user_id FROM addresses WHERE city = 'Ulaanbaatar';
/* 5 */
SELECT user_id FROM user_books WHERE return_date > current_timestamp();
/* 6 */
SELECT user_id FROM user_books ORDER BY checkout_date DESC LIMIT 1;
/* 7 */
SELECT review_comment, book_id FROM reviews WHERE created_date >= '2022-02-01' AND created_date <= '2022-03-01';
/* 8 */
SELECT * FROM books WHERE published_date >= '2022-01-01' AND published_date <= '2022-12-31';
/* 9 */
SELECT * FROM books WHERE title LIKE "%programchlal%";
/* 10 */
SELECT user_id FROM user_books WHERE month(return_date) AND date(return_date) + 7 <> return_date ;
/* 11 */
SELECT * FROM books WHERE year(published_date) + 10 < year(current_date());


-- Join orsnii daraa bichigdeh query

-- (1) nomoo butsaaj ogoogui baigaa hereglegchdiig listlej haruul
SELECT name , return_date FROM user_books INNER JOIN users ON  users.id=user_books.user_id WHERE user_books.return_date > current_date();
-- (2) Ulaanbaatart baidag hayagtai hereglegchiin medeelliig garga
SELECT * FROM users INNER JOIN addresses ON users.id=addresses.user_id WHERE addresses.city="Ulaanbaatar";
-- (3) hayaggui hereglegchiin medeelliig garga
SELECT * FROM users LEFT JOIN addresses ON users.id=addresses.user_id WHERE addresses.city IS NULL;
-- (4) hamgiin ih nomiin review bichsen hereglegchiig ol
SELECT name , COUNT(name) AS "Review" FROM users INNER JOIN reviews ON users.id=reviews.user_id WHERE users.id=reviews.user_id GROUP BY name ORDER BY COUNT(name) DESC;
-- (5) review bicheegui gehdee nom avsan hereglegchidiig garga
SELECT name FROM users LEFT JOIN user_books ON users.id=user_books.user_id LEFT JOIN reviews ON users.id=reviews.user_id WHERE reviews.user_id IS NULL;
-- (6) hereglegch zeelsen baigaa nomiin medeelel garga
SELECT name , return_date FROM user_books INNER JOIN users ON user_books.user_id=users.id WHERE user_books.return_date > current_date();
-- (7) hen ch avj baigaagui nomiin medeelliig garga
SELECT * FROM user_books RIGHT JOIN books ON user_books.user_id=books.id WHERE user_books.user_id IS NULL;
-- (8) hamgiin olon udaa zahialagdsan nomiin medeelel garga
SELECT user_books.book_id, COUNT(user_books.book_id) FROM books LEFT JOIN user_books ON books.id=user_books.book_id GROUP BY book_id ORDER BY COUNT(user_books.book_id) DESC;
-- (9) neg nomiig songoj avaad teriig avsan humuusiin medeelliig garga
SELECT * FROM users INNER JOIN user_books ON users.id=user_books.user_id INNER JOIN books ON user_books.book_id=books.id WHERE book_id=1;
-- (10) buh nomiig heden udaa avch baisan toog garga, erembeleh
SELECT COUNT(book_id) AS most_used_book, book_id, title FROM user_books LEFT JOIN books ON book_id=books.id GROUP BY book_id ORDER BY COUNT(book_id) DESC;
-- (11) hamgiin ih nom zahialdag hereglegchiig ol
SELECT COUNT(user_id) AS "BEST USER" , user_id FROM user_books INNER JOIN users ON user_books.user_id=users.id GROUP BY user_id ORDER BY COUNT(user_id) DESC;
-- (12) review bichigdeegui nomiin medeelel garga
SELECT * FROM books LEFT JOIN reviews ON books.id=reviews.book_id WHERE review_comment IS NULL; 
-- (13) review bichigdsen nomiin medeelel garga
SELECT title FROM books LEFT JOIN reviews ON books.id=reviews.book_id WHERE review_comment IS NOT NULL GROUP BY title; 
-- (14) Ulaanbaatriin hereglegch heden nom zahialsan baina ve?
SELECT * FROM users LEFT JOIN addresses ON users.id = addresses.user_id	LEFT JOIN user_books ON users.id=user_books.user_id WHERE city='Ulaanbaatar';

-- Car Retail
use classicmodels;
-- (1) San Francisco-giin officed ajildag ajilchidiin medeelliig garga
SELECT * FROM employees WHERE officeCode = (SELECT officeCode FROM offices WHERE officeCode=1);
-- (2) USA d niit heden ajiltan ajillaj baina ve?
SELECT COUNT(*) AS 'USA-d ajildag employees' FROM employees WHERE officeCode IN (SELECT officeCode FROM offices WHERE country='USA');
-- (3) hot bureer ajiltnii toog garga(hamgiin ih ajiltantai hot ali ni ve hamgiin baga ni ali ni ve)
SELECT COUNT(employeeNumber), city FROM employees INNER JOIN offices ON employees.officeCode=offices.officeCode GROUP BY city ORDER BY COUNT(employeeNumber) DESC;
-- (4) Credit limit hamgiin ondor hereglegch hen ve
SELECT customerName , creditLimit FROM customers ORDER BY creditLimit DESC LIMIT 1;
-- (5) NYC-d baidag hamgiin ondor credit limit tei hereglegch hen be
SELECT customerName , creditLimit, city FROM customers WHERE city='NYC' ORDER BY creditLimit DESC LIMIT 1;
-- (6) Хамгийн өндөр худалдан авалттай, хамгийн олон худалдан авалттай хэрэглэгчийн мэдээллийг гарга.
SELECT customerNumber from(
SELECT customerNumber , count(customerNumber) AS count FROM payments GROUP BY customerNumber ORDER BY count DESC LIMIT 1) AS aTable union
SELECT customerNumber from(
SELECT customerNumber, sum(amount) FROM payments GROUP BY customerNumber ORDER BY sum(amount) DESC LIMIT 1) AS bTable;
-- (7) Манай нийт хэрэглэгчийн credit limit-ээс дээш худалдан авалт хийсэн хэрэглэгчдийг гарга.
SELECT*FROM (
SELECT 
COUNT(p.customerNumber) as number, SUM(p.amount) as sum,p.customerNumber,c.creditLimit
FROM payments as p INNER JOIN customers as c ON p.customerNumber = c.customerNumber
GROUP BY customerNumber 
ORDER BY COUNT(customerNumber) 
DESC ) as newTable
WHERE sum >(SELECT MAX(creditLimit)FROM customers);
-- (8) 2003-05-06наас тус оныг дуустал хэдэн төгрөгний орлого хийсэн байна вэ?alter
SELECT SUM(amount) FROM payments WHERE paymentDate BETWEEN "2003-05-06" AND "2003-12-31";
-- (9) 2003-05-06наас тус оныг дуустал худалдан авалт хийсэн хэрэглэгчийн мэдээллийг давхардуулалгүй гарга.
SELECT DISTINCT(p.customerNumber) as number,p.paymentDate, c.customerNumber FROM payments as p INNER JOIN customers as c ON p.customerNumber = c.customerNumber WHERE paymentDate BETWEEN "2003-05-06" AND "2003-12-31";
-- (10)Захиалга бүрэн хийгдээгүй байгаа хэрэглэгчийн мэдээллийг гарга
SELECT * from customers WHERE customerNumber IN (SELECT customerNumber FROM orders WHERE status NOT LIKE ('%Shipped%'));

-- 2nd Car Retail
-- (1) Хүргэлтийн Өдөр нь хүргэх ёстой өдрөөсөө хоцорсон захиалгын мэдээлэл болон хэрэглэгчийн мэдээллийг гарга.
SELECT * FROM orders INNER JOIN customers ON orders.customerNumber =customers.customerNumber  WHERE requiredDate < shippedDate;
-- (2) Хамгийн их захиалга хийсэн хүний мэдээллийг дэлгэрэнгүй гарга.
SELECT COUNT(o.customerNumber), c.customerNumber,c.customerName FROM orders as o INNER JOIN customers as c ON o.customerNumber = c.customerNumber GROUP BY customerNumber ORDER BY COUNT(o.customerNumber) DESC;
-- (3) Хамгийн их захиалсан машины мэдээллийг гарга
SELECT count(o.productCode), p.productCode FROM orderdetails as o left join products as p on o.productCode= p.productcode group by productCode order by 1 desc limit 1;
-- (4) Онгоц хэдэн ширхэг зарагдсан байна вэ?
-- (7) Stock-д байгаа тоо нь 100аас бага байгаа бүтээгдэхүүн захиалагдсан хэдэн тохиолдолд байна вэ?
SELECT count(productCode) from products WHERE productCode IN (SELECT productCode FROM orderdetails WHERE quantityInstock <100);
-- (8) Дундаж үнээс дээш үнэтэй бүтээгдэхүүний дэлгэрэнгүй мэдээллийг гарга
SELECT * FROM products WHERE buyPrice > (SELECT AVG(buyPrice) FROM products);
-- (9) Манайд хамгийн их байгаа бүтээгдэхүүний мэдээллийг гарга
SELECT * FROM products ORDER BY quantityInStock DESC LIMIT 1;
-- (10) Санамсаргүй нэг хэрэглэгч сонгож аваад тухайн хэрэглэгчийн худалдан авалт захиалга төлбөр төлөлтийн мэдээллийг харуулна ууalter








