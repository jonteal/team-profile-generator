const Engineer = require("../lib/Engineer");

test("gets the engineer\'s github", () => {
    const engineer = new Engineer("Tom", 2, "tomjones@gmail.com", "devTomJones");
    expect(engineer.getGithub()).toBe("devTomJones");
});

test("gets the engineer\'s role", () => {
    const engineer = new Engineer("Tom", 2, "tomjones@gmail.com", "devTomJones");
    expect(manager.getRole()).toBe("Engineer");
});