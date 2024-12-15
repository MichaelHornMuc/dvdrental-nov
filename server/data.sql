CREATE TABLE customers(
  ID SERIAL PRIMARY KEY,
  FIRST_NAME VARCHAR(30) NOT NULL,
  LAST_NAME VARCHAR(30) NOT NULL,
  JOIN_DATE DATE NOT NULL
);

INSERT INTO customers (first_name, last_name, join_date, password, customer_email) VALUES ('Marvin', 'Erdinceee', 'Wed, 02 Dec 2024 19:54:00 GMT', 'ddftomio', 'marvi@überall.com');