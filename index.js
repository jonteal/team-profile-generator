const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager\'s name?',
            name: 'manager-name'
        },
        {
            type: 'input',
            message: 'What is the manager\'s ID?',
            name: 'manager-id'
        },
        {
            type: 'input',
            message: 'What is the manager\'s email address?',
            name: 'manager-email'
        },
        {
            type: 'input',
            message: 'What is the manager\'s office number?',
            name: 'manager-office-number'
        },

        // Here add the menu to add an engineer or intern

        // Questions for Engineer
        {
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'engineer-name'
        },
        {
            type: 'input',
            message: 'What is the engineer\'s ID?',
            name: 'engineer-id'
        },
        {
            type: 'input',
            message: 'What is the engineer\'s email address?',
            name: 'engineer-email'
        },
        {
            type: 'input',
            message: 'What is the engineer\'s Github username?',
            name: 'engineer-github-username'
        },

        // Intern questions

        {
            type: 'input',
            message: 'What is the intern\'s name?',
            name: 'intern-name'
        },
        {
            type: 'input',
            message: 'What is the intern\'s ID?',
            name: 'intern-id'
        },
        {
            type: 'input',
            message: 'What is the intern\'s email address?',
            name: 'intern-email'
        },
        {
            type: 'input',
            message: 'What is the intern\'s office number?',
            name: 'intern-school'
        },

        // Return to menu 


        ])    
    };


const generateHTML = ({ manager-name, manager-id, manager-email, manager-office-number, engineer-name, engineer-id, engineer-email, engineer-github-username, intern-name, intern-id, intern-email, intern-school }) =>
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
    promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};
    
init();