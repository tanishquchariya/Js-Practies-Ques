// 🟠 Question 1 — Employee Performance Array System

// Create a JavaScript program for an Employee Performance System.

// Create an array called employees using an ARRAY LITERAL.

// Store these employee names:

// "Rahul"
// "Amit"
// "Priya"
// "Neha"
// "Karan"

// Print the complete array.

// Print:

// 1. The first employee.

// 2. The last employee.

// 3. The total number of employees using length.

// Now change:

// "Amit"

// to:

// "Rohit"

// Print the updated array.

// Now add a new employee:

// "Sneha"

// using push().

// Print the updated array and its length.

// Now use a for loop to print every employee.

// Then use forEach() to print every employee.

// Convert the array into a string using:

// toString()

// Print the result.

// Convert the array into JSON format using:

// JSON.stringify()

// Print the result.

// Now check whether employees is actually an array using:

// Array.isArray()

// Print the result.

// Also check the same thing using:

// instanceof Array

// Print the result.


// 🎯 Your challenge

// Before running, predict:

// 1. What will employees[0] return?

// 2. What will employees[employees.length - 1] return?

// 3. What will employees.length be after push()?

// 4. What is the difference between toString()
//    and JSON.stringify()?

// 5. What does Array.isArray(employees) return?

// 6. What does employees instanceof Array return?

// 7. Why does an array use indexes starting from 0?

// 8. What happens to the array when you change
//    employees[1]?

// 9. Why can const employees still be changed using
//    employees.push()?

// 10. Explain the difference between:
//     employees[0]
//     employees.length
//     employees[employees.length - 1]

// ⚠️ Important

// Do NOT use map(), filter(), reduce(), find(),
// or any other Array Methods that you have not learned yet.

// Use only the concepts covered in your Arrays PDF.

// code : 
const employees = ["Rahul",
"Amit",
"Priya",
"Neha",
"Karan"]

console.log(employees);
console.log(employees[0]);
console.log(employees[employees.length - 1]);
console.log(employees.length);

employees[1] = "Rohit"
console.log(employees);
employees.push("Sneha")

console.log(employees);
console.log(employees.length);

for (let i = 0; i < employees.length; i++) {
    const empName = employees[i];
    console.log(empName);
}

employees.forEach(myfunction);
function myfunction(value) {
    console.log(value);
    
}

let ans1 = employees.toString()
console.log(ans1);

let ans2 = JSON.stringify(employees)
console.log(ans2);

let ans3 = Array.isArray(employees)
console.log(ans3);

let ans4 = employees instanceof Array 
console.log(ans4);



