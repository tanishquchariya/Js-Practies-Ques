// =====================================================
// QUESTION 1 — Student Course Management System
// =====================================================

// Create a JavaScript program to manage students enrolled
// in different courses using JavaScript Set.

// -----------------------------------------------------
// Step 1 — Create Sets
// -----------------------------------------------------

// Create a Set called webStudents containing:
//
// "Rahul"
// "Aman"
// "Priya"
// "Neha"
// "Rohit"
// "Priya"
//
// Notice that "Priya" appears twice.

// Create another Set called dsaStudents containing:
//
// "Aman"
// "Rohit"
// "Karan"
// "Simran"
// "Priya"


// -----------------------------------------------------
// Step 2 — Add Students
// -----------------------------------------------------

// Add "Vikas" to webStudents.

// Try adding "Priya" to webStudents again.

// Your program should demonstrate that a Set does not
// store duplicate values.


// -----------------------------------------------------
// Step 3 — Check Students
// -----------------------------------------------------

// Check whether "Rahul" exists in webStudents.

// Check whether "Karan" exists in webStudents.

// Print both results using has().


// -----------------------------------------------------
// Step 4 — Set Size
// -----------------------------------------------------

// Print the total number of unique students in webStudents.

// Print the total number of unique students in dsaStudents.


// -----------------------------------------------------
// Step 5 — Difference
// -----------------------------------------------------

// Find students who are enrolled in webStudents
// but NOT enrolled in dsaStudents.
//
// Store the result in a new Set called webOnly.

// Use the difference() method.


// Also find students who are enrolled in dsaStudents
// but NOT enrolled in webStudents.
//
// Store the result in a new Set called dsaOnly.


// -----------------------------------------------------
// Step 6 — List Elements
// -----------------------------------------------------

// Use a for...of loop to print all students in webOnly.

// Use a for...of loop to print all students in dsaOnly.


// -----------------------------------------------------
// Step 7 — values() and keys()
// -----------------------------------------------------

// Use values() to list all students in webStudents.

// Use keys() to list all students in webStudents.

// Observe the output carefully.


// -----------------------------------------------------
// Step 8 — Set Type
// -----------------------------------------------------

// Print the result of:
//
// typeof webStudents
//
// Then check whether webStudents is actually a Set
// using instanceof.


// -----------------------------------------------------
// Expected output should contain information like:
//
// Web students count:
// DSA students count:
//
// Is Rahul in Web Development:
// Is Karan in Web Development:
//
// Students only in Web Development:
// ...
//
// Students only in DSA:
// ...
//
// Web students using values():
// ...
//
// Web students using keys():
// ...
//
// Type:
// Is webStudents a Set:
// -----------------------------------------------------

// IMPORTANT:
// Do NOT use arrays to solve this problem.
// Use Set and Set methods.

// Code : 

const webStudents = new Set(["Rahul",
    "Aman",
    "Priya",
    "Neha",
    "Rohit",
    "Priya"]);


const dsaStudents = new Set(["Aman",
    "Rohit",
    "Karan",
    "Simran",
    "Priya"]);

webStudents.add("Vikas")
webStudents.add("Priya")

