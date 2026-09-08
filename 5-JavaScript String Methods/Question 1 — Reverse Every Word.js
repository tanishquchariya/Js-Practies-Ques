// Question 1 — Reverse Every Word

// Write a JavaScript program that takes this string:

// let str = "JavaScript is very powerful";

// and produces:

// tpircSavaJ si yrev lufrewop

// code :

let str = "JavaScript is very powerful";
let word = str.split(" ");
let ans = []
for (let i = 0; i < word.length; i++) {

    let char = word[i].split("");
    char.reverse();
    let revword = char.join("")
    ans.push(revword)
}
console.log(ans.join(" "));
