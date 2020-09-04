var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "employee_db"
  });

  // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  function start() {
    inquirer
      .prompt({
        name: "choices",
        type: "list",
        message: "Please choose the activity you would like to execute",
        choices: ["Show Departments", "Show Employees", "Show Roles", "Show Department", "Add Employees", "Add Role", "Update Employee Role", "End"]
      })
      .then(function(answer) {
        // based on their answer, call the appropriate function
        if (answer.choices === "Show Departments") {
          showDept();
        } else if(answer.choices === "Show Employees") {
          showEmployees();
        } else if(answer.choices === "Show Roles") {
            showRoles();
        } else if(answer.choices === "Add Employees") {
            addEmployees();
        } else if(answer.choices === "Update Employee Role") {
            updateRole();
        } else if(answer.choices === "End") {
          connection.end();
        }
    });
}

function showDept() {
    console.log("Showing Departments...\n");
    connection.query("SELECT name FROM department", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

function showEmployees() {
    console.log("Showing Employees...\n");
    connection.query("SELECT first_name, last_name FROM employee", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

function showRoles() {
    console.log("Showing Roles...\n");
    connection.query("SELECT title FROM role", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

function addEmployees() {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is the Employee's first name?"
            },
            {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "roleID",
                type: "input",
                message: "What is the employee's role?"
            },
            {
                name: "managerID",
                type: "input",
                message: "Who is the employee's manager?"
            }
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.roleID,
                    manager_id: answer.managerID
                },
                function(err) {
                    if (err) throw err;
                    console.log("Employee added successfully!");
                    start();
                }
            );
        });
}

function updateRole () {
    inquirer
}