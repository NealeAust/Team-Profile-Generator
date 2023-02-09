# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To build a Node.js command-line application that takes in information entered using inquirer.js about employees on a software engineering team, then dynamically generates an HTML webpage that displsys summaries for each person.  To include a walkthrough video that demonstrates the functionality of the application, including passing tests.

## Video

The following video shows the user flow through the application. This includes all prompts.

https://drive.google.com/file/d/1sSSIo6FTCHss7lQk-kkpHc-ieK-AZs2g/view


## Packages Used

- Node.js: Executes JavaScript code outside a web browser.
- Inquirer: Provides an easy way to capture user input in a Node.js command line interface application.
- Fs: A file system module that allows you to work with the file system on your computer.
- Screencastify: Video creation software to create screen recordings.

## Team Profile Generator

The Professional README Generator is an easy-to-use command-line application that enables the user to create a professional README.md file by entering responses to each question or request for information. Once all responses are supplied the program will generate a README.md. 

The README will consist of the project title, a clickable table of contents so anyone reading the document can click on a heading and navigate directly to the corresponding section in the document. Each section of the README contains a heading and the related text entered by the developer when creating the README using the command-line application.

The README consists of the following sections:

- Description
- Installation
- Usage
- Contributing
- Tests
- Questions
- License

**Note:**  When the user selects the software license to be used the badge for that license is displayed at the top of the README. Upon clicking on the badge the application will hyperlink directly to the Web page for that licence.

## Project Description

The main objective of this project was to use Node.js and inquirer-npm to build command-line application that generates a professional README. Starter code was provided.

The project also required using Screencastify to create a screen video showing the flow of the application and views of the prompts and the responses after their selection. 

**Note**: A description of how to use the completed web application appears in the 'Usage' section below.

The structure of the coding and what each section does is as follows:

1. 

2. Installed inquirer and fs (node.js already installed)

3. At index.js: 

- Imported packages needed for this application - inquirer, fs, and generateMarkdown.js.
- Created an array of questions for user input.
- Created a function to write README file. 
- Created a function to initialize application and call function.

4. 



5. Created video using Screencastify.

## Installation

To install this application, simply download from Github.

## Usage

To run the Team profile Generator the user opens the integrated terminal and types in 'node index.js. The prompts listed below are presented in order. Once you have responded to the initial prompt and pressed 'enter' the next prompt is displayed, and so on until all the required information is received by the application. At which point the README is generated.

**Manager**




**Engineer**





**Intern**

## Screenshot



## Licence

MIT






