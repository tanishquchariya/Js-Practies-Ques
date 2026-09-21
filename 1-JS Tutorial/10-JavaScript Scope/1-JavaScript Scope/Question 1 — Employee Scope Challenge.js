// 🟢 Question 1 — Employee Scope Challenge

// Create a JavaScript program for an Employee Management System.

// At the global level, create:

// companyName = "Tech Solutions" using let
// companyCode = "TS101" using const
// employeeCount = 5 using var

// Create a function called displayEmployee().

// Inside this function:

// Create a local variable employeeName = "Rahul" using let.
// Create a local variable salary = 50000 using const.
// Create a variable called employeeCount using var and give it the value 10.
// Inside an if block, create:
// bonus = 5000 using let
// department = "IT" using const
// employeeCount = 20 using var
// Print all variables inside the if block.
// After the if block, print employeeName, salary, and employeeCount.
// Outside the function, print the global companyName, companyCode, and employeeCount.
// Do not try to print bonus or department outside the if block.
// 🎯 Your challenge

// Before running the program, predict:

// Which employeeCount will be printed inside the if?
// Which employeeCount will be printed after the if?
// Which employeeCount will be printed outside the function?
// Why can bonus and department not be accessed outside the if block?
// Why does var employeeCount behave differently from let/const?

// Important: Don't just make it work. Use the exact let, const, and var requirements above.

// Expected output
// Tech Solutions
// TS101
// 5
// Rahul
// 50000
// 5000
// IT
// 20
// Rahul
// 50000
// 20

// Code : 

let companyName = "Tech Solutions"
const companyCode = "TS101"
var employeeCount = 5

function displayEmployee() {
    let employeeName = "Rahul"
    const salary = 50000
    var employeeCount = 10
    if(true){
        let bonus = 5000
        const department = "IT"
        var employeeCount = 20

        console.log(employeeName);
        console.log(salary);
        console.log(bonus);
        console.log(department);
        console.log(employeeCount);
        
    }
    console.log(employeeName);
    console.log(salary);
    console.log(employeeCount);
    
}
console.log(companyName);
console.log(companyCode);
console.log(employeeCount);
displayEmployee();


