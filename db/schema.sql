CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burgerName VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY(id)
);