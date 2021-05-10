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
insert into hills (name, description, added_by, maplink, mapembed, gps, rating) values (
"Short and Sweet", 
"Good short and steep hill with a great place to launch.", 
1, 
"https://goo.gl/maps/Q8AdLyMtXHJXdDHK6", 
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.8292271718175!2d-93.08414017079372!3d44.93459494807992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU2JzA0LjUiTiA5M8KwMDUnMDAuOSJX!5e1!3m2!1sen!2sus!4v1620673493934!5m2!1sen!2sus",
"44.934594, -93.083593",
1
);
alter table hills add mapembed varchar(1000) after maplink;

select * from hills;


create table users (
	id int primary key auto_increment,
    name varchar(32)
);
insert into users (name) values ("Mace");
select * from users;

create table photos (
	id int primary key auto_increment,
	hill_id int,
    filename varchar(64)
);
select * from photos;
insert into photos (hill_id, filename) values
(15, "P5060194.jpg")
;

SELECT DISTINCT hill_id FROM photos;

create table videos (
id int primary key auto_increment,
hill_id int,
src varchar(64)
);
select * from videos;

insert into videos (hill_id, src) values
(15, "https://www.youtube.com/embed/mJ58NEvUwmE")
;

select * from videos where hill_id = 14;