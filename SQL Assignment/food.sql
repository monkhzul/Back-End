show databases;
use food_delivery;

/* food */
CREATE TABLE food(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
name varchar(255),
price int,
portion int,
discount int,
stock int
);
ALTER TABLE food ADD category_id int;
/* UPDATE food SET category_id=2 WHERE id BETWEEN 7 AND 8; */
UPDATE food SET discount=15 WHERE category_id=1;

INSERT INTO food(name, price, portion, discount, stock)
VALUES ('Zairmag', '5500', '5', '30', '5');
SELECT * FROM food;
/* DELETE FROM food WHERE id=''; */
UPDATE food SET price=3000 WHERE id=6;


/* food category */
CREATE TABLE food_category(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
name varchar(255),
type varchar(255),
color char
);

INSERT INTO food_category(name)
VALUES ('Amttan');
SELECT * FROM food_category;

/* users */
CREATE TABLE users(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
name varchar(255),
email varchar(255),
phone int,
address varchar(255),
role int
);

INSERT INTO users(name, email, phone, address, role)
VALUES ('Bayraa', 'bayr@yahoo.com', '12983476', 'Mongolia, UB', '3');
SELECT * FROM users;

/* orders */
CREATE TABLE orders(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
customer_id int NOT NULL,
deliverman_id int NOT NULL,
ordered_date date,
order_status varchar(255),
total_fee int
);

INSERT INTO orders(customer_id, deliverman_id, ordered_date, order_status, total_fee)
VALUES (2, 2, curdate(), 'ordering', 75000);
SELECT * FROM orders;

/* order_detail */
CREATE TABLE order_detail(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
food_id int NOT NULL,
food_price int,
order_id int NOT NULL
);

INSERT INTO order_detail(food_id, food_price, order_id)
VALUES (4, 1500, 1);
SELECT * FROM order_detail;


show tables;


SELECT * FROM food WHERE name='Buuz';
SELECT name FROM food WHERE price=1500;
SELECT name, price, discount FROM food WHERE discount<20;
SELECT * FROM food WHERE name LIKE "%salad%";
SELECT * FROM food_category WHERE name='Salad ba Zuush' and name='Amttan';

SELECT * FROM food ORDER BY price DESC LIMIT 1;
SELECT * FROM food ORDER BY price ASC LIMIT 1;
SELECT * FROM food WHERE category_id = 1 ORDER BY price ASC LIMIT 1;
SELECT * FROM food WHERE category_id = 1 ORDER BY price DESC LIMIT 1;

SELECT category_id FROM food GROUP BY category_id;
SELECT category_id, count(category_id) FROM food GROUP BY category_id;
SELECT category_id, count(category_id) AS Number FROM food GROUP BY category_id;

SELECT category_id, count(category_id) AS Number FROM food GROUP BY category_id HAVING count(category_id) > 1;


