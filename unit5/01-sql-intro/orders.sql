-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    person_id INTEGER NOT NULL,
    product_name VARCHAR(40) NOT NULL,
    product_price MONEY NOT NULL,
    quantity INTEGER
);

-- DECIMAL(16,2)

-- Add 5 orders to the orders table.

INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (1, 'iPhone 12', 30000.20, 2),
(2, 'iPhone 12 mini', 42000.00, 3),
(3, 'iPhone 13', 86000.30, 2),
(4, 'iPhone 13 Max', 12100.00, 1),
(5, 'iPhone 11 Pro', 1200.00, 1);

-- Select all the records from the orders table.

SELECT * FROM orders;

-- Calculate the total number of products ordered.

SELECT COUNT(*) FROM orders; -- total number of orders
SELECT SUM(quantity) FROM orders; -- total number of products ordered

-- Calculate the total order price.

SELECT SUM(product_price * quantity) FROM orders;

-- Calculate the total order price by a single person_id.

SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 2;