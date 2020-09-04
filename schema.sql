DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
  FOREIGN KEY (role_id) REFERENCES role (id)
  FOREIGN KEY (manager_id) REFERENCES employee (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title varchar(30) NOT NULL,
    salary DECIMAL
    department_id INT
    PRIMARY KEY (id)
    FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30)
);