// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const questions = [
  {
    type: "input",
    name: "title",
    message: "enter your project title",
  },
  {
    type: "input",
    name: "description",
    message: "give a description of your project",
  },
  {
    type: "input",
    name: "motivation",
    message: "what was your motivation?",
  },
  {
    type: "input",
    name: "reason",
    message: "Why did you build this project?",
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does it solve?",
  },
  {
    type: "input",
    name: "learnt",
    message: "What did you learn?",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    type: "input",
    name: "collaborators",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "input",
    name: "thirdParty",
    message:
      "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
  },
  {
    type: "input",
    name: "tutorials",
    message: "If you followed tutorials, include links to those here as well.",
  },
  {
    type: "input",
    name: "license",
    message: "what license do you use",
  },
  {
    type: "input",
    name: "features",
    message: "list your projects features here",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("successfully created README.md file!")
  );
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);
  // creating a function to accept the user answers and build a README
  const buildReadme = (answers) => {
    const {
      title,
      description,
      motivation,
      reason,
      problem,
      learnt,
      installation,
      usage,
      collaborators,
      thirdParty,
      tutorials,
      license,
      features,
    } = answers;

    return `# ${title}

## Description

- ${description}
- ${motivation}
- ${reason}  
- ${problem}
- ${learnt}


## Installation

 ${installation} 

## Usage
 ${usage}

## Credits

 -${collaborators}

 -${thirdParty}

 -${tutorials}

## License

 ${license}

 ## Features
 
 -${features}`;
  };

  // TODO: Create a function to write README file
  const READMEpageContent = buildReadme(answers);

  writeToFile("README.md", READMEpageContent);
}

// Function call to initialize app
init();
