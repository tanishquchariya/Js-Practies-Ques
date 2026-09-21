/*
===========================================================
QUESTION 1 — STUDENT DATA ITERATOR
===========================================================

You are given an array of student objects.

Each student has:
    name
    age
    course
    marks
    skills

Create the following data:

const students = [
    {
        name: "Rahul",
        age: 21,
        course: "CSE",
        marks: 82,
        skills: ["JavaScript", "React", "Node"]
    },
    {
        name: "Aman",
        age: 22,
        course: "CSE",
        marks: 67,
        skills: ["Java", "Python"]
    },
    {
        name: "Neha",
        age: 20,
        course: "IT",
        marks: 91,
        skills: ["JavaScript", "MongoDB", "React"]
    },
    {
        name: "Priya",
        age: 23,
        course: "CSE",
        marks: 74,
        skills: ["C++", "DSA", "JavaScript"]
    },
    {
        name: "Rohit",
        age: 21,
        course: "ECE",
        marks: 58,
        skills: ["C", "Embedded"]
    }
];


PART 1 — ITERATE USING for...of
-----------------------------------------------------------

Use a for...of loop to print every student's:

Name
Course
Marks

Expected style:

Rahul - CSE - 82
Aman - CSE - 67
...


PART 2 — ITERATE THROUGH NESTED ARRAYS
-----------------------------------------------------------

Using for...of, print every student's skills.

Example:

Rahul:
JavaScript
React
Node

Aman:
Java
Python

...


PART 3 — CONDITIONS + ITERATION
-----------------------------------------------------------

Using for...of:

Print the names of students who scored 75 or more.

Expected:

Rahul
Neha


PART 4 — STRING + ITERATION
-----------------------------------------------------------

Using for...of, check every student's name.

Print:

"Rahul has 5 characters"
"Aman has 4 characters"
...

Do NOT use a normal for loop for this part.


PART 5 — COUNT
-----------------------------------------------------------

Using for...of:

Count how many students belong to "CSE".

Expected:

CSE Students: 3


PART 6 — SKILL SEARCH
-----------------------------------------------------------

Using nested for...of loops:

Find and print students who have "JavaScript"
as one of their skills.

Expected:

Rahul knows JavaScript
Neha knows JavaScript
Priya knows JavaScript


PART 7 — CHALLENGE
-----------------------------------------------------------
Create an array called highScorers.

Using iteration, add the complete student object to
highScorers if marks are greater than or equal to 75.

Then print highScorers.

IMPORTANT:

Try to solve the entire problem using iteration.

You MAY use:
    for...of
    if/else
    arrays
    objects
    functions
    string methods

You may NOT use:
    map()
    filter()
    reduce()
    forEach()

The purpose of this question is to understand
JavaScript ITERATION itself.
===========================================================
*/

// Code :-
const students = [
    {
        name: "Rahul",
        age: 21,
        course: "CSE",
        marks: 82,
        skills: ["JavaScript", "React", "Node"]
    },
    {
        name: "Aman",
        age: 22,
        course: "CSE",
        marks: 67,
        skills: ["Java", "Python"]
    },
    {
        name: "Neha",
        age: 20,
        course: "IT",
        marks: 91,
        skills: ["JavaScript", "MongoDB", "React"]
    },
    {
        name: "Priya",
        age: 23,
        course: "CSE",
        marks: 74,
        skills: ["C++", "DSA", "JavaScript"]
    },
    {
        name: "Rohit",
        age: 21,
        course: "ECE",
        marks: 58,
        skills: ["C", "Embedded"]
    }
];


for (const i of students) {
    console.log(`${i.name} - ${i.course} - ${i.marks}`);
    
}
// Part 2
for (const i of students) {
    console.log(`${i.name}:`);

    for (const skill of i.skills) {
        console.log(skill);
    }
}
for (const i of students) {
    if(i.marks >= 75){
        console.log(i.name);
        
    }
}
for (const i of students) {
    console.log(`${i.name} has ${i.name.length} Characters`);
}
let cout = 0;
for (const i of students) {
    if(i.course === "CSE"){
        cout++
    }
}
console.log(`CSE Students: ${cout}`);


for (const i of students) {
    for (const j of i.skills) {
        if(j === "JavaScript"){
            console.log(`${i.name} Knows JavaScript`);
        }
    }
}

// part : 7
const highScorers = [];
for (const i of students) {
    if(i.marks >= 75){
        highScorers.push(i)
    }
}
console.log(highScorers);
