/*
===========================================================
QUESTION 2 — STUDENT MARKS ANALYZER
===========================================================

Create a Student Marks Analyzer.

DATA
-----------------------------------------------------------
*/

const students = [
    {
        name: "Rahul",
        marks: [78, 85, 92, 69, 88]
    },
    {
        name: "Aman",
        marks: [65, 72, 68, 74, 70]
    },
    {
        name: "Neha",
        marks: [91, 95, 89, 94, 90]
    },
    {
        name: "Priya",
        marks: [55, 62, 58, 71, 64]
    },
    {
        name: "Rohit",
        marks: [82, 76, 85, 79, 88]
    }
];


/*
===========================================================
PART 1 — TOTAL MARKS
===========================================================

For every student:

Calculate the total marks.

Example:

Rahul Total: 412

Use iteration.

Do NOT use reduce().


===========================================================
PART 2 — AVERAGE MARKS
===========================================================

Calculate the average marks of every student.

Formula:

average = total / number of subjects

Use:

Math.round()

Round the average to the nearest integer.

Example:

Rahul Average: 82


===========================================================
PART 3 — HIGHEST MARK
===========================================================

Find the highest mark of each student.

Use:

Math.max()

Example:

Rahul Highest: 92


===========================================================
PART 4 — LOWEST MARK
===========================================================

Find the lowest mark of each student.

Use:

Math.min()

Example:

Rahul Lowest: 69


===========================================================
PART 5 — RESULT
===========================================================

Determine whether the student passed.

Rules:

average >= 75
    → "Excellent"

average >= 60
    → "Pass"

average >= 50
    → "Needs Improvement"

average < 50
    → "Fail"


Print:

Rahul
Average: 82
Highest: 92
Lowest: 69
Result: Excellent


===========================================================
PART 6 — RANDOM BONUS
===========================================================

Every student receives a random bonus between:

1 and 10 marks.

Create a function:

function getRandomBonus(min, max) {

    // your code

}


The function should return a random integer
between min and max.

Example:

const bonus = getRandomBonus(1, 10);


Use:

Math.random()
Math.floor()


Then:

finalMarks = average + bonus


Print:

Rahul
Average: 82
Bonus: 6
Final Score: 88


===========================================================
PART 7 — FINAL SCORE ANALYSIS
===========================================================

After calculating final scores:

Find:

1. Highest final score
2. Lowest final score
3. Difference between highest and lowest

Use:

Math.max()
Math.min()
Math.abs()


Example:

Highest Final Score: 97
Lowest Final Score: 62
Difference: 35


===========================================================
PART 8 — FINAL CHALLENGE
===========================================================

Create a function:

function analyzeStudent(student) {

    // your code

}


The function should receive ONE student object
and return a NEW object:

{
    name: "Rahul",
    total: 412,
    average: 82,
    highest: 92,
    lowest: 69,
    bonus: 6,
    finalScore: 88,
    result: "Excellent"
}


Then use a loop to call:

analyzeStudent()

for every student.

Store every returned object inside:

const results = [];


Finally print:

results


===========================================================

RULES
===========================================================

Use:

✓ Math.max()
✓ Math.min()
✓ Math.round()
✓ Math.abs()
✓ Math.random()
✓ Math.floor()
✓ arrays
✓ objects
✓ for...of
✓ if/else
✓ functions
✓ variables

Do NOT use:

✗ reduce()
✗ map()
✗ filter()
✗ forEach()

The goal is to strengthen your Math + Random
concepts together with your previously learned
JavaScript concepts.

===========================================================
*/