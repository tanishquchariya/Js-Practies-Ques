// Question 3 — First Non-Repeating Character

// Given:

// let str = "aabbcddce";

// Find the first character that appears exactly once.

// Expected output:

// First non-repeating character: e

// Code : 

let str = "aabbcddce";
let word = str.split("")
let minCount;
let minChar = "";
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
    if (cout == 1) {
        minCount = cout;
        minChar = word[i]
        break
    }
}
console.log(`"First non-repeating character : ${minChar}"`);
console.log(`"Frequency:" ${minCount}`);
