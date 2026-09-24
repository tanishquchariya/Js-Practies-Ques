/*
================================================================
🔥 MASTER JAVASCRIPT CHALLENGE
   EMPLOYEE PERFORMANCE & PAYROLL SYSTEM
================================================================

You have learned:

- JS Home / Introduction
- JS Syntax
- JS Operators
- If Conditions
- Loops
- Strings
- Numbers
- Functions
- Timers
- Objects
- Scope
- Dates
- Arrays
- this
- call()
- apply()
- bind()

Now combine ALL of these concepts in ONE project.

IMPORTANT:
---------------------------------------------------------------
Do NOT use classes.
Do NOT use arrow functions for the main functions where
you need to understand "this".

Try to solve the problem yourself.

You can use:
- normal functions
- objects
- arrays
- loops
- if/else
- Date
- Math
- setTimeout
- call()
- apply()
- bind()
================================================================
*/


/*
================================================================
PART 1 — CREATE EMPLOYEE DATA
================================================================

Create an array called:

employees

It should contain 4 employee objects.

Each employee must have:

- id
- firstName
- lastName
- department
- salary
- performanceScore
- workingDays
- presentDays

Use different values for every employee.

Example structure:

const employees = [
    {
        id: 101,
        firstName: "Rahul",
        lastName: "Sharma",
        department: "Development",
        salary: 60000,
        performanceScore: 87,
        workingDays: 26,
        presentDays: 24
    },

    ...
];


Make sure:
- salary is a number
- performanceScore is between 0 and 100
- presentDays <= workingDays
================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 2 — EMPLOYEE METHOD USING "this"
================================================================

Create a function:

function getFullName() {
    // your code
}

The function should return:

firstName + " " + lastName

You MUST use:

this.firstName
this.lastName


Then add this function as a method to ONE employee object.

Example concept:

employee.getFullName = getFullName;


Then call:

employee.getFullName();

Expected:

Rahul Sharma

IMPORTANT:
Understand why "this" refers to the employee object
when the function is called as an object method.
================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 3 — SALARY CALCULATION USING call()
================================================================

Create this function:

function calculateSalary(bonusPercentage, taxPercentage) {

    // use this.salary
    // use this.performanceScore

}


Rules:

STEP 1
---------------------------------------------------------------
Calculate performance bonus.

If performanceScore >= 90:

    bonusPercentage should be increased by 5

Otherwise:

    use the given bonusPercentage


STEP 2
---------------------------------------------------------------
Calculate bonus:

bonusAmount =
salary * bonusPercentage / 100


STEP 3
---------------------------------------------------------------
Calculate tax:

taxAmount =
salary * taxPercentage / 100


STEP 4
---------------------------------------------------------------
Calculate final salary:

finalSalary =
salary + bonusAmount - taxAmount


STEP 5
---------------------------------------------------------------
Return an object:

{
    name: full name,
    basicSalary: ...,
    bonus: ...,
    tax: ...,
    finalSalary: ...
}


IMPORTANT:
---------------------------------------------------------------
Use "this" inside the function.

Do NOT directly use:

employee.salary

inside the function.


Now use call() to calculate salary for every employee.

Use:

bonusPercentage = 10
taxPercentage = 5

for all employees.

You must call the SAME function for every employee.

Example idea:

calculateSalary.call(employee, 10, 5);

================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 4 — ATTENDANCE CALCULATION
================================================================

Create:

function calculateAttendance() {

    // use this.workingDays
    // use this.presentDays

}


Calculate:

attendancePercentage =
(presentDays / workingDays) * 100


Return the percentage.

Example:

26 working days
24 present days

attendance =
(24 / 26) * 100


Now use call() to execute the function
for every employee.

Print:

Employee Name
Attendance Percentage

Use if/else:

attendance >= 90
    "Excellent Attendance"

attendance >= 75
    "Good Attendance"

otherwise
    "Low Attendance"


IMPORTANT:
---------------------------------------------------------------
Use "this" inside the function.
================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 5 — APPLY() WITH AN ARRAY
================================================================

Create this function:

function calculatePerformance(...scores) {

    // your code
}


The function should calculate:

- total score
- average score
- highest score
- lowest score


You MUST use a loop to calculate these values.

Do NOT use:

Math.max(...scores)

Do NOT use:

Math.min(...scores)


Now create:

const performanceScores = [78, 85, 92, 88, 76];


Use:

apply()

to pass the array as arguments.

Example concept:

calculatePerformance.apply(null, performanceScores);


IMPORTANT:
---------------------------------------------------------------
Understand why apply() is useful here.

The scores are already stored inside an array.

================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 6 — APPLY() + "this"
================================================================

Create:

function generateEmployeeSummary(
    rating1,
    rating2,
    rating3
) {

    // use this.firstName
    // use this.lastName
    // use this.department

}


The function should calculate:

averageRating =
(rating1 + rating2 + rating3) / 3


Then determine:

averageRating >= 90
    "Outstanding"

averageRating >= 75
    "Very Good"

averageRating >= 60
    "Good"

otherwise
    "Needs Improvement"


Return:

{
    employee: full name,
    department: this.department,
    averageRating: ...,
    rating: ...
}


Create:

const ratings = [85, 92, 88];


Now use:

apply()

to execute the function for ONE employee.

IMPORTANT:
---------------------------------------------------------------
The first argument of apply() must be the employee object.

The second argument must be the ratings array.

Think about:

function.apply(object, array);


================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 7 — BIND() FOR EMPLOYEE REPORT
================================================================

Create:

function generateReport(company, year) {

    // use this.firstName
    // use this.lastName
    // use this.department
    // use this.salary

}


Return a string like:

Employee: Rahul Sharma
Department: Development
Salary: ₹60000
Company: XYZ Technologies
Year: 2026


Now use bind() to create a NEW function.

The new function must permanently remember:

1. The employee object
2. The company name
3. The year


Use:

Company:
"XYZ Technologies"

Year:
2026


After bind(), the returned function should need NO arguments.

Example concept:

const report = generateReport.bind(
    employee,
    "XYZ Technologies",
    2026
);


Then:

report();


IMPORTANT:
---------------------------------------------------------------
Remember:

bind() does NOT execute the function immediately.

It returns a NEW function.

================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 8 — BIND() + setTimeout()
================================================================

Now create a function:

showDelayedReport()


It should display the employee report after 3 seconds.

Use:

setTimeout()


IMPORTANT:
---------------------------------------------------------------
The correct "this" must be preserved.

Use bind() where necessary.

The report should be printed after 3 seconds.

Example output:

Report generated for Rahul Sharma
Department: Development
Salary: ₹60000


DO NOT simply use global variables to solve the "this" problem.

The purpose of this part is to understand:

this + bind() + setTimeout()


================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 9 — DATE + REPORT ID
================================================================

Inside the employee report, add:

1. Today's date
2. A random report ID


Use:

new Date()

and:

Math.floor(Math.random() * ...)


Example:

Report ID: 5832
Date: 23/09/2026


You should generate a NEW report ID every time
a report is generated.

Do not hard-code the report ID.

================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
PART 10 — PROCESS ALL EMPLOYEES
================================================================

Now create a complete processing system.

For EACH employee:

1. Print full name
2. Print department
3. Calculate attendance
4. Calculate salary
5. Calculate performance
6. Generate employee report


Use a LOOP.

You may use:

for loop

OR

forEach()


But try to understand how "this" behaves when
functions are passed around.

================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
🔥 FINAL CHALLENGE — call vs apply vs bind
================================================================

At the end of your program, demonstrate all three methods.

Create a simple function:

function introduce(role, company) {

    return `
    Name: ${this.firstName} ${this.lastName}
    Role: ${role}
    Company: ${company}
    `;
}


---------------------------------------------------------------
1. CALL()
---------------------------------------------------------------

Use call() to execute the function immediately.

Pass arguments individually.

---------------------------------------------------------------
2. APPLY()
---------------------------------------------------------------

Create:

const introductionData = [
    "Software Engineer",
    "XYZ Technologies"
];

Use apply() to execute the same function.

Pass arguments using the array.

---------------------------------------------------------------
3. BIND()
---------------------------------------------------------------

Create a new function using bind().

Fix:

- employee
- "Software Engineer"
- "XYZ Technologies"

Then call the returned function later.

---------------------------------------------------------------

After completing this section, you should be able to
clearly explain:

call()
    → executes immediately
    → arguments separately

apply()
    → executes immediately
    → arguments in an array

bind()
    → does NOT execute immediately
    → returns a new function
    → can permanently set "this"
    → can also preset arguments

================================================================
*/


// WRITE YOUR CODE HERE



/*
================================================================
🧠 FINAL THEORY TEST
================================================================

After completing the program, answer these questions
in comments WITHOUT checking your notes.

1. What determines the value of "this"?

2. What does "this" refer to inside an object method?

3. What happens to "this" when a normal function is called
   independently?

4. What is the main difference between call() and apply()?

5. Why can we pass an array directly to apply()?

6. Why can't we directly pass an array to call() as the
   complete argument list?

7. Does call() create a new function?

8. Does apply() create a new function?

9. Does bind() execute the function immediately?

10. What does bind() return?

11. How does bind() help when using setTimeout()?

12. What is the difference between:

    function() {
        return this.name;
    }

    and

    () => {
        return this.name;
    }

13. Why can arrow functions behave differently with "this"?

14. If the same function is called using:

    employee.getName()

    and:

    getName()

    can "this" be different?

15. Explain in your own words:

    call() vs apply() vs bind()

================================================================

🔥 GOAL:

Do not just make the program work.

You should understand WHY each method is being used.

================================================================
*/