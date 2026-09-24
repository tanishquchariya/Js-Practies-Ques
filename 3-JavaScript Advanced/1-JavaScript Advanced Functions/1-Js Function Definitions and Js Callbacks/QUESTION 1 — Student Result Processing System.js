/*
===========================================================
QUESTION 1 — STUDENT RESULT PROCESSING SYSTEM
===========================================================

Create a JavaScript program to process student results
using a CALLBACK FUNCTION.

You have the following students:

Rahul  → 78
Aman   → 45
Neha   → 91
Priya  → 63
Rohit  → 32


PART 1 — CREATE STUDENTS ARRAY
-----------------------------------------------------------

Create an array called:

students

Store each student as an object containing:

name
marks

Example:

{
    name: "Rahul",
    marks: 78
}


PART 2 — CREATE processStudents FUNCTION
-----------------------------------------------------------

Create a function:

processStudents(students, callback)

The function should:

1. Loop through every student.

2. Check the student's marks.

3. Assign the following result:

   marks >= 90
   → "Excellent"

   marks >= 60
   → "Pass"

   marks >= 40
   → "Needs Improvement"

   marks < 40
   → "Fail"

4. After calculating the result, call the callback
   function and pass:

   student
   result


PART 3 — CREATE CALLBACK FUNCTION
-----------------------------------------------------------

Create a function:

displayStudent(student, result)

This function should print:

student name → result


Expected output:

Rahul → Pass
Aman → Needs Improvement
Neha → Excellent
Priya → Pass
Rohit → Fail


PART 4 — CALL THE MAIN FUNCTION
-----------------------------------------------------------

Call:

processStudents(students, displayStudent);


IMPORTANT:
-----------------------------------------------------------

displayStudent is a CALLBACK FUNCTION.

Pass the function like this:

processStudents(students, displayStudent);

Do NOT write:

processStudents(students, displayStudent());

===========================================================
CONCEPTS TO PRACTICE
===========================================================

1. Arrays
2. Objects
3. for loop
4. if / else if / else
5. Functions
6. Function parameters
7. Callback functions
8. console.log()
===========================================================
*/


// code :

const students = [{
    "name" : "Rahul",
    "marks" : 78
},
{
    "name" : "Aman",
    "marks" : 45
},{
    "name" : "Neha",
    "marks" : 91
},{
    "name" : "Priya",
    "marks" : 63
},{
    "name" : "Rohit",
    "marks" : 32
}
]

function processStudents(students,callback){
    
    for (const i of students) {
        let result;
        if(i.marks >= 90){
            result = "Excellent"
        }else if(i.marks >= 60){
            result = "Pass"
        }else if(i.marks >= 40){
            result = "Needs Improvement"
        }else {
            result = "Fail" 
        }
        callback(i,result)
    }
}

function displayStudent (student, result) {
    console.log(`${student.name} -> ${result}`);

}
processStudents(students, displayStudent);
