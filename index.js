// Imported packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

// Employee profiles
const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Creating empty array to store user input
const teamMembers = [];

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Manager's Name.",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the Manager's Name!"
                }
            }
        },

        {
            type: "input",
            name: "id",
            message: "Please enter Manager's ID.",
            validate: idInput => {
                if (isNaN(idInput)) {
                    return "Please enter the Manager's ID!"
                } else {
                    return true;
                }
            }
        },

        {

            type: "input",
            name: "email",
            message: "Please enter the Manager's Email Address.",
            Validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return "Please enter the Manager's Email Address!"
                }
            }
        },

        {

            type: "input",
            name: "officeNumber",
            message: "Please enter the Manager's Office Number.",
            validate: officeInput => {
                if (isNaN(officeInput)) {
                    return "The Manager's Office Number must be a number!"
                } else {
                    return true;
                }
            }
        }

    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            console.log(manager);
        })
};

function addEmployee(){
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose your Employee's Role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter the Employee's Name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the Employee's Name!"
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the Employee's ID.",
            validate: idInput => {
                if (isNaN(idInput)) {
                    return "Employee's ID must be a number!"
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Employee's Email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return 'Please check email and enter again!'
                }
            }
        },
        {
            type: "input",
            name: 'github',
            message: "Please enter the Employee's Github Username.",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    return "Please enter the Employee's Github Username!"
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the Intern's School Name",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    return "Please enter the Intern's School name!"
                }
            }
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another Employee?",
        }
    ])

        .then(employeeData => {
            let { name, id, email, role, github, school, addEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            teamMembers.push(employee);

            if (addEmployee) {
                return addEmployee(teamMembers);
            } else {
                return teamMembers;
            }
        })


function writeToFile (data) {
    fs.writeToFile("./dist/index.html", data, err => {
           if (err) {
            console.log(err);
            return;
           
        } else {
            return "Your team profile has been successfully created! Please check out the index.html"
        }
        
    })   


};
}
addManager()
    // // .then(addEmployee)
    // // .then(teamMembers => {
    // //     return generateHTML(teamMembers);
    // // })
    // // .then(createHTML => {
    // //     return writeToFile(createHTML);
    // // })
    // // .catch(err => {
    // //     console.log(err);


