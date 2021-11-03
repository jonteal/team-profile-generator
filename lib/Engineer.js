// Requiring the Employee class to extend and create the Engineer class below
const Employee = require('./Employee');

// Creation of the Engineer class which extends the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; 
    }
    // Function that gets the github username of the Engineer
    getGithub() {
        return this.github;
    }

    // Function that gets the role of the Engineer
    getRole() {
        return "Engineer";
    }
}

const engineer = new Engineer();

// Exporting the Engineer class for the index.js file to require
module.exports = Engineer;