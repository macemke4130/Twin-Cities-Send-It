use tcsi;

create user 'tcsi_user'@'localhost' identified by 'root';
GRANT ALL ON tcsi.* TO 'tcsi_user'@'localhost';

create table hills (
	id int primary key auto_increment,
    name varchar(64) not null,
    description varchar(5000),
    added_by int,
    maplink varchar(1000),
    gps varchar(64),
    rating tinyint(1),
    created_at timestamp default now()
);
insert into hills (name, description, added_by, maplink, gps, rating) values (
"French Regional Park Sledding Hill", "", 1, "https://goo.gl/maps/rVHifEpt6wCRb2f7A", "45.023091312740384, -93.4338504939871", 0
);
select * from hills;

create table users (
	id int primary key auto_increment,
    name varchar(32)
);
insert into users (name) values ("Mace");
select * from users;