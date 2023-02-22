const { default: expect } = require('expect');
const Employee = require('../lib/Employee')

test('Creates a new Employee' , () => {
    const employees = new Employee();
    expect(typeof (employees)).toBe('object');
})

test("testing the Name" , () => {
    const name = "Tommy";
    const employees = new Employee(name);
    expect(employees.name).toBe(name);
});

test("testing the id" , () => {
    const id = 41;
    const employees = new Employee('Tommy',id);
    expect(employees.id).toBe(id);
});

test("testing the Email", () => {
    const email = "Tommy@gmail.com"
    const employees = new Employee('Tommy', 41, email)
    expect(employees.email).toBe(email)
})

test("testing the getName()", () => {
    const TestName = "Tommy";
    const employees = new Employee(TestName)
    expect(employees.getName()).toBe(TestName);
})

test("testing the getId()", () => {
    const TestID = 41;
    const employees = new Employee("Tommy", TestID)
    expect(employees.getId()).toBe(TestID)

})

test("testing the getEmail()", () => {
    const TestEmail = "Tommy@gmail.com"
    const employees = new Employee("Tommy", 41, TestEmail);
    expect(employees.getEmail()).toBe(TestEmail)
});

test("Testing the getRole()", () => {
    const TestRole = "Employee"
    const employees = new Employee("Tommy", 41, "Tommy@gmail.com");
    expect(employees.getRole()).toBe(TestRole)
});