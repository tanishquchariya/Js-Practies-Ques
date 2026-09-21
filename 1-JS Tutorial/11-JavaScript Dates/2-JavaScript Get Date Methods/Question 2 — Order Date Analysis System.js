// 🔴 Question 2 — Order Date Analysis System

// Create a JavaScript program for an Online Order Analysis System.

// Create a Date object called orderDate.

// The order was placed on:

// 25 December 2024
// Time: 6:30:45 PM

// Create orderDate using an ISO date-time string.

// Print orderDate using:
  
// toString()

// toISOString()


// Now use the following GET methods on orderDate:

// getFullYear()
// getMonth()
// getDate()
// getDay()
// getHours()
// getMinutes()
// getSeconds()

// Print every value with a meaningful label.


// Now use the UTC GET methods:

// getUTCFullYear()
// getUTCMonth()
// getUTCDate()
// getUTCDay()
// getUTCHours()
// getUTCMinutes()
// getUTCSeconds()

// Print every UTC value with a meaningful label.


// Now use:

// getTimezoneOffset()

// Print the timezone offset.


/* -------------------------------------------------- */

// Now work with Date.parse().

// Create a variable called parsedDate.

// Use Date.parse() with:

// "March 21, 2012"

// Store the returned value inside parsedDate.

// Print parsedDate.

// Remember:
// Date.parse() returns the number of milliseconds
// between the given date and January 1, 1970.


// Now create a Date object called convertedDate.

// Use the milliseconds stored in parsedDate
// to create convertedDate.

// Print convertedDate using:

// toString()

// toISOString()


// 🎯 Your challenge

// Before running the program, predict:

// 1. What will getFullYear() return?

// 2. What will getMonth() return?
//    Remember: January = 0.

// 3. What will getDate() return?

// 4. What will getDay() return?
//    Remember: Sunday = 0.

// 5. What will getHours() return in your local time?

// 6. Will getHours() and getUTCHours() necessarily
//    return the same value?

// 7. What does getTimezoneOffset() represent?

// 8. What type of value does Date.parse() return?
//    Date object or milliseconds?

// 9. What date will convertedDate represent?

// 10. Why can the result of Date.parse() be passed
//     to new Date()?


// ⚠️ Important

// Do NOT manually calculate the UTC values.

// Let JavaScript calculate them using the UTC methods.

// Do NOT use any external library.

// Use only the Date methods and Date formats
// covered in your PDFs.

// First write your code.

// Then predict the output.

// Then run it in VS Code.

// Send me your code when you finish.

// code : 
const orderDate = new Date("2024-11-25T6:30:45Z")
console.log(orderDate.toString());
console.log(orderDate.toISOString());

console.log(`Year : ${orderDate.getFullYear()}`)
console.log(`Month : ${orderDate.getMonth()}`)
console.log(`Date : ${orderDate.getDate()}`)
console.log(`Hours : ${orderDate.getHours()}`)
console.log(`Minutes : ${orderDate.getMinutes()}`)
console.log(`Seconds : ${orderDate.getSeconds()}`)
console.log(`Year : ${orderDate.getFullYear()}`)

onsole.log(`Year : ${orderDate.getUTCFullYear()}`)
console.log(`Month : ${orderDate.getUTCMonth()}`)
console.log(`Date : ${orderDate.getUTCDate()}`)
console.log(`Hours : ${orderDate.getUTCDay()}`)
console.log(`Minutes : ${orderDate.getUTCHours()}`)
console.log(`Seconds : ${orderDate.getUTCMinutes()}`)
console.log(`Year : ${orderDate.getUTCSeconds()}`)

let diff = orderDate.getTimezoneOffset()
console.log(diff);

let parsedDate = Date.parse("March 21, 2012")
console.log(parsedDate);
