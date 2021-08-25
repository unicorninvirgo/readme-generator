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
    {
        type: 'input',
        message: 'What are the install instructions of your project?',
        name: 'install',
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
        name: 'test',
    }, 
    {
        type: 'expand',
        message: 'Please select the license that covers your code: g - GNU GPL v3, m - MIT, p - Mozilla Public License',
        name: 'license',
        choices: [
            {
              key: 'g',
              name: 'GNU GPL v3',
              value: 'GNU GPL v3|https://img.shields.io/badge/License-GPLv3-blue.svg',
            },
            {
              key: 'm',
              name: 'MIT',
              value: 'MIT|https://img.shields.io/badge/License-MIT-yellow.svg',
            },
            {
              key: 'p',
              name: 'Mozilla Public License',
              value: 'Mozilla Public License|https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
            },
          ],
    },
     {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }, 
    {
        type: 'input',
        message: 'What is your github name?',
        name: 'githubname',
    }, 
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //console.log(data.license.split('|'));

    let readMe = mrkDwn.generateMarkdown(JSON.stringify(data,null,''));
 
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
