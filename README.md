# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To build a Node.js command-line application that takes in information entered using inquirer.js about employees on a software engineering team, then dynamically generates an HTML webpage that displays summaries for each person.  To include a walkthrough video that demonstrates the functionality of the application, including passing tests.

## Video

The following video shows the user flow through the application. This includes all prompts.

https://drive.google.com/file/d/1sSSIo6FTCHss7lQk-kkpHc-ieK-AZs2g/view

## Packages Used

- Node.js: Executes JavaScript code outside a web browser.
- Inquirer: Provides a logical and straightforward way to capture user input in a Node.js command line interface application.
- Fs: A file system module that allows you to work with the file system on your computer.
- Screencastify: Video creation software to create screen recordings.

## Team Profile Generator

The Team Profile Generator is an easy-to-use command-line application that enables the user to create team members and their profiles by entering responses to each question or request for information. Once all responses are entered the application will use the generateHTML.js file to populate the corresponding fields in a program written in the index.htm file. The user will then be able to produce a webpage consisting of a  header and a separate card for the each team member (refer screenshot below)

The team consists of a manager, and the option of one more engineers and/or interns

## Project Description

The main objective of this project was to use Node.js and inquirer-npm to build a command-line application that generates employee details (name, id , email address, office number, github, school) into the applicable fields within an index.html file to create a 'My Team' web page. 

In the project there are three employee types: Manager, Engineer and Intern. The fields *name*, *id* and *email* apply to all employ types. While the field *office number* applies to the manager only, the *github* to the engineer only and *school* the intern only.  

As all fields were mandatory the developer was required to incorporate validation rules to ensure an entry was made and where applicable in the correct format.

The project required preparing and running tests that had to be passed. The tests were as follows:
- Employee.test.js
- Engineer.test.js
- Intern.test.js
- Manager.test.js

The project also required using Screencastify to create a screen video that showed running the tests with all passing, the flow of the application and views of the prompts and the responses after their selection. The video also had to show where the index.html file was populated with the team members details entered.

**Note**: A description of how to use the completed web application appears in the 'Usage' section below.

## Installation

To install this application, simply download from Github.

## Usage

To run the Team profile Generator the user opens the integrated terminal and types in 'node index.js. The prompts listed below appear in order. Once you have responded to the initial prompt and pressed 'enter' the next prompt is displayed, and so on until all the required information is received by the application. At which point the applicable field in the index.html file are populated.

 The application includes validation and business rules, returning error messages if no entry is made or is not in the right format. 

### Manager

- Enter the Manager's Name:
- Enter the Manager's ID:
- Enter the Manager's Email Address:
- Enter the Manager's Office Number:

### Engineer/Intern

- Choose your Employees Role (Engineer or Intern)
- Enter the Employee's Name:
- Enter the Employee's ID:
- Enter the Employee's Email:
- Enter the Employee's Github Username: (Engineer only)
- Enter the Intern's School Name: (Intern only)

### Error Messages

- No entry detected, please try again!
- ID must be a number, please try again!
- Office Number must be a number, please try again! (Manager only)

## Screenshot

![image](https://user-images.githubusercontent.com/115671306/217737961-487c1387-21f7-4d4a-a213-ed4520f44724.png)

## Licence

MIT







