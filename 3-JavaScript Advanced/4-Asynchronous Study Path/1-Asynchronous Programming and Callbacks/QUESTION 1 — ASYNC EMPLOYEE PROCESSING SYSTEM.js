/*
===========================================================
QUESTION 1 — ASYNC EMPLOYEE PROCESSING SYSTEM
===========================================================

Create an Employee Processing System using:

- Objects
- Arrays
- Functions
- Callback functions
- setTimeout()
- if/else
- Loops
- Arithmetic
- Strings

The important goal of this question is to understand:

        Function
            ↓
        Callback
            ↓
       setTimeout()
            ↓
      Result available
            ↓
        Next callback


EMPLOYEE DATA
-----------------------------------------------------------

const employees = [
    {
        id: 101,
        name: "Rahul",
        salary: 45000,
        performance: 85
    },
    {
        id: 102,
        name: "Priya",
        salary: 60000,
        performance: 72
    },
    {
        id: 103,
        name: "Aman",
        salary: 52000,
        performance: 91
    }
];

*/

/*
===========================================================
PART 1 — CALCULATE BONUS
===========================================================

Create a function:

calculateBonus(employee, callback)

Rules:

If performance >= 90
    bonus = 15% of salary

If performance >= 80
    bonus = 10% of salary

Otherwise
    bonus = 5% of salary


The function must use setTimeout().

The result should be passed to the callback.

Example result:

{
    id: 101,
    name: "Rahul",
    salary: 45000,
    bonus: 4500
}

IMPORTANT:

Do NOT return the result directly.

Use the callback to send the result.
*/


/*
===========================================================
PART 2 — CALCULATE TAX
===========================================================

Create a function:

calculateTax(employeeData, callback)

Rules:

If salary >= 60000
    tax = 10% of salary

Otherwise
    tax = 5% of salary

Use setTimeout().

Pass the result to the callback.

The callback should receive the updated employee object.

Example:

{
    id: 101,
    name: "Rahul",
    salary: 45000,
    bonus: 4500,
    tax: 2250
}
*/


/*
===========================================================
PART 3 — CALCULATE FINAL SALARY
===========================================================

Create a function:

calculateFinalSalary(employeeData, callback)

Formula:

finalSalary =
    salary + bonus - tax

Use setTimeout().

Pass the final employee object to the callback.

Example:

{
    id: 101,
    name: "Rahul",
    salary: 45000,
    bonus: 4500,
    tax: 2250,
    finalSalary: 47250
}
*/


/*
===========================================================
PART 4 — DISPLAY EMPLOYEE
===========================================================

Create:

displayEmployee(employee)

Print:

Employee: Rahul
Salary: 45000
Bonus: 4500
Tax: 2250
Final Salary: 47250


Use console.log().
*/


/*
===========================================================
PART 5 — CALLBACK CHAIN
===========================================================

For EACH employee, execute the functions in this exact order:

1. calculateBonus()
2. calculateTax()
3. calculateFinalSalary()
4. displayEmployee()

The next function must start only after
the previous asynchronous operation finishes.

Expected structure:

calculateBonus(employee, function(result) {

    calculateTax(result, function(result) {

        calculateFinalSalary(result, function(result) {

            displayEmployee(result);

        });

    });

});


Do NOT use Promise or async/await in Question 1.

The purpose is to understand CALLBACK CHAINING.


===========================================================
PART 6 — PROCESS ALL EMPLOYEES
===========================================================

Use a loop to process all employees.

Each employee should go through:

Bonus
   ↓
Tax
   ↓
Final Salary
   ↓
Display


===========================================================
EXPECTED OUTPUT
===========================================================

Your output should eventually contain information
for all three employees.

Do NOT worry about the exact order between employees
if you are using asynchronous operations for all employees.

But for EACH employee, this order MUST remain:

Bonus
   ↓
Tax
   ↓
Final Salary
   ↓
Display


===========================================================
IMPORTANT
===========================================================

Do not use:

- Promise
- async
- await

Solve this question ONLY using callbacks and setTimeout().

===========================================================
*/
// code :

const employees = [
    {
        id: 101,
        name: "Rahul",
        salary: 45000,
        performance: 85
    },
    {
        id: 102,
        name: "Priya",
        salary: 60000,
        performance: 72
    },
    {
        id: 103,
        name: "Aman",
        salary: 52000,
        performance: 91
    }
];

function calculateBonus(employee, callback) {
    let bonus
    if(employee.performance >= 90){
        bonus = employee.salary * 15/ 100
    }else if (employee.performance >= 80) {
        bonus = employee.salary  * 10/100
    }else{
       bonus = employee.salary * 5/100
    }
    setTimeout(() => {
        callback({
            employee
        })
    }, 1000);
}
let a = calculateBonus(employees,callback)
console.log(a);
