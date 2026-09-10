// Q5 — Smart Exam Timer

// Create a 10-second Exam Timer.

// When the program starts, print:

// Exam Started!

// Then start a countdown:

// Time remaining: 10
// Time remaining: 9
// Time remaining: 8
// ...
// Time remaining: 1

// When the timer reaches 0, print:

// Time's up! Exam submitted.
// 🚨 Additional requirements

// Your program must also have an auto-submit warning.

// After 5 seconds, print:

// Warning: 5 seconds remaining!

// After 8 seconds, print:

// Hurry up! Only 2 seconds remaining!

// The exam should automatically submit at 10 seconds.

// Code : 

// function myFunction() {
//     clearInterval(timer)
// }
// function myFunction2(params) {
//     clearTimeout(timer2)
// }
// let timer2 = setTimeout(() => {
//     console.log("Exam Started!");
// }, 1000);
// let couter = 10
// let timer = setInterval(() => {
//     if (couter === 0) {
//         console.log("Time's up! Exam submitted.");
//         myFunction()

//     } else if (couter === 5) {
//         console.log("Warning: 5 seconds remaining!");

//     } else if (couter === 2) {
//         console.log("Hurry up! Only 2 seconds remaining!");
//     } else if (couter !== 5 && couter !== 2) {
//         console.log(`Time remaining: ${couter}`);
//     }
//     couter--

// }, 1000);

// code : 
// Q5 — Smart Exam Timer

console.log("Exam Started!");

let counter = 10;


// Countdown
let timer = setInterval(() => {

    if (counter > 0) {
        console.log(`Time remaining: ${counter}`);
        counter--;
    }

}, 1000);


// Warning after 5 seconds
let timer2 = setTimeout(() => {
    console.log("Warning: 5 seconds remaining!");
}, 5000);


// Warning after 8 seconds
let timer3 = setTimeout(() => {
    console.log("Hurry up! Only 2 seconds remaining!");
}, 8000);


// Automatic submit after 10 seconds
let timer4 = setTimeout(() => {

    console.log("Time's up! Exam submitted.");

    clearInterval(timer);

    clearTimeout(timer2);
    clearTimeout(timer3);

}, 10000);