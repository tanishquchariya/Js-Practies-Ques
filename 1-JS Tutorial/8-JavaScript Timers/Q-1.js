// Question 1 — Delayed Greeting

// Create a function called:

// greetUser

// It should print:

// Hello Rahul!

// after 3 seconds.

// Conditions
// Use setTimeout()
// Create a function
// Call the function through setTimeout()
// Do not use setInterval()
// Expected output

// When you run the program, nothing should appear immediately.

// After 3 seconds:

// Hello Rahul!


// Code : 
const greetUser = () =>{
    setTimeout(()=>{
        console.log('Hello Rahul!');

    },3000);
}
greetUser();