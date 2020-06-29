// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name.toUpperCase()}
  ![License:https://img.shields.io/endpoint?url=<${(data.license) ? data.license : 'None'}](https://tmsmith1150.github.io/readme-generator/.${(data.license) ? data.license : 'None'}>&style<STYLE>


__##Description__
${data.descrip}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

__##Installation__
_To install the necessary dependencies, run the following command:_
${data.depend}

__##Usage__
${data.use}

__##License__
${data.license}

__##Contributing__
${data.contr}

__##Tests__
_To run the necessary tests, run the following command:_
${data.tests}

__##Questions__
![GitHub: ${data.github} : ](https://github.com/tmsmith1150?tab=repositories)
![Email: ${data.email} : ]("mailto:tmsmith1150@live.com")

`

}

module.exports = generateMarkdown;
