/*
===========================================================
QUESTION 1 — STUDENT RESULT GENERATOR
===========================================================

Create a Student Result System using a JavaScript Generator.

You are given:

*/
/*
const students = [
    {
        name: "Rahul",
        marks: 82,
        subject: "JavaScript"
    },
    {
        name: "Aman",
        marks: 67,
        subject: "JavaScript"
    },
    {
        name: "Neha",
        marks: 91,
        subject: "JavaScript"
    },
    {
        name: "Priya",
        marks: 74,
        subject: "JavaScript"
    },
    {
        name: "Rohit",
        marks: 58,
        subject: "JavaScript"
    }
];
*/

/*
===========================================================
PART 1 — CREATE A GENERATOR
===========================================================

Create:

function* studentGenerator() {

}

The generator must yield every student object
one by one.

Create:

const generator = studentGenerator();

Then call:

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

Observe the value and done properties.

===========================================================
*/


/*
===========================================================
PART 2 — GENERATOR + for...of
===========================================================

Use for...of to iterate over the generator.

Print:

Rahul - 82
Aman - 67
Neha - 91
Priya - 74
Rohit - 58

===========================================================
*/


/*
===========================================================
PART 3 — CONDITION INSIDE GENERATOR
===========================================================

Create another generator:

function* passedStudents() {

}

A student is considered passed when:

marks >= 75

Yield only the students who passed.

Expected:

Rahul - 82
Neha - 91

Use for...of to print them.

===========================================================
*/


/*
===========================================================
PART 4 — RESULT CATEGORY
===========================================================

Create another generator:

function* studentResults() {

}

For every student, yield a NEW object:

{
    name: "Rahul",
    marks: 82,
    result: "PASS"
}

Rules:

marks >= 75
    result = "PASS"

marks < 75
    result = "FAIL"

Print:

Rahul - 82 - PASS
Aman - 67 - FAIL
...

===========================================================
*/


/*
===========================================================
PART 5 — MANUAL next()
===========================================================

Create:

const resultGenerator = studentResults();

Call next() three times:

const result1 = resultGenerator.next();
const result2 = resultGenerator.next();
const result3 = resultGenerator.next();

Print:

result1.value
result1.done

result2.value
result2.done

result3.value
result3.done

Understand how the generator moves forward.

===========================================================
*/


/*
===========================================================
PART 6 — FINAL CHALLENGE
===========================================================

Create:

function* topperGenerator() {

}

Yield only students whose marks are
greater than or equal to 80.

Expected:

Rahul - 82
Neha - 91

Then calculate how many toppers exist.

Expected:

Topper Count: 2

IMPORTANT
-----------------------------------------------------------

Use:

✓ function*
✓ yield
✓ next()
✓ for...of
✓ if/else
✓ arrays
✓ objects

Do NOT use:

✗ map()
✗ filter()
✗ reduce()
✗ forEach()

===========================================================
*/
// Code :

const students = [
    {
        name: "Rahul",
        marks: 82,
        subject: "JavaScript"
    },
    {
        name: "Aman",
        marks: 67,
        subject: "JavaScript"
    },
    {
        name: "Neha",
        marks: 91,
        subject: "JavaScript"
    },
    {
        name: "Priya",
        marks: 74,
        subject: "JavaScript"
    },
    {
        name: "Rohit",
        marks: 58,
        subject: "JavaScript"
    }
];

function* studentGenerator() {
    
}