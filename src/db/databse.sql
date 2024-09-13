
create table usuario (
 id bigint primary key generated always as identity,
 nombre_usuario text not null,
 correo_electronico text not null unique,
 contrasena text not null,
 preferencias_notificacion text,
 historial_busquedas text
);


create table producto (
 id bigint primary key generated always as identity,
 nombre_producto text not null,
 categoria_id bigint,
 descripcion text,
 imagen text
);


create table tienda (
 id bigint primary key generated always as identity,
 nombre_tienda text not null,
 url_direccion text,
 tipo_tienda text
);


create table precio (
 id bigint primary key generated always as identity,
 precio_actual numeric not null,
 precio_mas_bajo_historico numeric,
 fecha_actualizacion timestamptz not null default now(),
 tienda_id bigint references tienda (id)
);


create table busqueda (
 id bigint primary key generated always as identity,
 producto_id bigint references producto (id),
 usuario_id bigint references usuario (id),
 fecha_hora timestamptz not null default now()
);


create table alerta_precio (
 id bigint primary key generated always as identity,
 precio_deseado numeric not null,
 fecha_creacion timestamptz not null default now(),
 estado_alerta text,
 usuario_id bigint references usuario (id),
 producto_id bigint references producto (id)
);


create table historial_precios (
 id bigint primary key generated always as identity,
 producto_id bigint references producto (id),
 precio_anterior numeric,
 fecha_actualizacion timestamptz not null default now(),
 tienda_id bigint references tienda (id)
);


create table categoria_producto (
 id bigint primary key generated always as identity,
 nombre_categoria text not null
);


alter table producto
add constraint fk_categoria foreign key (categoria_id) references categoria_producto (id);


