/*
===========================================================
QUESTION 1 — EMPLOYEE SALARY CALCULATOR
===========================================================

Create an Employee Management System using objects
and functions.

Given data:

const employee1 = {
    name: "Rahul",
    salary: 45000,
    bonus: 5000
};

const employee2 = {
    name: "Priya",
    salary: 60000,
    bonus: 8000
};

const employee3 = {
    name: "Aman",
    salary: 52000,
    bonus: 6000
};


Create a function:

function calculateSalary(bonusPercentage, taxPercentage) {
    // your code
}


The function should:

1. Use this.salary.
2. Use this.bonus.
3. Calculate bonus amount:

   bonusAmount = salary × bonusPercentage / 100

4. Calculate tax amount:

   taxAmount = salary × taxPercentage / 100

5. Calculate final salary:

   finalSalary = salary + bonus + bonusAmount - taxAmount

6. Return an object:

{
    name: "...",
    baseSalary: ...,
    bonusAmount: ...,
    taxAmount: ...,
    finalSalary: ...
}


REQUIREMENT:
-----------------------------------------------------------

Call the same function for all three employees using call().

Use these percentages:

employee1 → bonus 10%, tax 5%
employee2 → bonus 15%, tax 8%
employee3 → bonus 12%, tax 6%


EXTRA CHALLENGE:
-----------------------------------------------------------

Store all employees in an array and use a loop to
process them.

CONCEPTS:
-----------------------------------------------------------

- Objects
- this
- Functions
- call()
- Arrays
- Loops
- Arithmetic operators
- Return values

DO NOT COPY A SOLUTION FROM THE INTERNET.
Solve it yourself.
===========================================================
*/


// WRITE YOUR CODE FOR QUESTION 1 HERE
// Code :


const employee1 = {
    name: "Rahul",
    salary: 45000,
    bonus: 5000
};

const employee2 = {
    name: "Priya",
    salary: 60000,
    bonus: 8000
};

const employee3 = {
    name: "Aman",
    salary: 52000,
    bonus: 6000
};

function calculateSalary(bonusPercentage,taxPercentage) {
    let bonusAmount = this.salary * bonusPercentage / 100
    let taxAmount = this.salary * taxPercentage / 100
    let finalSalary = this.salary + this.bonus + bonusAmount - taxAmount
    return {
        "name" : this.name,
        "baseSalary" : this.salary,
        "bonusAmount" : bonusAmount,
        "taxAmount" : taxAmount,
        "finalSalary" : finalSalary
    }
}

const result1 = calculateSalary.call(employee1, 10, 5);
const result2 = calculateSalary.call(employee2, 15, 8);
const result3 = calculateSalary.call(employee3, 12, 6);

console.log(result1);
console.log(result2);
console.log(result3);
