-- Create a table called person that records a person’s id, name, age, height (in cm), city, favorite_color.

CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER,
    height INTEGER,
    favorite_color VARCHAR(50),
    city VARCHAR(50)
);

-- Add 5 different people into the person database.

INSERT INTO persons (name, age, height, city, favorite_color)
VALUES ('Jackie', 18, 162, 'Fort Place', 'pink'),
('Dumbledore', 120, 180, 'Hogsmeade', 'purple'),
('Sponge Bob', 30, 50, 'Bikini Bottom', 'yellow'),
('Marty McFly', 22, 178, 'Hill Valley', 'blue'),
('Ramona Flowers', 24, 167, 'Montreal', 'red');

-- Select all the people in the person table by height from tallest to shortest.

SELECT name, height, id
FROM persons
ORDER BY height DESC

-- Select all the people in the person table by height from shortest to tallest.

SELECT name, height, id
FROM persons
ORDER BY height ASC

-- Select all the people in the person table by age from oldest to youngest.

SELECT name, age, id
FROM persons
ORDER BY age DESC

-- Select all the people in the person table older than age 20.

SELECT name, age, id
FROM persons
WHERE age > 20

-- Select all the people in the person table that are exactly 18.

SELECT name, age, id
FROM persons
WHERE age = 18

-- Select all the people in the person table that are less than 20 or older than 30.

SELECT name, age, id
FROM persons
WHERE age < 20 OR age > 30

-- Select all the people in the person table that are not 27 (use not equals).

SELECT name, age, id
FROM persons
WHERE age <> 27

-- Select all the people in the person table where their favorite color is not red.

SELECT name, favorite_color, id
FROM persons
WHERE favorite_color <> 'red'

-- Select all the people in the person table where their favorite color is not red and is not blue.

SELECT name, favorite_color, id
FROM persons
WHERE favorite_color <> 'red' AND favorite_color <> 'blue'

-- Select all the people in the person table where their favorite color is orange or green.

SELECT name, favorite_color, id
FROM persons
WHERE favorite_color = 'orange' OR favorite_color = 'green'

-- Select all the people in the person table where their favorite color is orange, green or blue (use IN).

SELECT name, favorite_color, id
FROM persons
WHERE favorite_color IN ('orange', 'green', 'blue')

-- Select all the people in the person table where their favorite color is yellow or purple (use IN).

SELECT name, favorite_color, id
FROM persons
WHERE favorite_color IN ('yellow', 'purple')