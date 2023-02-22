const { default: expect } = require('expect');
const Manager = require('../lib/Manager');

test("testing if we can create an officenumber", () => {
    const Testofficenumber = 555-5555
    const employees = new Manager('Tommy', 41, "Tommy@gmail.com", Testofficenumber);
    expect(employees.officeNumber).toBe(Testofficenumber);
});

test("testing the office number()", () => {
    const Testofficenumber = 555-5555
    const employees = new Manager('Tommy', 41, "Tommy@gmail.com", 555-5555)
    expect(employees.getOfficeNumber()).toBe(Testofficenumber);
});

test('Test role for manager', () => {
    const TestRole = "Manager"
    const employees = new Manager('Tommy', 41, "Tommy@gmail.com", 555-5555);
    expect(employees.getRole()).toBe(TestRole);
})