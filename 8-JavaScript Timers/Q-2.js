// Question 2 — Repeated Counter

// Create a counter that prints:

// 1
// 2
// 3
// 4
// 5
// Requirements
// Start the counter from 1.
// Print one number every 1 second.
// Increase the number by 1 each time.
// When 5 is printed, stop the timer.
// Use setInterval().
// Use clearInterval().
// Use a function.
// Use console.log().
// Expected behavior
// After 1 second → 1
// After 2 seconds → 2
// After 3 seconds → 3
// After 4 seconds → 4
// After 5 seconds → 5
//                     ↓
//               Timer stops

// Code : 
let counter = 0
function myFunction(){
    
        clearInterval(timer)
    
}
let timer = setInterval(() => {
    counter++
    console.log(counter);
    if(counter === 5){
        myFunction()
    }
    
}, 1000);



