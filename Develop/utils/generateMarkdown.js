// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name.toUpperCase()}
  ![License: ${(data.lic) ? data.lic : 'None'}](https://tmsmith1150.github.io/readme-generator/.${(data.lic) ? data.lic : 'None'}


__##Description__
${data.descrip}

__##Table of Contents__
_Installation:_
_Usage:_
_Contributors:_
_Tests:_
_Questions:_

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
