// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name.toUpperCase()}
  ![License: ${(data.lic) ? data.lic : 'None'}](https://tmsmith1150.github.io/readme-generator/.${(data.lic) ? data.lic : 'None'}

__#Info__
${data.github}
${data.email}

__#Project 1__ 
${data.name}

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
${data.name}

__##License__
${data.license}

__##Contributing__
${data.contr}

__##Tests__
_To run the necessary tests, run the following command:_
${data.tests}

`

}

module.exports = generateMarkdown;
