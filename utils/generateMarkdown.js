// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderDescription(data){}
function renderTableOfContents(data){}
function renderInstallation(data){}
function renderUsage(data){}
function renderLicense(data){}
function renderContributing(data){}
function renderTests(data){}
function renderQuestions(data){}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data = JSON.parse(data)
  return `# ${data.title}

  ## Description

  ## Table of Contents

  ## Installation

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions

  
`;
}

module.exports = {
  generateMarkdown
};
