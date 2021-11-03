// Testing file for the Manager class. Only necessary to include testing for functions that are unique to the Manager class
const Manager = require("../lib/Manager");

// Tests the ability of the manager.officeNumber (office number) prompt
test("gets the manager\'s office number", () => {
    const manager = new Manager("Jon", 1, "jonjacksonvibes@gmail.com", 100);
    expect(manager.officeNumber).toBe(100);
});

// Tests the ability of the getRole function
test("gets the manager\'s role", () => {
    const manager = new Manager("Jon", 1, "jonjacksonvibes@gmail.com", 100);
    expect(manager.getRole()).toBe("Manager");
});
