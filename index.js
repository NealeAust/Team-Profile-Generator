// Imported packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

// Employee profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Created empty array to store user input
const teamMembers = [];

// Created an array of questions to enter manager details
// Validates question is answered & error message 
// Validates email is in correct format & error message
// Validates ID and Office Number is numeric & error messages
// I
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
                    return console.log("No entry detected, please try again!");
                }
            }
        },

        {
            type: "input",
            name: "id",
            message: "Enter Manager's ID:",
            validate: idInput => {
                if (!idInput) {
                 return console.log("No entry detected, please try again!");
                }
                if (isNaN(idInput)) {
                  return console.log("  ID must be a number, please try again!");
                    
                } else {
                    return true;
                }
            }
        },

        {

            type: "input",
            name: "email",
            message: "Enter the Manager's Email Address:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return console.log("  Invalid email address entered, please try again!");
                }
            }
        },

        {

            type: "input",
            name: "officeNumber",
            message: "Enter the Manager's Office Number:",
            validate: officeInput => {
                if (!officeInput) {
                    return console.log("No entry detected, please try again!");
                   }                              
                if (isNaN(officeInput)) {
                    return console.log("  Office Number must be a number, please try again!")
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
       

    // User selects whether to add Engineer or Intern
    // Created an array of questions to enter employee details
    // Validates question is answered & error message
    // Validates email is in correct format & error message
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
            message: "Enter the Employee's Name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return console.log("No entry detected, please try again!");
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Employee's ID:",
            validate: idInput => {
                if (!idInput) {
                    return console.log("No entry detected, please try again!");
                   }
                
                   if (isNaN(idInput)) {
                    return console.log("  ID must be a number, please try again!");
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Employee's Email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return console.log("  Invalid email address entered, please try again!");
                }
            }
        },
        {
            type: "input",
            name: 'github',
            message: "Enter the Employee's Github Username:",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    return console.log("No entry detected, please try again!");
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the Intern's School Name:",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    return console.log("No entry detected, please try again!")
                }
            }
        },
        
        // User asked if they want to add another employee Y/n
        // If 'Y' user chooses role and prompts appear based on selection
        // If 'N' team is created and user exits application
        // User notified that team progfile successfully generated
        {
            type: "confirm",
            name: "anotherEmployee",
            message: "Would you like to add another Employee?",
        }
    ])

    // Employ data
    .then(employeeData => {
            let { name, id, email, role, github, school, anotherEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }


            //Create template of team members details
            teamMembers.push(employee);
            console.log(anotherEmployee)
            if (anotherEmployee) {
                return addEmployee(teamMembers);
            } else {
                var template = generateHTML(teamMembers)
                writeFile(template)
            }
        })
    };

    // Function to generate HTML page file using file system
    function writeFile(data) {
    fs.writeFile("./dist/index.html", data, err => {
            if (err) {
            console.log(err);
            } else {
            console.log ("Team profile generated successfully!")
        }              
    })   
};

addManager()




