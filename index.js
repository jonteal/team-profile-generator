const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generate = require('./src/generateHTML');
// const Employee = require('./lib/Employee');

const employeeList = [];
const managerList = [];
const engineerList = [];
const internList = [];
// const htmlCode;

// Prompt for manager questions
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
        managerList.push(new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber));
        console.log(managerList);
        console.log('Manager successfully added to the team.');
        promptContinue();
    })
};

// Prompt for Engineer questions
const promptEngineer = () => {
    return inquirer.prompt([

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
            engineerList.push(new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithubUsername));
            console.log('Intern successfully added to the team.');
            promptContinue();
        })
}

// Prompt for Intern questions
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
            internList.push(new Intern(response.internName, response.internId, response.internEmail, response.internSchool));
            console.log('Intern successfully added to the team.');
            promptContinue();
        })
};






const promptContinue = () => {
    console.log('Select the type of employee: ')
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'Finish building team'],
            name: 'selection',
        },
    ])
    .then((response) => {
        console.log(response);
        if(response.selection === 'Engineer') {
            promptEngineer();
        } else if (response.selection === 'Intern') {
            promptIntern();
        } else if (response.selection === 'Finish building team') {
            console.log('Your team is being generated!');
            console.log('Inside else if statement: ', managerList[0]);
            generateManager(managerList);
            if (engineerList.length > 0) {
                generateEngineer(engineerList);
            }
            if (internList.length > 0) {
                generateIntern(internList);
            }
            generate.generateHTML(employeeList)
            // init();
            // call function to generate the html page
            // console.log(employeeList.join(""));
        }
    })
}

const generateManager = (array) => {
    let temp = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${array[0].getName()}</h5>
            <h5 class="card-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${array[0].getId()}</li>
            <li class="list-group-item"><a href = "mailto: ${array[0].getEmail()}">${array[0].getEmail()}</a></li>
            <li class="list-group-item">${array[0].getOfficeNumber()}</li>
        </ul>
    </div>`
    employeeList.push(temp);
}

const generateEngineer = (engineerList) => {
    
    engineerList.forEach(element => {
        let temp = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.getName()}</h5>
                <h5 class="card-title">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.getId()}</li>
                <li class="list-group-item">${element.getEmail()}</li>
                <li class="list-group-item"><a href = "https://github.com/${element.getGithub()}">${element.getGithub()}</a></li>
            </ul>
        </div>`
        employeeList.push(temp); 
    });
}

const generateIntern = (internList) => {
    internList.forEach(element => {
        let temp = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.getName()}</h5>
                <h5 class="card-title">Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.getId()}</li>
                <li class="list-group-item">${element.getEmail()}</li>
                <li class="list-group-item">${element.getSchool()}</li>
            </ul>
        </div>`
        employeeList.push(temp);
    })
    
}

const employeeListReturn = () => {
    var temp = "";
    for (let i = 0; i < employeeList.length; i++) {
        temp += employeeList[i];
    }
    return temp;
}

const init = () => {
    promptManager()
    // Use writeFileSync method to use promises instead of a callback function
    // .then((response) => fs.writeFileSync('index.html', generateHTML(response)))
    // .then(() => console.log('Successfully wrote to index.html'))
    // .catch((err) => console.error(err));
        // return htmlCode;


};

init();




{/* <h1>My Team</h1>
    <div class="main-container">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Name</h5>
                <h5 class="card-title">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Email</li>
                <li class="list-group-item">Office Number</li>
            </ul>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Name</h5>
                <h5 class="card-title">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Email</li>
                <li class="list-group-item">Github Username</li>
            </ul>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Name</h5>
                <h5 class="card-title">Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID</li>
                <li class="list-group-item">Email</li>
                <li class="list-group-item">School</li>
            </ul>
        </div>
    </div> */}