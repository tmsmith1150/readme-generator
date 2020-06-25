const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const GenerateMarkdown = require("./generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = ["github", "email", "name", "descrip", "license", "depend", "tests"];

// function to initialize program
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?"
          },
          {
            type: "input",
            name: "name",
            message: "What is your project's name?"
          },
          {
            type: "input",
            name: "descrip",
            message: "Please write a short description of your project."
          },
          {
            type: "checkbox",
            name: "license",
            message: "What kind of license should your project have?",
            choices: [
              "MIT", 
              "APACHE 2.0", 
              "GPL 3.0", 
              "BSD 3"],
          },
          {
            type: "input",
            name: "depend",
            message: "What command should be run to install dependancies?"
          },
          {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
          },
          {
            type: "input",
            name: "use",
            message: "What does the user need to know about using the repo?"
          },
          {
            type: "input",
            name: "contr",
            message: "What does the user need to know about contributing to the repo?"
          },
          
            
         

    ])
    .then(answers => {
      const readme = GenerateMarkdown(answers);
  
      return writeFileAsync("README.md", readme);
    })

}

// function call to initialize program
//init();


init()
  .then(function() {
    console.log("Successfully wrote to readme");
  })
  .catch(function(err) {
    console.log(err);
  });






// function to write README file
function writeToFile(fileName, data) {
}
