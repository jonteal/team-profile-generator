const { it }  = require("@jest/globals");
const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("is capable of instantiating a new Employee", () => {
            const employee = new Employee();
            expect(typeof employee).toBe("object");
        });
        it("stores the employee's name", () => {
            const employee = new Employee("Jon");
            expect(employee.getName()).toBe("Jon");
        });
        it("getID", () => {
            const employee = new Employee("Jon", 1);
            expect(employee.getId()).toBe(1);
        });
        it("getEmail", () => {
            const employee = new Employee("Jon", 1, "jonjacksonvibes@gmail.com");
            expect(employee.getEmail()).toBe("jonjacksonvibes@gmail.com");
        });
        it("getRole", () => {
            const employee = new Employee("Jon", 1, "jonjacksonvibes@gmail.com");
        })
        it("can set name", () => {
            const employee = new Employee("Jon");
            expect(employee.name).toBe("Jon");
        });
        it("can set id", () => {
            const employee = new Employee("Jon", 1);
            expect(employee.id).toBe(1);
        });
        it("can set email", () => {
            const employee = new Employee("Jon", 1, "jonjacksonvibes@gmail.com");
            expect(employee.email).toBe("jonjacksonvibes@gmail.com");
        });
    });
});