// 🟠 Q3 — Prime Number

// Write a program to check whether a number is prime or not.


let n = 30;

let isPrime = true;

for (let i = 2; i < n; i++) {

    if (n % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}