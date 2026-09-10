// Q2 — Employee Salary Calculator
//
// Create an object called "employee" with the following properties:
//
// name: "Tanishq"
// position: "Developer"
// basicSalary: 40000
// bonus: 5000
// deduction: 2000
//
// Add a method called getNetSalary() that calculates and returns the
// employee's net salary using this formula:
//
// Net Salary = basicSalary + bonus - deduction
//
// Add another method called getDetails() that prints the employee's
// name, position, basic salary, bonus, deduction, and net salary.
//
// You must use "this" to access the object's properties inside the methods.
//
// Inside getDetails(), call getNetSalary() to get the net salary.
// Do not calculate the net salary again inside getDetails().
//
// Expected output:
//
// Name: Tanishq
// Position: Developer
// Basic Salary: 40000
// Bonus: 5000
// Deduction: 2000
// Net Salary: 43000
//
// After creating the object and methods, call getDetails() to display
// the complete employee information.

// Code : 

const employee = {
    name: "Tanishq",
    position: "Developer",
    basicSalary: 40000,
    bonus: 5000,
    deduction: 2000,
    getNetSalary : function () {
        let NetSalary = this.basicSalary + this.bonus - this.deduction
        return NetSalary
    },
    getDetails : function () {
        console.log(employee.name);
        console.log(employee.position);
        console.log(employee.basicSalary);
        console.log(employee.bonus);
        console.log(this.deduction);
        console.log(this.getNetSalary());
        // this === employee
        
    }

}
employee.getDetails()
