// Question 2

// Use:

// let price = 1234.56789;

// Find and print:

// price converted to a string → toString()
// price with 2 decimal places → toFixed()
// price with 5 significant digits → toPrecision()
// price in exponential notation, with 3 digits after decimal → toExponential()
// price using valueOf(), and also print its typeof

// Format your output like:

// toString: ...
// toFixed: ...
// toPrecision: ...
// toExponential: ...
// valueOf: ...
// type: ...

// Code :

let price = 1234.56789;
let ch1 = price.toString()
// price.toFixed(2)
// price.toPrecision(5)
// price.toExponentail(3)
// price.valueOf()

console.log(typeof(ch1));
console.log(typeof(price.toFixed(2)));
console.log(typeof(price.toPrecision(5)));
console.log(typeof(price.toExponential(3)));
console.log(typeof(price.valueOf()));
