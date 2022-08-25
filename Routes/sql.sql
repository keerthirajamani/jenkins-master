DROP DATABASE IF EXISTS mydb;

CREATE DATABASE mydb;

USE mydb;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id text,
  title varchar(30) NOT NULL DEFAULT ''
);

INSERT INTO user VALUES('1', 'u 1');
INSERT INTO user VALUES('2', 'u 2');