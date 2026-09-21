/*
===========================================================
QUESTION 1 — EMPLOYEE PERFORMANCE & SALARY MANAGEMENT SYSTEM
===========================================================

Create a JavaScript program for an Employee Performance
Management System.

Create an array called "employees" containing at least
7 employee objects.

Each employee should contain:

name
department
salary
experience
skills
performance

Example structure:

{
    name: "Rahul",
    department: "Development",
    salary: 55000,
    experience: 3,
    skills: ["JavaScript", "React", "Node.js"],
    performance: [85, 90, 78]
}


PART 1 — DISPLAY EMPLOYEES
-----------------------------------------------------------

Use forEach() to display every employee's name and
department.

Expected output:

Rahul → Development
Aman → Testing
...


PART 2 — CALCULATE AVERAGE PERFORMANCE
-----------------------------------------------------------

For every employee, calculate their average performance.

Use:

map()
reduce()

Example:

Rahul → 84.33
Aman → 91.00

Create a NEW array.

Do NOT modify the original employees array.


PART 3 — FIND HIGH PERFORMERS
-----------------------------------------------------------

Use filter() to find employees who satisfy BOTH conditions:

1. Average performance >= 80
2. Experience >= 2 years

Display their names.


PART 4 — SALARY ANALYSIS
-----------------------------------------------------------

Use reduce() to calculate:

1. Total salary of all employees
2. Average salary
3. Highest salary
4. Lowest salary

Do not directly use Math.max() or Math.min() on the
employee objects.

You must extract salary values during your logic.


PART 5 — SKILL ANALYSIS
-----------------------------------------------------------

Every employee has multiple skills.

Use flatMap() to create ONE array containing all skills
from all employees.

Example:

[
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    ...
]

Then find:

1. Total number of skill entries
2. Number of UNIQUE skills

You may use another JavaScript concept you already know.


PART 6 — COMPANY CONDITIONS
-----------------------------------------------------------

Use every() to check:

Are ALL employees earning more than ₹30,000?

Use some() to check:

1. Does at least one employee have more than 5 years
   of experience?

2. Does at least one employee know "React"?


Expected style:

All employees earn above ₹30000: true
Experienced employee exists: true
React developer exists: true


PART 7 — EMPLOYEE RANKING
-----------------------------------------------------------

Create a NEW array containing employees ranked according
to their average performance.

Highest average performance should come first.

Do NOT modify the original employees array.

Use the spread operator (...) to create the copy.


PART 8 — DISPLAY RANKING
-----------------------------------------------------------

Use entries() to display the final ranked employees.

Expected style:

1. Rahul → 92.33
2. Priya → 89.66
3. Aman → 87.33
...


PART 9 — FINAL REPORT
-----------------------------------------------------------

Print a final report similar to:

========== EMPLOYEE REPORT ==========

Total Employees: 7
Total Salary: ₹xxxxx
Average Salary: ₹xxxxx
Highest Salary: ₹xxxxx
Lowest Salary: ₹xxxxx

High Performers:
Rahul
Priya
...

React Developers:
Rahul
...

All employees earn above ₹30000: true
At least one employee has 5+ years experience: true


IMPORTANT:

Try to use these Array Iteration methods:

forEach()
map()
filter()
reduce()
flatMap()
every()
some()
entries()
spread (...)

You can also use:

if/else
loops
functions
objects
strings
numbers
template literals

Do not use external libraries.

===========================================================
Write your complete solution below this comment.
===========================================================
*/

// Code :

const employees = [
    {
        name: "Rahul",
        department: "Development",
        salary: 55000,
        experience: 3,
        skills: ["JavaScript", "React", "Node.js"],
        performance: [85, 90, 78]
    },
    {
        name: "Aman",
        department: "Testing",
        salary: 48000,
        experience: 2,
        skills: ["Java", "Selenium", "SQL"],
        performance: [88, 92, 86]
    },
    {
        name: "Neha",
        department: "Development",
        salary: 62000,
        experience: 5,
        skills: ["JavaScript", "React", "MongoDB"],
        performance: [92, 89, 95]
    },
    {
        name: "Priya",
        department: "HR",
        salary: 42000,
        experience: 4,
        skills: ["Communication", "Excel", "Management"],
        performance: [76, 82, 79]
    },
    {
        name: "Rohit",
        department: "Development",
        salary: 70000,
        experience: 7,
        skills: ["Python", "React", "Django"],
        performance: [95, 91, 94]
    },
    {
        name: "Sneha",
        department: "Design",
        salary: 45000,
        experience: 2,
        skills: ["Figma", "UI/UX", "HTML", "CSS"],
        performance: [81, 79, 85]
    },
    {
        name: "Vikas",
        department: "Data",
        salary: 58000,
        experience: 6,
        skills: ["Python", "SQL", "Pandas"],
        performance: [87, 90, 88]
    }
];


// Part -1 
employees.forEach(myfunction);
function myfunction(values,index,employees) {
    console.log(values.name);
    console.log(values.department);
}

// Part - 2
const performanceReport = employees.map(function(employee) {

    const total = employee.performance.reduce(function(sum, score) {
        return sum + score;
    }, 0);

    const average = total / employee.performance.length;

    return {
        name: employee.name,
        averagePerformance: average
    };

});
