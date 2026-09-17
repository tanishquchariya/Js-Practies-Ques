// 🔴 Question — Student Data & Array Structure Challenge

// Create a JavaScript program for a Student Data System.


// Part 1 — Array Constructor

// Create an array called marks1 using:

// new Array(3)

// Print marks1.
  
// Create another array called marks2 using:

// [3]

// Print marks2.

// Print the length of both arrays.

// 🎯 Your challenge

// Answer in comments:

// 1. What is the length of marks1?

// 2. What is the length of marks2?

// 3. Does marks1 contain the number 3?

// 4. Does marks2 contain the number 3?

// 5. Why are they different?


// --------------------------------------------------

// Part 2 — Normal Array

// Create an array called student.

// Store:

// "Rahul"
// 85
// "Computer Science"

// Print the complete student array.

// Print:

// student[0]
// student[1]
// student[2]

// Print the length of the student array.


// --------------------------------------------------

// Part 3 — Named Property

// Add the following named properties to student:

// student.name = "Rahul"

// student.age = 22

// Print:

// student.name
// student.age

// Print the length of student again.

// 🎯 Your challenge

// Answer in comments:

// 1. Did the length increase after adding name?

// 2. Did the length increase after adding age?

// 3. Is name a numeric array index?

// 4. Is age a numeric array index?

// 5. What is the difference between:
//    student[0]
//    and
//    student.name


// --------------------------------------------------

// Part 4 — Check Array or Object

// Check whether student is an array using:

// Array.isArray()

// Print the result.

// Check whether student is an array using:

// instanceof Array

// Print the result.


// Now create an object called studentInfo:

// {
//     name: "Amit",
//     age: 21,
//     course: "CSE"
// }

// Check whether studentInfo is an array using:

// Array.isArray()

// Print the result.

// Check whether studentInfo is an array using:

// instanceof Array

// Print the result.


// --------------------------------------------------

// 🎯 Final Challenge

// Answer these questions in comments:

// 1. What is the difference between:
//    new Array(3)
//    and
//    [3]

// 2. What does array.length represent?

// 3. What is a numeric array index?

// 4. What is a named property?

// 5. Does adding a named property change array.length?

// 6. Why are objects better when data has named properties
//    such as name, age, and course?

// 7. What does Array.isArray() return for student?

// 8. What does Array.isArray() return for studentInfo?

// 9. What does instanceof Array check?

// ⚠️ Important

// Do NOT use map(), filter(), reduce(), find(),
// or other advanced Array Methods.

// Use only the Array concepts you have learned.

// First predict the output.

// Then run the program in VS Code.

// Send me your complete code.

// Code :

// ==================================================
// Part 1 — Array Constructor
// ==================================================

const marks1 = new Array(3);

console.log(marks1);

const marks2 = [3];

console.log(marks2);

console.log("Length of marks1:", marks1.length);
console.log("Length of marks2:", marks2.length);


// Check whether they contain number 3

console.log("Does marks1 contain 3?", marks1.includes(3));
console.log("Does marks2 contain 3?", marks2.includes(3));


// Answers:
// 1. marks1 length = 3
// 2. marks2 length = 1
// 3. marks1 does NOT contain number 3
// 4. marks2 DOES contain number 3
// 5. new Array(3) creates an array with length 3,
//    while [3] creates an array containing the value 3.


// ==================================================
// Part 2 — Normal Array
// ==================================================

const student = [
    "Rahul",
    85,
    "Computer Science"
];

console.log(student);

console.log(student[0]);
console.log(student[1]);
console.log(student[2]);

console.log("Student array length:", student.length);


// ==================================================
// Part 3 — Named Properties
// ==================================================

student.name = "Rahul";
student.age = 22;

console.log("Student name:", student.name);
console.log("Student age:", student.age);

console.log("Student array length:", student.length);


// Answers:
// 1. Did length increase after adding name?
//    No.
//
// 2. Did length increase after adding age?
//    No.
//
// 3. Is name a numeric array index?
//    No.
//
// 4. Is age a numeric array index?
//    No.
//
// 5. student[0] accesses the element at numeric index 0.
//    student.name accesses the named property "name".


// ==================================================
// Part 4 — Check Array or Object
// ==================================================

console.log("Is student an array?");
console.log(Array.isArray(student));

console.log("Is student an Array using instanceof?");
console.log(student instanceof Array);


// ==================================================
// Student Info Object
// ==================================================

const studentInfo = {
    name: "Amit",
    age: 21,
    course: "CSE"
};


console.log("Is studentInfo an array?");
console.log(Array.isArray(studentInfo));

console.log("Is studentInfo an Array using instanceof?");
console.log(studentInfo instanceof Array);


// ==================================================
// Final Answers
// ==================================================

// 1. new Array(3) creates an array with length 3.
//    [3] creates an array containing the number 3.
//
// 2. array.length represents the array's length
//    based on its indexed elements / highest numeric index
//    plus one.
//
// 3. A numeric array index is a non-negative integer
//    used to access an array element, such as 0, 1, 2.
//
// 4. A named property is a property attached to an object
//    using a name, such as student.name.
//
// 5. Adding a named property does NOT change array.length.
//
// 6. Objects are better when data has named properties
//    such as name, age, and course because the data can
//    be accessed using meaningful property names.
//
// 7. Array.isArray(student) returns true.
//
// 8. Array.isArray(studentInfo) returns false.
//
// 9. instanceof Array checks whether the value is an
//    instance of the Array constructor.