-- MySQL 8.0

CREATE DATABASE IF NOT EXISTS wa_playzone_db;
USE wa_playzone_db;

CREATE TABLE USERS (
	id VARCHAR(256) PRIMARY KEY,
    username VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(35) NOT NULL,
    password VARCHAR(128) NOT NULL,
    
    CONSTRAINT CHECK (email LIKE '%@%')
);