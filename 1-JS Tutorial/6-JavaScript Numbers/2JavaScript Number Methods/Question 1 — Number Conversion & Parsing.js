// Question 1 — Number Conversion & Parsing

// Copy this into VS Code:

// let a = "250.75";
// let b = "100px";
// let c = "45.89kg";
// let d = "Hello50";

// Write a program that:
// Convert a completely into a number using Number().
// Extract the integer part from b using Number.parseInt().
// Extract the decimal number from c using Number.parseFloat().
// Try to convert d using Number().
// Check whether the result from step 4 is NaN using Number.isNaN().
// Print the value and typeof of all four results.

// Don't use parseInt() or parseFloat() globally — use the Number. versions from this topic.

// Code : 
// let a = "250.75";
// let b = "100px";
// let c = "45.89kg";
// let d = "Hello50";

// a = Number(a)
// let check1 = Number.parseInt(b)
// let check2 = Number.parseFloat(c)
// d = Number(d)

// console.log(Number.isNaN(d));
// console.log(check1);
// console.log(check2);
// console.log(d);
// console.log(typeof(a));
// console.log(typeof(check1));
// console.log(typeof(check2));
// console.log(typeof(d));


// function myFunction(a,b) {
//     console.log(a+b);
    
// }


// let b = () => {
//     // return;
//     myFunction(5,6)
// }
// b()


let b = (a,b) => {
    console.log(a*b)
    // return a*b;
};
const result = b(1,2);
console.log(result)
// console.log("Hello");

// let a = 2 + 3
// console.log(a);

