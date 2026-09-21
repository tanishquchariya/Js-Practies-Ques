// 🟠 Question 1 — Hoisting Detective

// Create a JavaScript program that analyzes the behavior of var, let, and const.

// Use the following code structure:

// Create a variable x using var and give it the value 10.

// Create a function called testHoisting().

// Inside the function, first print x.

// Then declare x using var and loggive it the value 20.

// Create an if block.

// Inside the if block, first print y.

// Then declare y using let and give it the value 30.

// After the declaration, print y again.

// After the if block, print x again.

// Finally, call testHoisting().
// Your task

// Write the complete JavaScript program and run it.

// Before running it, predict what will happen at each console.log().

// You need to determine:

// What happens when x is printed before its var declaration?
// Why does x behave that way?
// What happens when y is printed before its let declaration?
// Why is y different from x?
// Does the program continue after the first y statement, or does it stop with an error?

// ⚠️ Don't change var to let or const. The point is to test hoisting.

// Code : 
var x = 10
function testHoisting() {
    console.log(x); // undefined
    var x = 20
    if(true){
        // y exists here, but cannot be accessed yet
        console.log(y); // ❌ ReferenceError
        let y = 30
        console.log(y);
    }
    console.log(x);   
}

testHoisting()