/*
===========================================================
QUESTION 4 — EMPLOYEE REPORT SYSTEM USING bind()
===========================================================

THIS IS THE HARDEST QUESTION.
Take your time and solve it step by step.


Create:

const employee = {
    firstName: "Rahul",
    lastName: "Sharma",
    department: "Development",
    salary: 65000
};


Create the function:

function generateReport(company, year, month) {
    // your code
}


The function should return:

Employee: Rahul Sharma
Department: Development
Salary: ₹65000
Company: XYZ Technologies
Report: September 2026


Use:

this.firstName
this.lastName
this.department
this.salary


-----------------------------------------------------------
PART A — USING bind()
-----------------------------------------------------------

Create a new function using bind() so that:

employee

becomes permanently associated with the function.


Remember:

bind() creates a NEW function.

bind() does NOT execute the original function immediately.


Then call the new function.


-----------------------------------------------------------
PART B — FIXED ARGUMENTS
-----------------------------------------------------------

Use bind() to permanently set:

company = "XYZ Technologies"
year = 2026


Then when you call the returned function,
you should only provide:

month


For example:

employeeReport("September");


-----------------------------------------------------------
PART C — TIMER CHALLENGE
-----------------------------------------------------------

Use:

setTimeout()


to print the employee report after 3 seconds.


IMPORTANT:

Do not lose the correct value of this.

Use bind() so that when the function is executed
by the timer, this still refers to the employee.


Your code should conceptually involve:

setTimeout(__________, 3000);


You decide what goes inside.


-----------------------------------------------------------
PART D — MULTIPLE EMPLOYEES
-----------------------------------------------------------

Create:

const employees = [
    {
        firstName: "Rahul",
        lastName: "Sharma",
        department: "Development",
        salary: 65000
    },

    {
        firstName: "Priya",
        lastName: "Verma",
        department: "Testing",
        salary: 58000
    },

    {
        firstName: "Aman",
        lastName: "Singh",
        department: "Design",
        salary: 62000
    }
];


Use a loop to create a bound report function
for each employee.

Then print each report.


-----------------------------------------------------------
BONUS CHALLENGE
-----------------------------------------------------------

Add a reportId using:

Math.floor(Math.random() * ...)


Also include today's date using:

new Date()


CONCEPTS:
-----------------------------------------------------------

- this
- bind()
- Functions
- Objects
- Arrays
- Loops
- Strings
- Numbers
- setTimeout()
- Date
- Math.random()
- Scope

===========================================================
*/


// WRITE YOUR CODE FOR QUESTION 4 HERE
