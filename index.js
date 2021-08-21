// TODO: Include packages needed for this application
const inquirer  = require("inquirer");
const fs = require("fs");
const fileName = "README.md"

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'readme-title', 
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'readme-description',
    },
    {
        type: 'input',
        message: 'What are the install instructions of your project?',
        name: 'readme-instructions',
    },
    {
        type: 'input',
        message: 'How should your project be used?',
        name: 'readme-usage',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,JSON.stringify(data,null,'\t'),(err) =>
        err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {

        writeToFile(fileName, answers)
        
      });
}

// Function call to initialize app
init();
