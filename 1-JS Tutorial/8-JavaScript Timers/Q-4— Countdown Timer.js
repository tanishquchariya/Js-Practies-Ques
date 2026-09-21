// 🔴 Q4 — Countdown Timer

// Now let's combine everything you've learned.

// Create a countdown that prints:

// 5
// 4
// 3
// 2
// 1
// Time's up!
// Requirements
// Use setInterval()
// Use clearInterval()
// Start from 5
// Print one number every 1 second
// When the counter reaches 1, stop the interval
// Then print "Time's up!"
// Use a function

// Don't use setTimeout() for the countdown.

// Code : 

function myFunction() {
    console.log("Time's up!");

    clearInterval(timer)
}
let cout = 5
let timer = setInterval(() => {
    console.log(cout);
    if (cout === 1) {
        myFunction()
    }
    cout--
}, 1000);