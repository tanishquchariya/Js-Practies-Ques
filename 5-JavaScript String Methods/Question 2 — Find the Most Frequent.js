// Question 2 — Find the Most Frequent Character

// Now let's increase the difficulty.

// Given:

// let str = "javascript is amazing";

// Write a program that finds the character that appears most frequently in the string.

// Rules
// Ignore spaces.
// Treat uppercase and lowercase as the same.
// Count every character.
// Print the character and its frequency.

// For example:
// let str = "hello world";

// Expected result:
// Most frequent character: l
// Frequency: 3

// Code

let str = "javascript is amazing";

let word = str.split("")
let maxCount = 0;
let maxChar = "";
for (let i = 0; i < word.length; i++) {
    let cout = 0;
    if (word[i] === " ") {
        continue
    }
    for (let j = 0; j < word.length; j++) {
        if (word[i] === word[j]) {
            cout++
        }
    }

    // maxCount = Math.max(cout,maxCount)
    if (cout > maxCount) {
        maxCount = cout;
        maxChar = word[i]
    }
}
console.log(`"Most Frequent Character : ${maxChar}"`);
console.log(`"Frequency:" ${maxCount}`);
