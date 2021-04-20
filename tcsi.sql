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
"Park Spanish Immersion Elementary School", "Great hill with a fantastic asphalt runup and sidewalk entrance.", 1, "https://goo.gl/maps/pFJxCNUoDZ591e738", "44.95481907653575, -93.39854742518634", 2
);
select * from hills;

create table users (
	id int primary key auto_increment,
    name varchar(32)
);
insert into users (name) values ("Mace");
select * from users;