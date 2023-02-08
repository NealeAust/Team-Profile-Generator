// Imported packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

// Employee profiles
const Employee = require("./lib/Employee");
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
            message: "Enter the Manager's Name:",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    return "No entry detected, please try again!"
                }
            }
        },

        {
            type: "input",
            name: "id",
            message: "Enter Manager's ID:",
            validate: idInput => {
                if (!idInput) {
                 return "No entry detected, please try again!"
                }
                if (isNaN(idInput)) {
                    return "ID must be a number, please try again!"
                } else {
                    return true;
                }
            }
        },

        {

            type: "input",
            name: "email",
            message: "Enter the Manager's Email Address.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return "Invalid email address entered, please try again!"
                }
            }
        },

        {

            type: "input",
            name: "officeNumber",
            message: "Enter the Manager's Office Number.",
            validate: officeInput => {
                if (!officeInput) {
                    return "No entry detected, please try again!"
                   }                              
                if (isNaN(officeInput)) {
                    return "Office Number must be a number, please try again!"
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
            addEmployee()
        })
     };
       
function addEmployee() {
        return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose your Employee's Role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Enter the Employee's Name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "No entry detected, please try again!"
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Employee's ID.",
            validate: idInput => {
                if (!idInput) {
                    return "No entry detected, please try again!"
                   }
                
                   if (isNaN(idInput)) {
                    return "ID must be a number, please try again!"
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Employee's Email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return "Invalid email address entered, please try again!"
                }
            }
        },
        {
            type: "input",
            name: 'github',
            message: "Enter the Employee's Github Username.",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    return "No entry detected, please try again!"
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the Intern's School Name",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    return "No entry detected, please try again!"
                }
            }
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Would you like to add another Employee?",
        }
    ])

        .then(employeeData => {
            let { name, id, email, role, github, school, addMore } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            teamMembers.push(employee);

            if (addMore) {
                return addEmployee(teamMembers);
            } else {
                return teamMembers;
            }
        })
    };

const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, err => {
           if (err) {
            console.log(err);
            return;
           
        } else {
            return "Your team profile has been successfully created! Please check out the index.html"
        }
       
        
        
    })   


};

addManager()

// .then(teamMembers => {
//     return generateHTML(teamMembers);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .catch(err => {
//  console.log(err);
//   });
 


