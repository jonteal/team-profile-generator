// Requiring the Employee class to extend and create the Intern class below
const Employee = require('./Employee');

// Creation of the Intern class which is extending from the Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // Function to get the school of the intern
    getSchool() {
        return this.school;
    }

    // Function to get the role of the intern
    getRole() {
        return "Intern";
    }
}

const intern = new Intern();

// Exporting the Intern class for the index.js file to require
module.exports = Intern;