// Testing file for the Engineer class. Only necessary to test functions unique to the Engineer class
const Engineer = require("../lib/Engineer");

// Tests the ability of the getGithub function
test("gets the engineer\'s github", () => {
    const engineer = new Engineer("Tom", 2, "tomjones@gmail.com", "devTomJones");
    expect(engineer.getGithub()).toBe("devTomJones");
});

// Tests the ability of the getRole function
test("gets the engineer\'s role", () => {
    const engineer = new Engineer("Tom", 2, "tomjones@gmail.com", "devTomJones");
    expect(engineer.getRole()).toBe("Engineer");
});