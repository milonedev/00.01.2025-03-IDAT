
-- 1.  Seleccionar los clientes que viven en el país de "usa"

        Select * from Customers where country = 'USA';

-- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
	
        select * from customers where city  = 'Berlin';
        
-- 3.  Seleccionar los empleados con código 3,5 y 8
        
        select * from employees e where e.employee_id in (3, 5, 8);

-- 4.  Seleccionar los productos que tienen stock mayor que 
--     cero y son del proveedor 1,3 y 5

        select * from products p where p.units_in_stock > 0 and supplier_id in (1, 3, 5);

-- 5.  Seleccionar los productos con precio mayor o igual a 20 y 
--     menor o igual a 90

        select * from products p where unit_price >= 20 and unit_price <= 90;
        select * from products p where unit_price  between 20 and 90;
        
-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997

        select * from orders o where o.order_date between '1997-01-01' and '1997-07-15';
        
-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a 
--     los empleados con códigos 1 ,3 ,4 ,8
		
        select * from orders o where extract(year from order_date) = 1997
        						and employee_id in (1, 3, 4, 8);
        
-- 8.  Mostrar las ordenes hechas en el año 1996
	
        select * from orders o where extract(year from order_date) = 1996;
        
-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
		
        select * from orders o where extract(year from order_date) = 1997
        and extract(month from order_date) = 4;
        
-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998

        select * from orders o where extract(year from order_date) = 1997
        and extract(day from order_date) = 1;
        
-- 11. Mostrar todos los clientes que no tienen fax
		
        select * from customers c where fax is null;
        
-- 12. Mostrar todos los clientes que tienen fax
        
        select * from customers c where fax is not null;

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre 
--     de la categoría a la que pertenece.
	
        select 
        	p.product_name
        	, p.unit_price
        	, p.units_in_stock
        	, c.category_name 
        from products p 
	        inner join categories c 
	        	on c.category_id = p.category_id;
        	
-- 14. Mostrar el nombre del producto, el precio producto, el 
--     código del proveedor y el nombre de la compañía proveedora.

        select 
        	p.product_name
        	, p.unit_price
        	, p.units_in_stock
        	, s.company_name
        from products p 
	        inner join suppliers s
	        	on s.supplier_id = p.supplier_id;
        
-- 15. Mostrar el número de orden, el código del producto, el precio, 
-- 	   la cantidad y el total pagado por producto.

        select 
        	o.order_id
        	, p.product_id
        	, p.unit_price
        	, p.units_in_stock 
        from orders o
        	join order_details od
        		on o.order_id = od.order_id 
        	join products p 
        		on od.product_id = p.product_id;
        
-- 16. Mostrar el número de la orden, fecha, código del producto, 
--     precio, código del empleado y su nombre completo.
	
        select 
        	o.order_id
        	, o.order_date
        	, p.product_id
        	, p.unit_price
        	, e.employee_id
        	, e.first_name || ' ' || e.last_name as name
        from orders o
        	join order_details od
        		on o.order_id = od.order_id 
        	join products p 
        		on od.product_id = p.product_id
            join employees e
        		on e.employee_id = o.employee_id;
        
-- 17. Mostrar los 10 productos con menor stock
	
        select * from products p order by p.units_in_stock asc limit 10;
        
-- 18. Mostrar los 10 productos con mayor stock

        select * from products p order by p.units_in_stock desc limit 10;
                
-- 19. Mostrar los 10 productos con menor precio

        select * from products p order by p.unit_price asc limit 10;
                
-- 20. Mostrar los 10 productos con mayor precio

		select * from products p order by p.unit_price desc limit 10;
               
-- 21. Mostrar los 10 productos más baratos

		select * from products p order by p.unit_price asc limit 10;
         
-- 22. Mostrar los 10 productos más caros

		select * from products p order by p.unit_price desc limit 10;
		
-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania

		select * from customers c order by company_name asc;
		
-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con 
--     la letra B y pertenezcan a UK ,ordenar por nombre de la compania
	
		select * from customers c where c.company_name like 'B%' and c.country = 'UK';
		
-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5
--     ,ordenar por categoria
	
		select * from products p where p.category_id in (1, 3, 5);
		
-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200

		select * from products p where p.unit_price between 50 and 200;
		
-- 27. Visualizar el nombre y el id de la compania del cliente,
--     fecha,precio unitario y producto de la orden
		
		select 
			c.company_name
			, c.customer_id
			, o.order_date
			, p.unit_price
			, p.product_name  
		from orders o 
			inner join customers c
				on o.customer_id = c.customer_id 
			inner join order_details od 
				on o.order_id = od.order_id
			inner join products p
				on od.product_id = p.product_id;
			
-- 28. Visualizar el nombre de la categoria y el numero de 
--     productos que hay por cada categoria.

		select 
			c.category_name
			, count(p.product_id) as cantidad 
		from categories c 
			join products p 
				on c.category_id = p.category_id
			group by c.category_name;
			
-- 29. Seleccionar los 5 productos mas vendidos

		select 
			p.product_name
			, sum(od.quantity) as total
		from order_details od 
			join products p 
				on p.product_id = od.product_id
			group by p.product_name
			order by total desc 
			limit 5;
			
-- 30. Seleccionar los jefes de los empleados
		
		select distinct e2.employee_id, e2.first_name, e2.last_name from employees e1 
		join employees e2 
			on e1.reports_to = e2.employee_id;
			
-- 31. Obtener todos los productos cuyo nombre comienzan 
--     con M y tienen un precio comprendido entre 28 y 129

		select 
			* 
		from products p 
			where p.product_name like 'M%' 
				  and unit_price between 28 and 129;
		
-- 32. Obtener todos los clientes del Pais de USA,Francia y UK

		select * from customers c where c.country in ('USA', 'France', 'UK');
		
-- 33. Obtener todos los productos descontinuados o con stock cero.
		
		select * from products p where units_in_stock = 0 or discontinued = 1;
		
-- 34. Obtener todas las ordenes hechas por el empleado King Robert

		select o.* from orders o 
		join employees e 
			on o.employee_id = e.employee_id
		where e.last_name = 'King' and e.first_name = 'Robert';
		
-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
		
		select * from orders o 
		join customers c 
			on o.customer_id = c.customer_id
		where c.company_name = 'Que Delícia';
		
-- 36. Obtener todas las ordenes hechas por el empleado King
--     Robert,Davolio Nancy y Fuller Andrew

		select o.* from orders o 
		join employees e 
			on o.employee_id = e.employee_id
		where (e.last_name = 'King' and e.first_name = 'Robert')
			or (e.last_name = 'Davolio' and e.first_name = 'Nancy')
			or (e.last_name = 'Fuller' and e.first_name = 'Andrew')
		
-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden
--     10257

		select 
			p.product_id
			, p.product_name
			, p.unit_price
			, p.units_in_stock 
		from orders o
			join order_details od 
				on o.order_id = od.order_id 
			join products p 
				on od.product_id = p.product_id
			where o.order_id = '10257';
		
-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes 
--     hechas desde 1997 hasta la fecha de hoy.
	
		select 
			p.product_id
			, p.product_name
			, p.unit_price
			, p.units_in_stock 
		from orders o
			join order_details od 
				on o.order_id = od.order_id 
			join products p 
				on od.product_id = p.product_id
			where extract(year from o.order_date) between '1997' and '2025';
		
-- 39. Calcular los 15 productos mas caros
		
		select * from products p order by p.unit_price desc limit 15;
		
-- 40. Calcular los 5 productos mas baratos
	
		select * from products p order by p.unit_price asc limit 5;
		
-- 41. Obtener el nombre de todas las categorias y los nombres de sus
-- productos,precio y stock.

		select 
			c.category_name
			, p.product_name
			, p.unit_price
			, p.units_in_stock 
		from products p 
			join categories c 
				on c.category_id = p.category_id;
	
-- 42. Obtener el nombre de todas las categorias y los nombres de sus 
-- productos,solo los productos que su nombre no comience con la letra P
				
		select 
			c.category_name
			, p.product_name
			, p.unit_price
			, p.units_in_stock 
		from products p 
			join categories c 
				on c.category_id = p.category_id
		where p.product_name like 'P%';

-- 43. Calcular el stock de productos por cada categoria.Mostrar el 
--     nombre de la categoria y el stock por categoria.

		select 
			c.category_name
			, sum(p.unit_price) as total
		from products p 
			join categories c 
				on c.category_id = p.category_id
		group by c.category_name;
		
-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del 
--     empleado y el nombre de los productos que estan en la orden 10794
		
		select 
			c.company_name
			, s.company_name
			, e.first_name
			, p.product_name  
		from orders o
			join order_details od 
				on o.order_id = od.order_id 
			join products p 
				on od.product_id = p.product_id
			join customers c 
				on c.customer_id = o.customer_id
			join shippers s 
				on o.ship_via  = s.shipper_id
			join employees e 
				on e.employee_id = o.employee_id
			where o.order_id = '10794';
		
-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,
--     luego ordenar codigo del cliente y el año.

		select 
			customer_id, 
			extract(year from order_date) as anio, 
			count(*) as total_ordenes 
		from orders o 
		group by customer_id, anio
		order by customer_id, anio;
		
-- 46. Contar el numero de ordenes que se han realizado por años y meses ,
--     luego debe ser ordenado por año y por mes.
		
		select  
			extract(year from order_date) as anio,
			extract(month from order_date) as mes,
			count(*) as total_ordenes 
		from orders o 
		group by mes, anio
		order by mes, anio;
		
-- 47. Seleccionar el nombre de la compañía del cliente,él código de 
--     la orden de compra,la fecha de la orden de compra, código del 
-- producto, cantidad pedida del producto,nombre del producto, 
-- el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join

		select 
			c.company_name
			, o.order_id
			, o.order_date
			, p.product_id
			, od.quantity
			, p.product_name
			, s.company_name
			, o.ship_city
		from orders o
			join order_details od 
				on o.order_id = od.order_id 
			join products p 
				on od.product_id = p.product_id
			join customers c 
				on c.customer_id = o.customer_id
			join shippers s 
				on o.ship_via  = s.shipper_id
			join employees e 
				on e.employee_id = o.employee_id;
				
-- 48. Seleccionar el nombre de la compañía del cliente, nombre del 
-- contacto, el código de la orden de compra, la fecha de la orden de compra, 
-- el código del producto,cantidad pedida del producto, nombre del producto
-- y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías 
-- proveedoras que comienzan con la letra de la A
-- hasta la letra G,además 
-- la cantidad pedida del producto debe estar entre 23 y 187.
		
		select 
			c.company_name
			, c.contact_name
			, o.order_id
			, o.order_date
			, p.product_id
			, od.quantity
			, p.product_name
			, su.company_name
			, o.ship_city
		from orders o
			join order_details od 
				on o.order_id = od.order_id 
			join products p 
				on od.product_id = p.product_id
			join customers c 
				on c.customer_id = o.customer_id
			join shippers s 
				on o.ship_via  = s.shipper_id
			join employees e 
				on e.employee_id = o.employee_id
			join suppliers su
				on p.supplier_id = su.supplier_id
		where su.company_name like 'G%' and od.quantity between 23 and 187;