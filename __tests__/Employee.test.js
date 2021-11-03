// Testing for all the functions in the Employee class
const { it }  = require("@jest/globals");
const Employee = require('../lib/Employee');

// Describe test that holds all function tests
describe("Employee class", () => {
    describe("getName method", () => {

        // Tests the ability of the code to generate a new Employee
        it("is capable of instantiating a new Employee", () => {
            const employee = new Employee();
            expect(typeof employee).toBe("object");
        });
        
        // Tests the ability of the getName function
        it("stores the employee's name", () => {
            const employee = new Employee("Jon");
            expect(employee.getName()).toBe("Jon");
        });

        // Tests the ability of the getId function
        it("getID", () => {
            const employee = new Employee("Jon", 1);
            expect(employee.getId()).toBe(1);
        });

        // Tests the ability of the getEmail function
        it("getEmail", () => {
            const employee = new Employee("Jon", 1, "jonjacksonvibes@gmail.com");
            expect(employee.getEmail()).toBe("jonjacksonvibes@gmail.com");
        });

        // Tests the ability of the code to create an object with the name, ID, and email data.
        it("getRole", () => {
            const employee = new Employee("Jon", 1, "jonjacksonvibes@gmail.com");
        })

        // Tests the ability of the code to set the employee.name (name) correctly
        it("can set name", () => {
            const employee = new Employee("Jon");
            expect(employee.name).toBe("Jon");
        });

        // Tests the ability of the code to set the employee.id (ID) correctly 
        it("can set id", () => {
            const employee = new Employee("Jon", 1);
            expect(employee.id).toBe(1);
        });

        // Tests the ability of the code to set the employee.email (Email) correctly 
        it("can set email", () => {
            const employee = new Employee("Jon", 1, "jonjacksonvibes@gmail.com");
            expect(employee.email).toBe("jonjacksonvibes@gmail.com");
        });
    });
});