
//return description of project
function renderDescription(data){
  return data.description
}

function renderTableOfContents(data){
  return `
  
  ## [Installation](#installation)
  
  ## [Usage](#usage)

  ## [License](#license)

  ## [Contributing](#contributing)

  ## [Tests](#tests)

  ## [Questions](#questions-id)
 
  `;
}

function renderInstallation(data){
  return data.install
}

function renderUsage(data){
  return data.usage
}

function renderLicenseBadge(data){
  let license = data.license.split('|');
  let licenseURL = license[1];
  return `<img src="${licenseURL}">`;
}

function renderLicense(data){
  
  let license = data.license.split('|');
  let licenseType = license[0];

  return `The license type of this project is ${licenseType}`;
}

function renderContributing(data){
  return data.contributors
}

function renderTests(data){
  return data.test
}

function renderQuestions(data){
  let questions = `[Click Here](https://github.com/${data.githubname}) to checkout my github profile.\n\n
  If you want to discuss hiring me for your upcoming projects, feel free to shoot me an email ${data.email}
  `
  return questions
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data = JSON.parse(data)
  
  return `# ${data.title}\n
  ${renderLicenseBadge(data)}

  ## Description
  ${renderDescription(data)}

  ## Table of Contents
  ${renderTableOfContents(data)}
  
  ## Installation
  ${renderInstallation(data)}

  ## Usage
  ${renderUsage(data)}

  ## License
  ${renderLicense(data)}

  ## Contributing
  ${renderContributing(data)}

  ## Tests
  ${renderTests(data)}

  ## Questions 
  ${renderQuestions(data)}
  `;
}

module.exports = {
  generateMarkdown
};
