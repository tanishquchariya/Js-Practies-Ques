/*
===========================================================
QUESTION 2 — STUDENT RESULT ANALYZER USING apply()
===========================================================

Create the following object:

const student = {
    name: "Tanishq",
    marks: [78, 85, 91, 67, 88]
};


Create a function:

function analyzeMarks(subject1, subject2, subject3, subject4, subject5) {
    // your code
}


The function should use:

this.name

and calculate:

1. Total marks
2. Average marks
3. Highest marks
4. Lowest marks
5. Number of subjects
6. Result


RESULT RULES:
-----------------------------------------------------------

Average >= 90 → "Excellent"

Average >= 75 → "Very Good"

Average >= 60 → "Good"

Average >= 40 → "Pass"

Otherwise → "Fail"


IMPORTANT:
-----------------------------------------------------------

Call the function using apply().

The marks are already stored inside:

student.marks

Therefore, pass the marks array through apply().

Think about:

analyzeMarks.apply(student, ???);


EXTRA CHALLENGE:
-----------------------------------------------------------

Do NOT use:

Math.max(...student.marks)

Do NOT use:

Math.min(...student.marks)

Instead, find the highest and lowest marks
using a loop.


CONCEPTS:
-----------------------------------------------------------

- this
- apply()
- Arrays
- Functions
- Loops
- if/else
- Numbers
- Math
- Objects

===========================================================
*/


// WRITE YOUR CODE FOR QUESTION 2 HERE
// code:
