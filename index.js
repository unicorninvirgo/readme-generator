// TODO: Include packages needed for this application
const mrkDwn = require('./utils/generateMarkdown.js');
const inquirer  = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = "README.md"

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title', 
    },
   {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
  /*  {
        type: 'input',
        message: 'What are the install instructions of your project?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'How should your project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If there are any contributors, please list below:',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'instructions',
    }, */

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    let readMe = mrkDwn.generateMarkdown(JSON.stringify(data,null,''));
    /*fs.writeFile(fileName,JSON.stringify(data,null,'\t'),(err) =>
        err ? console.log(err) : console.log('Success!'));*/
  fs.writeFile(fileName,readMe,(err) =>
        err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {

        writeToFile(fileName, answers)
        
      }).catch((err) => console.error(err));
}

// Function call to initialize app
init();
