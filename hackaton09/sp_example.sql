--------------------- STORE PROCEDURE --------------------

-- Un conjunto de instrucciones sql que se guardan en una base de datos, para 
-- ser invocado cuando se le necesite.


select * from products p where category_id = 2

-- como se crea:

create or replace function get_product_by_categoryv8(pid int)
returns table(cat_id smallint, prod_name varchar(40))
as $$
Begin
	return query
	select category_id, product_name from products p where p.category_id = pid;
end;
$$ language plpgsql;


select * from get_product_by_categoryv8(2);