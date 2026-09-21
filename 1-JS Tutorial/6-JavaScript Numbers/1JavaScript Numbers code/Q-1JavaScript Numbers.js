// Question 1 — Numeric String + NaN + Number Operations

// Write a JavaScript program with these values:

// let a = "100";
// let b = "20";
// let c = "Apple";
// let d = 5;

// Perform the following:
// Add a and b as numbers and print the result.
// Try to add a and c as numbers.
// Check whether the result from step 2 is NaN.
// Multiply a by d and print the result.
// Finally, print the data type of the result from step 2.

// Expected concepts: numeric strings, arithmetic operations, NaN, isNaN(), typeof.

// Code :
let a = "100";
let b = "20";
let c = "Apple";
let d = 5;

let check1 =  Number(a) + Number(b)
console.log(check1);

let check2 = a + c
console.log(check2);
console.log(isNaN(check2));


let check3 = a * d
console.log(check3);

console.log(typeof(check1));
console.log(typeof(check2));
console.log(typeof(check3));




