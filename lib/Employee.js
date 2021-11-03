// Creation of the Employee superclass that is the parent to the Manager, Engineer, and Intern classes
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Function to get the name of the Employee
    getName() {
        return this.name;
    }
    // Function to get the ID of the Employee
    getId() {
        return this.id;
    }
    // Function to get the Email of the Employee
    getEmail() {
        return this.email;
    }
    // Function to get the Role of the Employee
    getRole() {
        return "Employee";
    }
}

// Exporting the Employee class so it may be required by the subclasses: Manager, Engineer, and Intern
module.exports = Employee;