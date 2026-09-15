// 🟠 Question 1 — Employee Date Information System

// Create a JavaScript program for an Employee Date Information System.

// Create a Date object called joiningDate.

// The employee joined the company on:

// 15 August 2022
// Time: 10:30:45 AM

// Create joiningDate using the numeric Date constructor.

// Then use the following Date GET methods to extract information:

// getFullYear()
// getMonth()
// getDate()
// getDay()
// getHours()
// getMinutes()
// getSeconds()
// getMilliseconds()

// Print each result with a meaningful label.

// Example format:

// Year: ...
// Month: ...
// Date: ...
// Day: ...
// Hours: ...
// Minutes: ...
// Seconds: ...
// Milliseconds: ...

// Now create an array called months containing:

// January, February, March, April, May, June,
// July, August, September, October, November, December

// Use getMonth() to get the month number and use that number
// to print the actual month name.

// For example:

// Month Number: 7
// Month Name: August

// Now create another array called days containing:

// Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday

// Use getDay() to get the weekday number and use that number
// to print the actual weekday name.

// Finally, use:

// getTime()

// to print the number of milliseconds since January 1, 1970.

// 🎯 Your challenge

// 1. Why does getMonth() return 7 for August?

// 2. Why does getDay() return a number between 0 and 6?

// 3. What number should getDay() return if joiningDate is Monday?

// 4. What is the difference between getDate() and getDay()?

// 5. What does getTime() return?

// 6. Does getTime() return the year?

// 7. Does getMonth() return 8 for August or 7?

// Do NOT use any external library.

// Use the Date object and Date GET methods from the PDF.

// Code : 

const joiningDate = new Date(2022,7,15,10,30,45)

console.log(`Year : ${joiningDate.getFullYear()}`);
console.log(`Month : ${joiningDate.getMonth()}`);
console.log(`Date : ${joiningDate.getDate()}`);
console.log(`Day : ${joiningDate.getDay()}`);
console.log(`Hours : ${joiningDate.getHours()}`);
console.log(`Minutes : ${joiningDate.getMinutes()}`);
console.log(`Seconds : ${joiningDate.getSeconds()}`);
console.log(`Milliseconds : ${joiningDate.getMilliseconds()}`);

const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]

let mont = joiningDate.getMonth()
let ans = months[mont]

console.log(`Month Number: ${mont}`);
console.log(`Month Name: ${ans}`);

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dayNo = joiningDate.getDay()
let ans2 = days[dayNo]
console.log(`Day Number: ${dayNo}`);
console.log(`Day Name: ${ans2}`);

console.log(`Time in milliseconds: ${joiningDate.getTime()}`);