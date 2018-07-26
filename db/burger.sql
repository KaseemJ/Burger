CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(40) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;

-- Inserted a set of records into the table
INSERT INTO burgers (burger_name, devoured) VALUES ("Dbl Cheese", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Chicken", true);
