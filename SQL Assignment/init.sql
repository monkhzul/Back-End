CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sku` char(6) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL COMMENT 'in cents',
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `sku` (`sku` ASC) VISIBLE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `sales_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `items` text COLLATE utf8_unicode_ci NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `product` (`id`, `name`, `sku`, `price`, `quantity`) VALUES
(1, 'Toilet paper 10 pack', 'TP0001', 750, 500),
(2, 'Rice 1 Kg', 'RI0002', 140, 500),
(3, 'Pasta 500 g', 'PA0003', 260, 500),
(4, 'Chicken Breast 1 Kg', 'CB0004', 1200, 500),
(5, 'Hand Sanitizer', 'HS0005', 300, 500);

-- show databases;
-- create database init;
-- use init;

start transaction;
set autocommit = 0;

INSERT INTO `product` (`id`, `name`, `sku`, `price`, `quantity`) VALUES
(7, 'Terminal pack', 'IU0001', 800, 600);

UPDATE `product`
SET quantity = quantity + 20
WHERE sku = 'RI0002';

UPDATE `product`
SET quantity = quantity - 5
WHERE sku = 'PA0003';

SELECT * FROM product;
ROLLBACK;


select @orderNumber:=MAX(orderNumber)+1 FROM orders;
insert into orders(orderNumber, orderDate, requiredDate, shippedDate, status, customerNumber)
values (@orderNumber, '2022-05-31', '2022-06-10', '2022-06-11','IN PROCESS', 145 );

insert into orderdetails(orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber) 
values (@orderNumber, 'S18_1749', '30', '136','1'),
(@orderNumber, 'S18_2248', '50', '55.09','2');


set session transaction isolation level read committed;

select sku from product for update;

select * from product where sku = 'RI0002' OR sku = 'CB0004';

select @total := sum(price * quantity) as multiply from product where sku = 'RI0002' OR sku = 'CB0004';



delimiter $$
create procedure insert_data (cus_id INT, d_id INT, datum VARCHAR(255), status VARCHAR(255), total INT)
begin
INSERT INTO orders(customer_id, deliverman_id, ordered_date, order_status, total_fee)
values (cus_id, d_id, datum, status, total);
set @id=LAST_INSERT_ID();
insert into order_detail(food_id, food_price, order_id)      
values (1, 5600, @id);                                                                                
end$$

call insert_data(1, 3, '2022-03-02', 'in-progress', 9600);
select * from orders;


