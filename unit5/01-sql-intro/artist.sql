-- Add 3 new artist to the artist table. (It already exists.)

INSERT INTO artist (name)
VALUES ('Gilberto Gil'),
('Doja Cat'),
('Seu Jorge');

-- Select 10 artists in reverse alphabetical order.

SELECT name FROM artist ORDER BY name DESC LIMIT 10;

-- Select 5 artists in alphabetical order.

SELECT name FROM artist ORDER BY name ASC LIMIT 5;

-- Select all artists that start with the word ‘Black’.

SELECT name FROM artist WHERE name LIKE 'Black%';

-- Select all artists that contain the word ‘Black’.

SELECT name FROM artist WHERE name LIKE '%Black%';