// 🟡 Q2 — Palindrome Number

// Now write a program to check whether a number is a palindrome.

// A palindrome reads the same forward and backward.

// Example 1
// Input: 1221
// Output: Palindrome

// Because:

// 1221 → reverse → 1221
// Example 2
// Input: 12345
// Output: Not Palindrome

// Code : 
let i = 1221
let ans = i
let rev = 0
while(i>0){
    let digit = i%10
    rev = rev * 10 + digit
    i = Math.floor(i/10)
}
if(ans === rev){
    console.log('Palindrome');
    
}else {
    console.log('Not Palindrome'); 
}