CREATE DATABASE IF NOT EXISTS twitchy;

USE twitchy;

CREATE TABLE IF NOT EXISTS liveStreams (
  id INT(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  streamer VARCHAR(70) NOT NULL,
  avatar_url VARCHAR(200),
  stream_title VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  game_poster_url VARCHAR(200),
  total_views int NOT NULL,
  watching_now int NOT NULL
) ENGINE=INNODB;



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
