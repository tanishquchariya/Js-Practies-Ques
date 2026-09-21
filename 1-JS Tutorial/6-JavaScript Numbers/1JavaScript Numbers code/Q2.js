// Question

// Given:

// let a = "50";
// let b = "10";
// let c = "Hello";
// Write a program that:
// Convert a and b into numbers and calculate their division.
// Try to calculate c / b.
// Check whether the result of step 2 is NaN.
// Calculate 100 / 0 and store it in a variable.
// Check whether that result is Infinity.
// Print the typeof of:
// the division result from step 1
// the result from step 2
// the Infinity result
// Expected concepts
// Number()
// /
// NaN
// isNaN()
// Infinity
// typeof

// Code: 
let a = "50";
let b = "10";
let c = "Hello";

let check1 = Number(a) / Number(b)

let check2 = c/b
console.log(isNaN(check2));

let check3 = 100/0
console.log(check3===Infinity);

console.log(typeof(check1));
console.log(typeof(check2));
console.log(typeof(check3));

