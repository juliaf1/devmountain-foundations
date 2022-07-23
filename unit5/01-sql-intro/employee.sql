-- List all employee first and last names only that live in Calgary.

SELECT first_name, last_name FROM employee WHERE city = 'Calgary';

-- Find the birthdate for the youngest employee.

SELECT birth_date FROM employee ORDER BY birth_date ASC LIMIT 1;
SELECT MIN(birth_date) FROM employee;

-- Find the birthdate for the oldest employee.

SELECT birth_date FROM employee ORDER BY birth_date DESC LIMIT 1;
SELECT MAX(birth_date) FROM employee;

-- Find everyone that reports to Nancy Edwards (use the ReportsTo column).

SELECT employee_id FROM employee WHERE first_name = 'Nancy' AND last_name = 'Edwards';
SELECT first_name, last_name FROM employee WHERE reports_to = 2;

-- Count how many people live in Lethbridge.

SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge';