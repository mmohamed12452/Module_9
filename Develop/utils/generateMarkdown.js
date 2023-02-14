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
    return ` - [License](#licenses-📝)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
   if(license!== "None")
   {
    return `## License 📝
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

  
       ## Description 🔎
       ${data.description}
       
       ## Table of Contents 📖
       - [Installation](#installation-⚙️)
       - [Usage](#usage-🎮)
       ${renderLicenseLink(data.license)}
       - [Test](#tests-🧪)
       - [Credits](#credits-🧑‍🤝‍🧑)
       - [Questions](#questions-🙋)
       - [Deployed Application](#deployed-application-🚀)
       
       ## Installation ⚙️
       ${data.install}
       
       ## Usage 🎮
       ${data.usage}
       
       ${renderLicenseSection(data.license)}
       
       ## Tests 🧪
       ${data.test}
       
       ## Credits 🧑‍🤝‍🧑
       ${data.credits}
       
       ## Questions 🙋
       For more details, contact my email at: ${data.email}
       
       You can also find me on GitHub at: [${data.github}](https://www.github.com/${data.github})
       
       ## Deployed Application 🚀
       This application was deplopyed at [${data.deploy}](${data.deploy})
       `
       }

module.exports = generateMarkdown;
