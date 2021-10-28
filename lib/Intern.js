const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        return "Intern";
    }
}

const intern = new Intern();
intern.printInfo();