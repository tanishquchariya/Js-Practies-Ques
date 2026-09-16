/*
===========================================================
QUESTION — STUDENT COURSE ANALYSIS SYSTEM
===========================================================

Create a JavaScript program for a Student Course Analysis System.

There are three students with the following courses:

Student A:
JavaScript, React, Node.js, MongoDB, DSA

Student B:
JavaScript, React, Node.js, Express.js, MongoDB

Student C:
Python, Java, SQL, DSA


REQUIREMENTS:

1. Create three Sets:

   studentA
   studentB
   studentC


2. Find the UNION of Student A and Student B.

   Union means:
   All unique courses from both students.


3. Find the INTERSECTION of Student A and Student B.

   Intersection means:
   Courses present in BOTH students.


4. Find the courses that are present in Student A
   but NOT present in Student B.

   Store this result in:

   onlyInA


5. Find the courses that are present in Student B
   but NOT present in Student A.

   Store this result in:

   onlyInB


6. Find the SYMMETRIC DIFFERENCE between Student A
   and Student B.

   Symmetric difference means:
   Courses that belong to only one student,
   but NOT to both.


7. Check whether Student C is a SUBSET of Student A.


8. Check whether Student A is a SUPERSET of Student B.


9. Check whether Student A and Student C are DISJOINT.

   Disjoint means:
   The two Sets have NO common elements.


10. Create a function:

       analyzeCourses(setA, setB)

    The function must calculate:

       union
       intersection
       onlyInA
       onlyInB
       symmetricDifference

    The function must RETURN an object:

       {
           union: ...,
           intersection: ...,
           onlyInA: ...,
           onlyInB: ...,
           symmetricDifference: ...
       }


11. Call the function using:

       studentA
       studentB

    Store the returned object in a variable called:

       result


12. Display all values from the result object.


13. Create an array:

       const students = [studentA, studentB, studentC];

    Use a loop to display the number of courses
    each student has.


EXPECTED OUTPUT:

========== STUDENT COURSE ANALYSIS ==========

Student A Courses:
...

Student B Courses:
...

Student C Courses:
...

Union:
...

Intersection:
...

Only in Student A:
...

Only in Student B:
...

Symmetric Difference:
...

Is Student C a subset of Student A?
...

Is Student A a superset of Student B?
...

Are Student A and Student C disjoint?
...


========== COURSE COUNT ==========

Student A has ... courses.
Student B has ... courses.
Student C has ... courses.


IMPORTANT:

Use these JavaScript Set methods:

union()
intersection()
difference()
symmetricDifference()
isSubsetOf()
isSupersetOf()
isDisjointFrom()


You can also use previously learned concepts:

- Variables
- Functions
- Objects
- Arrays
- Loops
- for...of
- if/else
- Template literals
- console.log()
- Set.size


IMPORTANT:

Do NOT manually write the calculated results.

Calculate everything using JavaScript Set methods.
===========================================================
*/


// Code : 

// Code :

const studentA = new Set([
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "DSA"
]);

const studentB = new Set([
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB"
]);

const studentC = new Set([
    "Python",
    "Java",
    "SQL",
    "DSA"
]);


// Set relationship checks

let findSub = studentC.isSubsetOf(studentA);

let findSuper = studentA.isSupersetOf(studentB);

let findDis = studentA.isDisjointFrom(studentC);


// Function

function analyzeCourses(setA, setB) {

    let union = setA.union(setB);

    let intersection = setA.intersection(setB);

    let onlyInA = setA.difference(setB);

    let onlyInB = setB.difference(setA);

    let symmetricDifference = setA.symmetricDifference(setB);

    return {
        union: union,
        intersection: intersection,
        onlyInA: onlyInA,
        onlyInB: onlyInB,
        symmetricDifference: symmetricDifference
    };
}


// Call function

const result = analyzeCourses(studentA, studentB);


// Display results

console.log("========== STUDENT COURSE ANALYSIS ==========");

console.log("Student A Courses:", studentA);

console.log("Student B Courses:", studentB);

console.log("Student C Courses:", studentC);

console.log("Union:", result.union);

console.log("Intersection:", result.intersection);

console.log("Only in Student A:", result.onlyInA);

console.log("Only in Student B:", result.onlyInB);

console.log(
    "Symmetric Difference:",
    result.symmetricDifference
);

console.log(
    "Is Student C a subset of Student A?",
    findSub
);

console.log(
    "Is Student A a superset of Student B?",
    findSuper
);

console.log(
    "Are Student A and Student C disjoint?",
    findDis
);


// Course count

console.log("========== COURSE COUNT ==========");

const students = [studentA, studentB, studentC];

let studentNumber = 1;

for (const student of students) {

    console.log(
        `Student ${studentNumber} has ${student.size} courses.`
    );

    studentNumber++;
}