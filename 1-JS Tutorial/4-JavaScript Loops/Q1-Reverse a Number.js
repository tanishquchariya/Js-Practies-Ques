// Q-1. Ask the user for a number and print
// whether each number from 1 to that number is even or odd.



// "Load Node.js's readline module and create a terminal interface where I can receive input from the keyboard and display output in the terminal."

// Full basic template
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter something: ", (answer) => {

//     console.log("You entered:", answer);

//     rl.close();
// });
// template end


// Code : 
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Give a number: ", (val) => {

//     val = Number(val);

//     for (let i = 1; i <= val; i++) {

//         if (i % 2 === 0) {
//             console.log(`${i} is even`);
//         } else {
//             console.log(`${i} is odd`);
//         }

//     }

//     rl.close();
// });



// Question - 2: Reverse a Number

// Input:
// 123456
// Output:
// 654321

// Code : 

let input = 123456
let ans = 0
while(input>0){
    let digit = input%10
    ans = ans * 10 + digit
    input = Math.floor(input/10)
}
console.log(ans);
// console.log(input);

