show databases;
use classicmodels;
						#	IN OUT INOUT
-- delimiter //
-- CREATE PROCEDURE GetCustomerLevel(IN pCustomerNumber INT, OUT pCustomerLevel VARCHAR(20))
-- BEGIN
-- DECLARE credit DECIMAL DEFAULT 0;
-- SELECT creditLimit INTO credit FROM customers WHERE customerNumber = pCustomerNumber;
-- IF credit > 5000 THEN
-- SET pCustomerLevel = 'PLATINUM';
-- ELSE
-- SET pCustomerLevel = 'SILVER';
-- END IF;
-- END //

-- SET @customerLevel = '';

-- CALL GetCustomerLevel(5000, @customerLevel);
-- SELECT @customerLevel;

						# CASE
-- DELIMITER //
-- CREATE PROCEDURE p()
-- BEGIN
-- 	DECLARE v INT DEFAULT 1;
--     CASE v
-- 		WHEN 1 THEN SELECT v;
--         WHEN 3 THEN SELECT 0;
-- ELSE
-- BEGIN 
-- 		END;
-- 	END CASE;
-- END//

-- CALL p();

						# LOOP
-- delimiter //
-- CREATE PROCEDURE doiterable(p1 INT)
-- begin
-- 	label1: LOOP
-- 		SET p1 = p1 + 1;
--         IF p1 < 10 THEN 
--         ITERATE label1;
-- 	END IF;
--     LEAVE label1;
-- END LOOP label1;
-- SET @x = p1;
-- END//

-- CALL doiterable(5);
-- SELECT @x;

						 # DO WHILE
-- delimiter //
-- create procedure dowhile()
-- begin 
-- 	declare v1 int default 5;
--     while v1 > 0 do
-- 		set v1 = v1 - 1;
-- 	end while;
--     set @b1 = v1;
-- end//

-- call dowhile();
-- select @b1;



 #.  ASSIGNMENT
 # 2
--  delimiter //
--  create procedure product()
--  begin
--  select productCode, productName, quantityInStock, buyPrice from products;
--  end //

-- call product();

# 3
-- delimiter //
-- create procedure orderNumber(IN xOrderNumber INT)
-- begin
-- select * from orders where orderNumber = xOrderNumber;
-- end // 

-- call orderNumber(10120);

# 4
-- delimiter //
-- create procedure average(OUT avgPrice int)
-- begin
-- select AVG(buyPrice) INTO avgPrice from products;
-- end // 

-- set @avg = 0;

-- call average(@avg);
-- select @avg;

# 5
-- delimiter //
-- create procedure increment(INOUT count INT, IN i INT)
-- begin
-- SET count = count + i;
-- end //

-- set @counter = 5;
-- call increment(@counter,6);
-- select @counter;

# 6
-- delimiter //
-- create procedure calculated(INOUT counts INT)
-- begin
-- select COUNT(buyPrice) INTO counts FROM products WHERE buyPrice < (SELECT AVG(buyPrice) FROM products);
-- end //

-- set @num = 0;
-- call calculated(@num);
-- select @num;
# 7
-- delimiter //

-- create procedure seven(INOUT code VARCHAR(10))
-- begin
-- DECLARE avgPrice DECIMAL DEFAULT 0;
-- DECLARE codeP DECIMAL DEFAULT 0;
-- select AVG(buyPrice) INTO avgPrice from products;
-- select buyPrice INTO codeP from products where productCode = code;
-- IF codeP > avgPrice THEN
-- SET code = 'expensive';
-- ELSE
-- SET code = 'cheap';
-- END IF;
-- end //

-- set @kod = 'S18_2249';
-- call seven(@kod);
-- select @kod;

# 8
-- select count(*) from orderdetails where productCode = 'S18_1749';

-- DELIMITER //
-- CREATE PROCEDURE tu(IN pCode VARCHAR(10), OUT result VARCHAR(20))
-- BEGIN
-- 	DECLARE counts DECIMAL DEFAULT 0;
--     select count(*) into counts from orderdetails where productCode = pCode;
--     CASE counts
-- 		WHEN 0 THEN SET result = 'NO PRODUCT';
-- 		WHEN 1 THEN SET result = '1 PRODUCT';
-- 	ELSE
--     BEGIN
-- 		SET result = 'More Than Product';
-- 		END;
-- 	END CASE;
-- END//

-- set @kod = 'S18_2249';
-- set @result = '';
-- CALL tu(@kod, @result);
-- select @result;

# 9 

-- delimiter //
-- CREATE PROCEDURE looping(p1 INT)
-- begin
-- DECLARE counter int;
-- DECLARE result VARCHAR(255);
--   SET counter = 0;
-- 	 SET result = '';
-- 	label1: LOOP
--         IF counter >= p1 THEN 
-- 			LEAVE label1;
-- 		END IF;
-- 	SET counter = counter + 1;
--     IF (counter mod 1) THEN
-- 		ITERATE label1;
-- 	ELSE
-- 		SET result = CONCAT(result,counter,',');
-- 	END IF;
-- END LOOP;
-- SELECT result;
-- END//
-- -- drop procedure looping;
-- call looping(10);

# 10
-- delimiter //
-- create procedure fibo(in num int, out res int)
-- begin

-- end//








