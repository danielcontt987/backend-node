USE delivery;

CREATE TABLE users(
	id bigint primary key auto_increment,
    email varchar(180) not null unique,
    name varchar(180) not null,
    lastname varchar(180) not null,
    phone varchar(30) not null,
    image varchar(255) null,
    password varchar(255) not null,
    created_at timestamp(0) not null,
    updated_at timestamp(0) not null,
    deleted_at timestamp(0) not null
);