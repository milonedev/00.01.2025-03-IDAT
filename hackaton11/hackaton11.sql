

create table public.estudiante (
	id_estudiante SERIAL primary key,
	rut varchar(20) not null,
	nombre text not null,
	nacio text not null
)

insert into public.estudiante (rut, nombre, nacio) values
('20286841-K', 'Jorge', 'Chile'),
('18075847-K', 'Brenda', 'Colombia'),
('17016778-3', 'Luis', 'Argentina'),
('21616330-3', 'Flor', 'Cuba');

select * from public.estudiante

select * from curso

create table curso (
	id_curso SERIAL primary key,
	nombre_curso text not null
)

insert into curso (nombre_curso) values 
('Matemáticas'),
('Lenguaje'),
('Historia'),
('Ciencias');

create table estudiante_curso (
	id_estudiante int references estudiante(id_estudiante),
	id_curso int references curso(id_curso),
	primary key(id_estudiante, id_curso)
);

select * from estudiante_curso

insert into estudiante_curso (id_estudiante, id_curso) values
(1, 1),
(1, 2),
(2, 1),
(2, 3),
(4, 4);

select c.*, e.* from estudiante_curso ec 
	inner join curso c on ec.id_curso = c.id_curso
	inner join estudiante e on e.id_estudiante = ec.id_estudiante
where c.id_curso = 1

------------------------------ 
---   2.- 


create table estudiante_beca (
	cod_estudiante varchar(10) primary key,
	nombre_e text not null,
	apellido text not null,
	dni varchar(6) not null
)

insert into estudiante_beca values 
('01234', 'Roberto', 'Hens', '464367'),
('76346', 'Luis', 'Garcia', '345347'),
('23245', 'Mercedes', 'Garcia', '809234');

select * from estudiante_beca

create table direccion (
	id SERIAL primary key,
	cod_estud varchar(10) references estudiante_beca(cod_estudiante),
	direccion text not null
)

insert into direccion (cod_estud, direccion) values
('01234', 'Antonio López 43'),
('76346', 'Av. Ciudades 29'),
('23245', 'Rio Miro 2');

select * from direccion

create table beca (
	cod_beca varchar(10) primary key,
	nombre_beca text not null
)

insert into beca values
('A22321', 'METRICA'),
('B56784', 'ERASMUS'),
('G65434', 'HIMMPA');

select * from beca

create table requisito (
	cod_beca varchar(10) references beca(cod_beca),
	requisito text not null,
	primary key(cod_beca, requisito)
)

insert into requisito (cod_beca, requisito) values
('A22321', 'Ing. Téc.'),
('B56784', 'Ing. Téc.'),
('G65434', 'Ingenie.');

create table becas_asignadas (
	cod_estud varchar(10) references estudiante_beca(cod_estudiante),
	cod_beca varchar(10) references beca(cod_beca),
	fecha DATE,
	primary key (cod_estud, cod_beca, fecha)
);

insert into becas_asignadas (cod_estud, cod_beca, fecha) values
('01234', 'A22321', '2006-10-10'),
('76346', 'B56784', '2005-12-11'),
('23245', 'A22321', '2006-09-17');

select * from becas_asignadas

select b.*, eb.* from becas_asignadas ba
	inner join beca b
		on ba.cod_beca = b.cod_beca
	inner join estudiante_beca eb
		on eb.cod_estudiante = ba.cod_estud
		
		
-- 3

create table libro (
	cod_libro SERIAL primary key,
	titulo text not null,
	autor text not null,
	editorial text not null
)

create table lector (
	id_lector SERIAL primary key,
	nombre text not null
)

create table prestamo_libro(
	cod_libro int references libro(cod_libro),
	id_lector int references lector(id_lector),
	fecha_dev date,
	primary key (cod_libro, id_lector, fecha_dev)
)

insert into libro (titulo, autor, editorial) values
('Variable compleja', 'Murray Spiegel', 'McGraw Hill'),
('Visual Basic 5', 'E. Petroustoss', 'Anaya'),
('Estadística', 'Murray Spiegel', 'McGraw Hill'),
('Oracle University', 'Nancy Greenberg y Priya Nathan', 'Oracle Corp.'),
('Clipper 5.01', 'Ramalho', 'McGraw Hill');

insert into lector (nombre) values
('Pérez Gómez, Juan'),
('Ríos Terán, Ana'),
('Roca, René'),
('García Roque, Luis');

INSERT INTO prestamo_libro VALUES
(1, 1, '2005-04-15'),
(2, 2, '2005-04-17'),
(3, 3, '2005-04-16'),
(4, 4, '2005-04-20'),
(5, 1, '2005-04-18');

select l.*, li.*, pl.fecha_dev from prestamo_libro pl
inner join lector l on pl.id_lector = l.id_lector
inner join libro li on pl.cod_libro = li.cod_libro


-- 4 
	create table cliente (
		id_cliente SERIAL primary key,
		nombre_cliente text not null,
		estado text not null
	)
	
	insert into cliente (nombre_cliente, estado )values
	('Martin', 'Caracas'),
	('Herman', 'Coro'),
	('Pedro', 'Maracay');
	
	create table orden (
		id_orden SERIAL primary key,
		fecha date not null,
		id_cliente int references cliente(id_cliente)
	)
	
	insert into orden (fecha, id_cliente) values
	('2011-02-23', 1),
	('2011-02-25', 2),
	('2011-02-27', 3);
	
	select * from orden
	
	
	create table detalle_orden (
		id_orden int references orden(id_orden),
		num_art int,
		nombre_art text not null,
		cantidad int,
		precio numeric(10, 2),
		primary key (id_orden, num_art)
	);
	
	insert into detalle_orden (id_orden, num_art, nombre_art, cantidad, precio) values
	(1, 3786, 'Red', 3, 35.00),
	(1, 4011, 'Raqueta', 6, 65.00),
	(1, 9132, 'Paq-3', 8, 4.75),
	(2, 5794, 'Paq-6', 4, 5.00),
	(3, 4011, 'Raqueta', 2, 65.00),
	(3, 3141, 'Funda', 2, 10.00);

	select * from detalle_orden
	
-------------------------------
	
create table modelo (
	id_modelo SERIAL primary key,
	fabricante text not null,
	potencia int
)

create table clienteVehiculo (
	dni varchar(15) primary key,
	nombre text not null,
	cod_post varchar(10),
	ciudad text,
	calle text,
	num text
)

create table vehiculo (
	matricula varchar(15) primary key,
	dni_cliente varchar(15) references clienteVehiculo(dni) on delete cascade,
	id_modelo int references modelo(id_modelo) on delete cascade,
	fecha DATE,
	color text,
	precio numeric(10, 2)
)

INSERT INTO modelo (fabricante, potencia) VALUES
('Toyota Corolla', 132),
('Honda Civic', 158),
('Ford Mustang', 450),
('Tesla Model 3', 283),
('Volkswagen Golf', 147);

INSERT INTO clienteVehiculo (dni, nombre, cod_post, ciudad, calle, num) VALUES
('20286841-K', 'Jorge', '10001', 'Santiago', 'Av. Alameda', '123'),
('18075847-K', 'Brenda', '20002', 'Bogotá', 'Calle 85', '45'),
('17016778-3', 'Luis', '30003', 'Buenos Aires', 'Av. Corrientes', '678'),
('21616330-3', 'Flor', '40004', 'La Habana', 'Calle 23', '10');

-- Insertar vehículos asegurados
INSERT INTO vehiculo (matricula, dni_cliente, id_modelo, fecha, color, precio) VALUES
('ABC-123', '20286841-K', 1, '2024-01-15', 'Blanco', 22000.00),
('XYZ-987', '18075847-K', 2, '2024-02-10', 'Negro', 25000.00),
('LMN-456', '17016778-3', 3, '2024-03-05', 'Rojo', 50000.00),
('JKL-321', '21616330-3', 4, '2024-04-12', 'Azul', 40000.00),
('TUV-654', '20286841-K', 5, '2024-05-20', 'Gris', 28000.00);


select * from vehiculo v
	inner join clienteVehiculo c on v.dni_cliente = c.dni
	inner join modelo m on v.id_modelo = m.id_modelo
	order by c.nombre, v.matricula
	
	
	
	
	