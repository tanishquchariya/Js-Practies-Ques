// 🔥 Question 1 — Medium

// Write a JavaScript function called calculate that:

// Takes three parameters:
// a
// b
// operation
// operation can be:
// "add" → return a + b
// "subtract" → return a - b
// "multiply" → return a * b
// "divide" → return a / b

// If the operation is anything else, return:

// Invalid operation
// Call the function four times with different operations and print the results.
// Example expected output
// 15
// 5
// 50
// 2
function myFunc(a, b, operation) {
    // console.log(a operation b);
    if (operation === '+') {
        console.log(a + b);

    } else if (operation === '-') {
        console.log(a - b);

    }
    else if (operation === '*') {
        console.log(a * b);

    } else if (operation === '/') {
        console.log(a / b);

    } else {
        console.log("Invalid operation");

    }
}

myFunc(5, 10, '+')
myFunc(10, 5, '-')
myFunc(5, 10,'*')
myFunc(10, 5,'/')