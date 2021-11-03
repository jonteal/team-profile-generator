// Testing file for the Intern class. It is only necessary to run tests for functions unique to Intern class
const Intern = require("../lib/Intern");

// Tests the ability of the getSchool function
test("gets the intern\'s school", () => {
    const intern = new Intern("Billy", 3, "billybob@gmail.com", "UofA");
    expect(intern.getSchool()).toBe("UofA");
});

// Tests the ability of the getRole function
test("gets the intern\'s role", () => {
    const intern = new Intern("Billy", 3, "billybob@gmail.com", "UofA");
    expect(intern.getRole()).toBe("Intern");
});

