const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const employeeList = [];
const managerList = [];
const engineerList = [];
const internList = [];
const htmlCode;

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


const generateHTML = () =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href ="assets/style.css">
        <title>Team Profile Generator Template</title>
    </head>
    <body>
        <h1>My Team</h1>`

        htmlCode += employeeListReturn()
    `</body>
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
        } else if (response.selection === 'Finish building team') {
            console.log('Your team is being generated!');
            generateManager(managerList);
            generateEngineer(engineerList);
            generateIntern(internList);
            generateHTML();
            init();
            // call function to get to generating the html page
            generateHTML.generateText(employeeList, employeeList.length);
        }
    })
}

const generateManager = (managerList) => {
    temp = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${managerList[0].getName()}</h5>
            <h5 class="card-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${managerList[0].getID()}</li>
            <li class="list-group-item">${managerList[0].getEmail()}</li>
            <li class="list-group-item">${managerList[0].getOfficeNumber()}</li>
        </ul>
    </div>`
    employeeList.push(temp);
}

const generateEngineer = (engineerList) => {
    temp = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineerList[0].getName()}</h5>
            <h5 class="card-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineerList[0].getID()}</li>
            <li class="list-group-item">${engineerList[0].getEmail()}</li>
            <li class="list-group-item">${engineerList[0].getGithub()}</li>
        </ul>
    </div>`
    employeeList.push(temp);
}

const generateIntern = (internList) => {
    temp = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${internList[0].getName()}</h5>
            <h5 class="card-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${internList[0].getID()}</li>
            <li class="list-group-item">${internList[0].getEmail()}</li>
            <li class="list-group-item">${internList[0].getSchool()}</li>
        </ul>
    </div>`
    employeeList.push(temp);
}

const employeeListReturn = () => {
    var temp = "";
    for (let i = 0; i < employeeList.length; i++) {
        temp += employeeList[i];
    }
    return temp;
}


