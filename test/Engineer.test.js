const { default: expect } = require('expect');
const Engineer = require('../lib/Engineer')

test('testing to creat a github', () => {
    const TestGithub = "Tommygithub"
    const employees = new Engineer("Tommy", 41, "Tommy@gmail.com", TestGithub);
    expect(employees.github).toBe(TestGithub)
})

test('Test Make Github Retrun', () => {
    const TestGithub = "Tommygithub"
    const employees = new Engineer("Tommy", 41, "Tommy@gmail.com", TestGithub);
    expect(employees.getGithub()).toBe(TestGithub)
})

test("Testing the GetRole()", () => {
    const TestRole = "Engineer"
    const employees = new Engineer("Tommy", 41, "Tommy@gmail.com", "Tommygithub");
    expect(employees.getRole()).toBe(TestRole)
})