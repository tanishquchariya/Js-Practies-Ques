/*
===========================================================
QUESTION 1 — EMPLOYEE ITERATOR & DATA ANALYZER
===========================================================

You are building an Employee Management System.

Each employee has:

    id
    name
    department
    salary
    skills


DATA
-----------------------------------------------------------
*/

const employees = [
    {
        id: 101,
        name: "Rahul",
        department: "Development",
        salary: 55000,
        skills: ["JavaScript", "React", "Node"]
    },
    {
        id: 102,
        name: "Aman",
        department: "Testing",
        salary: 42000,
        skills: ["Java", "Selenium", "SQL"]
    },
    {
        id: 103,
        name: "Neha",
        department: "Development",
        salary: 68000,
        skills: ["JavaScript", "MongoDB", "React"]
    },
    {
        id: 104,
        name: "Priya",
        department: "HR",
        salary: 48000,
        skills: ["Communication", "Excel"]
    },
    {
        id: 105,
        name: "Rohit",
        department: "Development",
        salary: 72000,
        skills: ["JavaScript", "Node", "MongoDB"]
    }
];


/*
===========================================================
PART 1 — BASIC ITERATION
===========================================================

Use for...of.

Print:

101 - Rahul - Development
102 - Aman - Testing
...

===========================================================
*/


/*
===========================================================
PART 2 — NESTED ITERATION
===========================================================

Using nested for...of loops:

Print every employee's skills.

Example:

Rahul:
JavaScript
React
Node

===========================================================
*/


/*
===========================================================
PART 3 — CONDITION + ITERATION
===========================================================

Using for...of:

Print employees whose salary is greater than 50,000.

Expected:

Rahul
Neha
Rohit

===========================================================
*/


/*
===========================================================
PART 4 — CREATE A CUSTOM ITERATOR
===========================================================

Create an iterator manually for the employees array.

Create:

const employeeIterator = {

    currentIndex: 0,

    next() {
        // your code
    }
};

The next() method must return:

{
    value: employee,
    done: false
}

while employees are available.

When all employees have been returned:

{
    value: undefined,
    done: true
}


Then manually call:

console.log(employeeIterator.next());
console.log(employeeIterator.next());
console.log(employeeIterator.next());

Observe how the iterator moves forward.

===========================================================
*/


/*
===========================================================
PART 5 — ITERATE USING for...of
===========================================================

Modify your custom iterator so that it can be used with:

for...of

Example:

for (const employee of employeeIterator) {
    console.log(employee.name);
}

Expected:

Rahul
Aman
Neha
Priya
Rohit

HINT:

Think about:

Symbol.iterator

===========================================================
*/


/*
===========================================================
PART 6 — ITERATOR.from()
===========================================================

Create an iterator from employees using:

Iterator.from()

Store it in:

const iterator = Iterator.from(employees);

Then use for...of to print:

Employee Name
Employee Salary

===========================================================
*/


/*
===========================================================
PART 7 — ITERATOR FILTER
===========================================================

Using the Iterator helper filter():

Create an iterator containing only employees
whose salary is greater than or equal to 50,000.

Then use for...of to print their names.

Expected:

Rahul
Neha
Rohit

===========================================================
*/


/*
===========================================================
PART 8 — ITERATOR MAP
===========================================================

Using iterator.map():

Create an iterator that converts every employee
into this format:

"Rahul earns 55000"

Then print every result.

Expected:

Rahul earns 55000
Aman earns 42000
...

===========================================================
*/


/*
===========================================================
PART 9 — ITERATOR FIND
===========================================================

Using iterator.find():

Find the first employee whose salary
is greater than 60,000.

Print the complete employee object.

Think carefully about:

Does find() return an iterator
or does it return the matching value?

===========================================================
*/


/*
===========================================================
PART 10 — ITERATOR SOME + EVERY
===========================================================

Use iterator.some():

Check whether at least one employee
has salary greater than 70,000.

Then use iterator.every():

Check whether every employee earns
more than 40,000.

Print both results.

===========================================================
*/


/*
===========================================================
PART 11 — REDUCE
===========================================================

Using iterator.reduce():

Calculate the total salary of all employees.

Expected:

285000

===========================================================
*/


/*
===========================================================
PART 12 — FINAL CHALLENGE
===========================================================

Create:

const developmentEmployees = [];

Using iteration:

1. Find employees from Development.
2. Store their complete objects.
3. Calculate their total salary.
4. Calculate their average salary.
5. Print their names.

Expected:

Development Employees:
Rahul
Neha
Rohit

Total Salary:
195000

Average Salary:
65000

IMPORTANT
-----------------------------------------------------------

For Parts 1–5:

DO NOT use:

map()
filter()
reduce()
forEach()

You must understand the basic iteration mechanism first.

For Parts 6–11:

Use Iterator.from() and iterator helper methods.

===========================================================
*/