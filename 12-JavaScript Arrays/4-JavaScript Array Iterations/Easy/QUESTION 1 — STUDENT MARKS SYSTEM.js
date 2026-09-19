/*
===========================================================
QUESTION 1 — STUDENT MARKS SYSTEM
===========================================================

Create a JavaScript program for a Student Marks System.

Create an array called students containing 5 student objects.

Each object should have:

    name
    marks

Example:

{
    name: "Rahul",
    marks: 75
}


TASK 1
-----------------------------------------------------------

Use forEach() to print every student's name and marks.

Expected format:

Rahul → 75
Aman → 82
Neha → 68


TASK 2
-----------------------------------------------------------

Use map() to create a NEW array containing the marks
after adding 5 bonus marks to every student.

Example:

Original marks:
[75, 82, 68]

New marks:
[80, 87, 73]


TASK 3
-----------------------------------------------------------

Use filter() to create a new array containing students
who scored 70 or more.

Print their names.


TASK 4
-----------------------------------------------------------

Use reduce() to calculate the total marks of all students.

Then calculate the average marks.


TASK 5
-----------------------------------------------------------

Use every() to check whether every student scored
at least 40 marks.

Print the result.


TASK 6
-----------------------------------------------------------

Use some() to check whether at least one student scored
more than 90 marks.

Print the result.


EXPECTED OUTPUT
-----------------------------------------------------------

===== STUDENT REPORT =====

Rahul → 75
Aman → 82
Neha → 68
Priya → 91
Rohit → 55

Marks with Bonus:
80
87
73
96
60

Students scoring 70 or more:
Rahul
Aman
Priya

Total Marks: 371
Average Marks: 74.2

Everyone passed: true
Someone scored above 90: true
*/

// code : 
const students = [
    {
        name: "Rahul",
        marks: 75
    },
    {
        name: "Aman",
        marks: 82
    },
    {
        name: "Neha",
        marks: 68
    },
    {
        name: "Priya",
        marks: 91
    },
    {
        name: "Rohit",
        marks: 55
    }
];


// TASK 1
students.forEach(myfunction);
function myfunction(valu) {
    console.log(`${valu.name} -> ${valu.marks}`);
}
// Or arrow function:

// students.forEach(student => {
//     console.log(`${student.name} -> ${student.marks}`);
// });

// TASK 2
const bonusMarks  = students.map(myfunction1)
function myfunction1(value,index,student) {
    return value.marks + 5
}
console.log("Marks with bonus:");
console.log(bonusMarks );

// or arrow function: 
// const result = students.map(value => value.marks + 5);

// or approaches 
// const result = students.map(value => {
//     console.log(value.marks);
//     return value.marks

// // });
// console.log(result);

// TASK 3
const passedStudents  = students.filter(myfunction2)
function myfunction2(value,index,students){
    return value.marks >= 70;
}
console.log("Students who scored 70 or more:");
console.log(passedStudents );

passedStudents .forEach(students => {
    console.log(students.name);
    
});

// TASK 4
const totalMarks  = students.reduce(myfunction3,0)
function myfunction3(total,value) {
    return total += value.marks
}
console.log(totalMarks);

const averageMarks = totalMarks / students.length;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);

// Or one line:
// const total = students.reduce((total, student) => total + student.marks, 0);


// TASK 5
// const checkres = students.every(students => {
//     return students.masks
// })
// console.log(checkres);

const ch = students.every(myfunction4)
function myfunction4(value,index,Students) {
    if(value.masks > 40){
        return true
    }else{
        return false
    }
}
console.log(ch);

// TASK 6
const ch1 = students.some(myfunction5)
function myfunction5(value,index,Students) {
    if(value.masks > 90){
        return true;
    }else{
        return false
    }
}
console.log(ch1);

// or  
// const someoneAbove90 = students.some(student => {
//     return student.marks > 90;
// });

// console.log("Someone scored above 90:", someoneAbove90);

