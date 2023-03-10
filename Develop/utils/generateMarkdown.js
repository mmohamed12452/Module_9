// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if(license !== "None")
  {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)
{
  if(license !== "None")
  {
    return ` - [License](#licenses-๐)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
   if(license!== "None")
   {
    return `## License ๐
    We are covered by ${license} license
    `
   }
   return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
 {
  
   return `
      # ${data.title}
       ${renderLicenseBadge(data.license)}
       ${data.name}

  
       ## Description ๐
       ${data.description}
       
       ## Table of Contents ๐
       - [Installation](#installation-โ๏ธ)
       - [Usage](#usage-๐ฎ)
       ${renderLicenseLink(data.license)}
       - [Test](#tests-๐งช)
       - [Credits](#credits-๐งโ๐คโ๐ง)
       - [Questions](#questions-๐)
       - [Deployed Application](#deployed-application-๐)
       
       ## Installation โ๏ธ
       ${data.install}
       
       ## Usage ๐ฎ
       ${data.usage}
       
       ${renderLicenseSection(data.license)}
       
       ## Tests ๐งช
       ${data.test}
       
       ## Credits ๐งโ๐คโ๐ง
       ${data.credits}
       
       ## Questions ๐
       For more details, contact my email at: ${data.email}
       
       You can also find me on GitHub at: [${data.github}](https://www.github.com/${data.github})
       
       ## Deployed Application ๐
       This application was deplopyed at [${data.deploy}](${data.deploy})
       `
       }

module.exports = generateMarkdown;
