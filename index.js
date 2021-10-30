const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager\'s name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the manager\'s ID?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'What is the manager\'s email address?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the manager\'s office number?',
            name: 'managerOfficeNumber',
        },
    ])
    .then((response) => {
        employeeList.push(new Manager(response.name, response.id, response.email, response.officeNumber));
        console.log('Manager successfully added to the team.');
        promptContinue();
    })
};

const promptEngineer = () => {
    return inquirer.prompt([

        // Questions for Engineer
        {
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'What is the engineer\'s ID?',
            name: 'engineerId'
        },
        {
            type: 'input',
            message: 'What is the engineer\'s email address?',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'What is the engineer\'s Github username?',
            name: 'engineerGithubUsername'
        },
    ])
        .then((response) => {
            employeeList.push(new Engineer(response.name, response.id, response.email, response.github));
            console.log('Intern successfully added to the team.');
            promptContinue();
        })
}

        // Intern questions
const promptIntern = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is the intern\'s name?',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'What is the intern\'s ID?',
            name: 'internId'
        },
        {
            type: 'input',
            message: 'What is the intern\'s email address?',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'What is the intern\'s office number?',
            name: 'internSchool'
        },
    ])
        .then((response) => {
            employeeList.push(new Intern(response.name, response.id, response.email, response.school));
            console.log('Intern successfully added to the team.');
            promptContinue();
        })
};


const generateHTML = ({ managerName, managerId, managerEmail, managerOfficeNumber, engineerName, engineerId, engineerEmail, engineerGithubUsername, internName, internId, internEmail, internSchool }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team Profile</h1>
            <p class="lead"></p>
        </div>
    </div>
</body>
</html>`;
    
// Bonus using writeFileSync as a promise
const init = () => {
    promptManager()
    // Use writeFileSync method to use promises instead of a callback function
    .then((response) => fs.writeFileSync('index.html', generateHTML(response)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();

function promptContinue() {
    console.log('Select the type of employee: ')
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'Finish building team'],
            name: 'selection',
        },
    ])
    .then((response) => {
        if(response.selection === 'Engineer') {
            promptEngineer();
        } else if (response.selection === 'Intern') {
            promptIntern();
        } else {
            console.log('Your team is being generated!');
            // call function to get to generating the html page
            generateHTML.generateText(employeeList, employeeList.length);
        }
    })
}

