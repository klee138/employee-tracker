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
        // based on their answer, either call the bid or the post functions
        if (answer.choices === "Show Departments") {
          showDept();
        }
        else if(answer.choices === "Show Employees") {
          showEmployees();
        } else if(answer.choices === "Show Roles") {
            showRoles();
        } else if(answer.choices === "Show Department") {
            showDept();
        } else if(answer.choices === "Add Employees") {
            addEmployees();
        } else if(answer.choices === "Add Role") {
            addRole();
        } else if(answer.choices === "Update Employee Role") {
            updateRole();
        } else if(answer.choices === "End") {
          connection.end();
        }
    });
}

function showDept() {
    inquirer
}