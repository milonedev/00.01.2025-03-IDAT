




-- Seleccion de data.

select customer_id, * from customers

select * from customer_customer_demo

select * from customer_demographics 

-- Insercion de data.
insert into customer_demographics (customer_type_id,customer_desc)
values (1, 'Food Industry')

insert into customer_customer_demo (customer_id, customer_type_id)
values ('ALFKI', 1)

-- Agrupacion de informacion
select 
	c.customer_id as Id, 
	c.company_name as name, 
	cd.customer_desc as description 
from customers c 
	right join customer_customer_demo ccd 
		on c.customer_id = ccd.customer_id
	right join customer_demographics cd 
		on ccd.customer_type_id = cd.customer_type_id
where c.customer_id in ('ALFKI', 'ANATR', 'ANTON')

-- update
update customer_demographics cd 
set customer_desc = 'Food Industry'
where cd.customer_type_id = '1'

-- delete
delete from customer_demographics 
where customer_type_id = '1'


delete from customer_customer_demo  
where customer_type_id  = '1'
