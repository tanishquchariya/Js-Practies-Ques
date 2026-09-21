// 🔴 Question 2 — Online Order Date System

// Create a JavaScript program for an Online Order System.

// An order was placed on:

// 18 October 2024
// Time: 2:30:45 PM

// Create a Date object called orderDate using:

// new Date(year, month, day, hours, minutes, seconds)

// Print orderDate using:

// 1. toString()

// 2. toDateString()

// 3. toUTCString()

// 4. toISOString()


// Now create another Date object called deliveryDate.

// The delivery date is:

// 5 January 2025
// Time: 6:15:20 PM

// Create deliveryDate using the numeric Date constructor.

// Print deliveryDate using toString() and toISOString().


// Now create a Date object called startingDate using:

// new Date(0)

// Print startingDate using toString().


// Now create another Date object called futureDate using:

// new Date(1000000000000)

// Print futureDate using toString().


// Finally, create another Date object called overflowDate.

// Use:

// new Date(2024, 12, 1)

// Print overflowDate using toString().


// 🎯 Your challenge

// Before running the program, predict:

// 1. What month number will you use for October?

// 2. What month number will you use for January?

// 3. What date does new Date(0) represent?

// 4. What date/time does new Date(1000000000000) represent?

// 5. What happens when you use month 12?

// 6. Does JavaScript give an error for month 12?

// 7. What year and month will overflowDate represent?


// 🧠 Important

// Remember that JavaScript months are numbered:

// January    = 0
// February   = 1
// March      = 2
// April      = 3
// May        = 4
// June       = 5
// July       = 6
// August     = 7
// September  = 8
// October    = 9
// November   = 10
// December   = 11


// Also remember:

// JavaScript Date objects can be created using milliseconds.

// 0 milliseconds represents the starting point:
// January 1, 1970.

// Do NOT use any external library.

// First predict the output.

// Then run the program in VS Code.

// Send me your code after you finish.

// Code : 

const orderDate = new Date(2024,9,18,2,30,45)

console.log(orderDate);
console.log(orderDate.toString());
console.log(orderDate.toDateString());
console.log(orderDate.toUTCString());
console.log(orderDate.toISOString());

const deliveryDate = new Date(2025,0,5,6,15,20)

console.log(deliveryDate.toString());
console.log(deliveryDate.toISOString());

const startingDate = new Date(0)
console.log(startingDate.toString());

const futureDate = new Date(1000000000000)
console.log(futureDate.toString());

const overflowDate = new Date(2024,12,1)
console.log(overflowDate.toString());


