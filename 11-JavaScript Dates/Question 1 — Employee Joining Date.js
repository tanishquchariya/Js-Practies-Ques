// 🟠 Question 1 — Company Project Date System

// Create a JavaScript program for a Company Project Management System.

// Create a Date object called projectStart.

// The project started on:

// 24 November 2023
// Time: 10:30:00 AM

// Create the date using the numeric Date constructor:
// new Date(year, month, day, hours, minutes, seconds)

// Print projectStart using:

// 1. toString()

// 2. toDateString()

// 3. toUTCString()

// 4. toISOString()

// Now create another Date object called projectReview.

// The project review date is:

// 15 March 2025
// Time: 3:45:30 PM

// Create projectReview using the numeric Date constructor.

// Print projectReview using toString().

// 🎯 Your challenge

// JavaScript months start from 0.

// January = 0
// February = 1
// March = 2
// ...
// November = 10
// December = 11

// Carefully choose the correct month number.

// Also make sure you understand what each of these methods does:

// toString()
// toDateString()
// toUTCString()
// toISOString()

// Before running the program, predict the month and date
// that JavaScript will create.

// Do NOT use any external library.

// Code : 

const projectStart = new Date(2023,10,24,10,30,0)

console.log(projectStart);
console.log(projectStart.toString());
console.log(projectStart.toDateString());
console.log(projectStart.toUTCString());
console.log(projectStart.toISOString());

// let toStr = projectStart.toString()
// let todate = projectStart.toDateString()
// let toUTC = projectStart.toUTCString()
// let toISO = projectStart.toISOString()

const projectReview = new Date(2025,2,15,3,45,30)
console.log(projectReview.toString());





