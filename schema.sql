DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar (255) NOT NULL,
  role_id int,
  manager_id int,
  PRIMARY KEY (id)
);

CREATE TABLE role (
    id int NOT NULL AUTO_INCREMENT,
    title varchar (30) NOT NULL,
    salary DECIMAL
    department_id int
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (30)
);