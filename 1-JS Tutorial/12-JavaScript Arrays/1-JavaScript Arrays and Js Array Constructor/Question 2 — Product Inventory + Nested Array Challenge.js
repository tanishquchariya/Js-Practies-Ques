// 🔴 Question 2 — Array Constructor & Named Properties

// Part 1 — new Array() vs Array Literal

// Create an array called numbers1 using:

// new Array(5)

// Print numbers1.

// Create another array called numbers2 using:

// [5]

// Print numbers2.

// Print the length of both arrays.

// Now answer in comments:

// What is the length of numbers1?

// What is the length of numbers2?

// Does numbers1 store the number 5?

// Does numbers2 store the number 5?

// Why are new Array(5) and [5] different?


// --------------------------------------------------

// Part 2 — Named Property

// Create an array called person.

// Store these values:

// "Rahul"
// "Developer"
// 25

// Print the array.

// Now add a named property:

// person.name = "Rahul"

// Print:

// person[0]

// person[1]

// person[2]

// person.name

// person.length

// Now answer in comments:

// What is person[0]?

// What is person.name?

// Does person.length increase after adding person.name?

// Is name a normal array index?


// --------------------------------------------------

// Part 3 — Check whether values are Arrays

// Use Array.isArray() to check whether person is an array.

// Print the result.

// Use instanceof Array to check whether person is an array.

// Print the result.

// Now create:

// const student = {
//     name: "Amit",
//     age: 22
// }

// Check whether student is an array using:

// Array.isArray()

// Print the result.

// Check whether student is an array using:

// instanceof Array

// Print the result.


// 🎯 Final Challenge

// Answer these questions in comments:

// 1. What is the difference between:
//    new Array(5)
//    and
//    [5]

// 2. What is an array index?

// 3. What is a named property?

// 4. Why does person.name not increase person.length?

// 5. What is the difference between an Array and an Object?

// 6. Which is better for storing:
//    name, age, city, salary?
//    Array or Object?

// 7. What does Array.isArray() check?

// 8. What does instanceof Array check?

// ⚠️ Important

// Do NOT use map(), filter(), reduce(), find(),
// or any advanced Array Methods.

// Use only the Array concepts you have learned.

// Part 1

const product = ["Laptop", "Mouse", "Keyboard"];

const prices = new Array(75000, 1200, 2500);

console.log(product);
console.log(prices);


// Part 2 — Product Details

const productDetails = [
    "Laptop",
    75000,
    {
        brand: "Dell",
        category: "Electronics"
    },
    ["Windows", "16GB RAM", "512GB SSD"]
];

console.log(productDetails[0]);        // Laptop
console.log(productDetails[1]);        // 75000
console.log(productDetails[2].brand);  // Dell
console.log(productDetails[3][1]);     // 16GB RAM
console.log(productDetails[3][2]);     // 512GB SSD


// Part 3 — new Array(5) vs [5]

const numbers = new Array(5);
const numbers2 = [5];

console.log(numbers);
console.log(numbers2);

console.log(numbers.length);
console.log(numbers2.length);


// Part 4 — Named Property

const person = ["Rahul", "Developer", 25];

person.name = "Rahul";

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(person.name);

console.log(person.length);


// Part 5 — Array Checking

console.log(Array.isArray(person));

console.log(person instanceof Array);


// Part 6 — Object

const student = {
    name: "Amit",
    age: 22
};

console.log(Array.isArray(student));

console.log(student instanceof Array);