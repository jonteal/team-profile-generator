// Requiring the Employee class to extend and create the Manager class below
const Employee = require('./Employee');

// Creation of the Manager class that is extending from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Adding a function to get the role
    getRole() {
        return "Manager";
    }

    // Adding another function to get the office number for the Manager
    getOfficeNumber() {
        return this.officeNumber; 
    }
}

const manager = new Manager();
// manager.printInfo();

// Exporting the Manager class for the index.js file to require
module.exports = Manager;
