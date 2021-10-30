const Manager = require("../lib/Manager");

test("gets the manager\'s office number", () => {
    const manager = new Manager("Jon", 1, "jonjacksonvibes@gmail.com", 100);
    expect(manager.officeNumber).toBe(100);
});

test("gets the manager\'s role", () => {
    const manager = new Manager("Jon", 1, "jonjacksonvibes@gmail.com", 100);
    expect(manager.getRole()).toBe("Manager");
});
