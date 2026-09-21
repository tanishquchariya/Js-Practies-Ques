// 🔴 Q4 — Armstrong Number

// Now your hard question:

// Write a JavaScript program to check whether a number is an Armstrong number.

// Example
// Input: 153

// Number of digits = 3

// Calculate:

// 1³ + 5³ + 3³
// = 1 + 125 + 27
// = 153

// Therefore:

// Armstrong
// Another example
// Input: 123
// Output: Not Armstrong

// code : 

let n = 1634
let copy = n
let temp = n
let ans = 0
let cout = 0

while (temp > 0) {
    cout++
    temp = Math.floor(temp / 10)
}
while (n > 0) {
    let digit = n % 10
    let rev = digit ** cout
    ans += rev
    n = Math.floor(n / 10)
}
if (ans === copy) {
    console.log('Armstrong');

} else {
    console.log('Not Armstrong');

}