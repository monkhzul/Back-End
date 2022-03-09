use classicmodels;
						# Function
set global log_bin_trust_function_creators = 1;

delimiter //
-- create function CalcInCome (starting_value int)
-- returns int
-- begin 
-- declare income int;
-- set income = 0;
-- label1: while income <= 3000 do
-- set income = income + starting_value;
-- end while label1;
-- return income;
-- end //

-- select CalcInCome(2000);

-- create function price_fix(price_original decimal(14,6), percentage decimal(7,3))
-- returns decimal(14,6) deterministic
-- begin 
-- declare new_price decimal(14,6);
-- if price_original is null then
-- return null;
-- end if;
-- if percentage is null then
-- return null;
-- end if;
-- if percentage not between -100 and 100 then
-- return null;
-- end if;
-- set new_price = price_original + ((price_original * percentage) / 100.0);
-- set new_price = round(new_price, 2);
-- return new_price;
-- end //

-- select price_fix(8,5);


-- create function average(a int, b int, c int)
-- returns int
-- begin
-- declare avg int;
-- set avg = (a+b+c)/3;
-- return avg;
-- end//

-- select average(4,5,6);

create function circum(rad int)
returns decimal(10,5)
begin
declare circ decimal(10,5);
set res = 2*3.14*rad;
return res;
end//

select circum(10);



