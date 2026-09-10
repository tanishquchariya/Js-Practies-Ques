// Employee Salary Calculator

// Create an arrow function called:

// calculateSalary

// It should take 4 parameters:

// name, basicSalary, bonusPercentage, taxPercentage

// Your function must calculate:
// Bonus amount
// bonus = basicSalary × bonusPercentage / 100
// Gross salary
// grossSalary = basicSalary + bonus
// Tax amount
// tax = grossSalary × taxPercentage / 100
// Final salary
// finalSalary = grossSalary - tax
// Return the final salary.
// 🧪 Test Data

// Use these 3 employees:

// Rahul    50000    10    5
// Priya    60000    15    10
// Amit     40000    5     8

// So you should call your function 3 times.

// Expected output
// Rahul Final Salary: 52250
// Priya Final Salary: 62100
// Amit Final Salary: 38640


let name1 = "Rahul"
let name2 = "Priya"
let name3 = "Amit"

let basicSalary1 = 50000
let basicSalary2 = 60000
let basicSalary3 = 40000

let bonusPercentage1 = 10
let bonusPercentage2 = 15
let bonusPercentage3 = 5

let taxPercentage1 = 5
let taxPercentage2 = 10
let taxPercentage3 = 8


const calculateSalary = (name, basicSalary, bonusPercentage, taxPercentage) => {
    let bonus = basicSalary * bonusPercentage / 100
    let grossSalary = basicSalary + bonus
    let tax = grossSalary * taxPercentage / 100
    let finalSalary = grossSalary - tax
    return finalSalary

}

console.log(calculateSalary(name1, basicSalary1, bonusPercentage1, taxPercentage1));
console.log(calculateSalary(name1, basicSalary2, bonusPercentage2, taxPercentage2));
console.log(calculateSalary(name1, basicSalary3, bonusPercentage3, taxPercentage3));
