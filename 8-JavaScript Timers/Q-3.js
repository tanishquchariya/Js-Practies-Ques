// Question 3 — Cancel the Delayed Message

// Create a program that schedules this message:

// Your account has been deleted!

// to appear after 5 seconds.

// But the program should cancel that message after 2 seconds.

// Requirements

// You must use:
// ✅ setTimeout()
// ✅ clearTimeout()
// ✅ A function
// ✅ A timer ID variable
// ✅ console.log()
// Expected output

// The message:

// Your account has been deleted!

// code : 
function myFunction() {
    console.log("First_timerrun");
    
    clearTimeout(timer)
}
let timer = setTimeout(() => {
    console.log("Your account has been deleted!");
}, 5000);


setTimeout(() => {
    myFunction()
}, 2000);
