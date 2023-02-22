const { default: expect } = require('expect');
const Intern = require('../lib/Intern')


test("Testing to see if we can create a school", () => {
    const TestSchool = "KU";
    const employees = new Intern("Tommy", 41, "Tommy@gmail.com", TestSchool);
    expect(employees.school).toBe(TestSchool);
});

test("testing to return School()", () => {
    const TestSchool = "KU"
    const employees = new Intern('Tommy', 41, "Tommy@gmail.com", "KU")
    expect(employees.getSchool()).toBe(TestSchool)
});

test('Testing intern Role', () => {
    const TestRole = "Intern"
    const employees = new Intern('Tommy', 41, "Tommy@gmail.com", "KU")
    expect(employees.getRole()).toBe(TestRole)
});