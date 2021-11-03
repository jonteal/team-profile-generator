const Intern = require("../lib/Intern");

test("gets the intern\'s school", () => {
    const intern = new Intern("Billy", 3, "billybob@gmail.com", "UofA");
    expect(intern.getSchool()).toBe("UofA");
});

test("gets the intern\'s role", () => {
    const intern = new Intern("Billy", 3, "billybob@gmail.com", "UofA");
    expect(intern.getRole()).toBe("Intern");
});

