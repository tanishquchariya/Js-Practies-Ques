// 🟠 Question 1 — Employee Management System

// Create an Employee constructor function.

// Requirements

// Create a constructor:

// Employee(name, age, department, salary)

// Each employee should have:

// name
// age
// department
// salary
// country → default value should be "India"

// Add a prototype method
// Create:
// getDetails()

// It should return information like:

// Name: Tanishq
// Age: 22
// Department: Development
// Salary: 60000
// Country: India

// Add another prototype method
// Create:

// getAnnualSalary()

// It should calculate:

// salary × 12

// For example:

// Annual Salary: 720000

// Create 3 employees
// Create three different employee objects using new Employee().

// Example data:

// Employee 1 → Tanishq, 22, Development, 60000
// Employee 2 → Rahul, 25, Testing, 50000
// Employee 3 → Priya, 24, HR, 45000
// Individual property test

// Add a new property only to Employee 1:

// experience = 2

// Then check:

// Employee 1 experience → 2
// Employee 2 experience → ?
// Important 🚨

// You must use prototype for the methods.

// Do not put the methods directly inside the constructor.

function Employee(name, age, department, salary){
    this.EmployeeName = name;
    this.EmployeeAge = age;
    this.EmployeeDepartment = department;
    this.EmployeeSalary = salary;
    this.country = "India";

}


// Prototype Method 1: Get Employee Details
Employee.prototype.getDetails = function () {
    return `Name : ${this.EmployeeName}
    Age : ${this.EmployeeAge}
    Department : ${this.EmployeeDepartment}
    Salary : ${this.EmployeeSalary}
    Country : ${this.country}`
};

// Prototype Method 2: Get Annual Salary
Employee.prototype.getAnnualSalary = function () {
    return `Annual Salary: ${this.EmployeeSalary * 12}`;
};


// Create Employee Objects 
const Employee1 = new Employee("Tanishq",22,"Development",60000)
const Employee2 = new Employee("Rahul",25,"Testing",50000)
const Employee3 = new Employee("Ritesh",24,"HR",45000)

Employee1.experience = 2

// Check whether experience property exists
let ans = "experience" in Employee1;
if (ans) {
    console.log("Employee1 has experience property.");
}


// Check actual value

if (Employee1.experience === 2) {
    console.log("Employee1 experience is 2 years.");
}

// Display Employee Details

console.log(Employee1.getDetails());

console.log(Employee2.getDetails());

console.log(Employee3.getDetails());


// Display Annual Salary

console.log(Employee1.getAnnualSalary());

console.log(Employee2.getAnnualSalary());

console.log(Employee3.getAnnualSalary());


// Check experience property of other employees

console.log("Employee1 experience:", Employee1.experience);

console.log("Employee2 experience:", Employee2.experience);

console.log("Employee3 experience:", Employee3.experience);