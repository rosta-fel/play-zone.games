-- MySQL 8.0

CREATE DATABASE wa_playzone_db;
USE wa_playzone_db;

CREATE TABLE USERS (
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(35) NOT NULL,
    password VARCHAR(128) NOT NULL,
    
    CONSTRAINT CHECK (email LIKE '%@%')
);

CREATE TABLE MESSAGES (
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    message VARCHAR(500) NOT NULL,
    written DATETIME NOT NULL,
    
    FOREIGN KEY (user_id) REFERENCES USERS(id)
);

DELIMITER //

CREATE PROCEDURE InsertMessage(
    IN p_username VARCHAR(15),
    IN p_message VARCHAR(500)
)
BEGIN
    DECLARE v_user_id INT;

    -- Get user_id based on the provided username
    SELECT id INTO v_user_id FROM USERS WHERE username = p_username;

    -- Check if the user exists
    IF v_user_id IS NOT NULL THEN
        -- Insert the message into the MESSAGES table
        INSERT INTO MESSAGES (user_id, message, written)
        VALUES (v_user_id, p_message, NOW());
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'User does not exist';
    END IF;
END //

DELIMITER ;
