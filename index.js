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
        