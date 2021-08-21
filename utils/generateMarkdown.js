// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderDescription(data){
  return data.description
}

function renderTableOfContents(data){
  return '';
}

function renderInstallation(data){
  return data.install
}

function renderUsage(data){
  return data.usage
}

function renderLicense(data){
  return data.description
}

function renderContributing(data){
  return data.contributors
}

function renderTests(data){
  return data.tests
}

function renderQuestions(data){
  return data.questions
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data = JSON.parse(data)
  
  return `# ${data.title}\n
    
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
