// 🟠 Question 1 — Employee Salary System

// Create a JavaScript program for an Employee Salary Management System.

// At the global level, create:

// var employeeName = "Rahul";
// let salary = 50000;
// const company = "Tech Solutions";

// Create a function called:

// calculateSalary()

// Inside the function:

// Create a var variable called salary with value 60000.
// Create a let variable called bonus with value 5000.
// Create a const variable called taxRate with value 10.
// Create an if block that checks whether:
// salary > 50000
// Inside the if block:
// Reassign bonus to 10000.
// Create a const variable called message with value "High Salary".
// Create a var variable called status with value "Eligible".
// Print inside the if block:
// employeeName
// salary
// bonus
// taxRate
// message
// status
// After the if block, print:
// salary
// bonus
// status
// Outside the function, print:
// employeeName
// salary
// company
// 🎯 Your challenge

// Before running, predict:

// Which salary is printed inside the function: 50000 or 60000?
// Why?
// Can bonus be reassigned?
// Can taxRate be reassigned?
// Can status be accessed outside the if block?
// What happens if you try to print message outside the if block?
// What happens to the global salary?

// Don't just make the program run—understand which variable each console.log() is accessing.

// Code : 

var employeeName = "Rahul"
let salary = 50000
const company = "Tech Solutions"

function calculateSalary() {
    var salary = 90000
    let bonus = 7000
    const taxRate  = 10
    if(salary>50000){
        bonus = 60000
        const message = "High Salary"
        var status = "Eligible"
        console.log(employeeName);
        console.log(salary);
        console.log(bonus);
        console.log(taxRate);
        console.log(message);
        console.log(status);    
    }
    console.log(salary);
    console.log(bonus);
    console.log(status);
}
console.log(employeeName);
console.log(salary);
console.log(company);

calculateSalary()


