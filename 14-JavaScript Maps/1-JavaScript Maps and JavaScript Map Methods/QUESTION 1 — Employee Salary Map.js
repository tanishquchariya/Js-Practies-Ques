/*
===========================================================
QUESTION 1 — EMPLOYEE SALARY MANAGEMENT SYSTEM
===========================================================

Create a JavaScript program for an Employee Salary
Management System using Map.

You have the following employees:

Rahul      → 45000
Aman       → 52000
Neha       → 48000
Priya      → 60000
Rohit      → 55000


PART 1 — CREATE MAP
-----------------------------------------------------------

Create a Map called:

employeeSalary

Store all employees and their salaries inside the Map.


PART 2 — GET VALUES
-----------------------------------------------------------

Use get() to print:

1. Rahul's salary
2. Priya's salary
3. Rohit's salary


PART 3 — ADD EMPLOYEE
-----------------------------------------------------------

Add a new employee:

Vikas → 50000

Use set().

Print the updated Map.


PART 4 — CHANGE SALARY
-----------------------------------------------------------

Rahul receives a salary increase.

Change Rahul's salary to:

50000

Use set().

Print Rahul's updated salary.


PART 5 — CHECK EMPLOYEE
-----------------------------------------------------------

Use has() to check:

1. Whether "Neha" exists.
2. Whether "Karan" exists.

Print the results.


PART 6 — DELETE EMPLOYEE
-----------------------------------------------------------

Remove:

"Rohit"

using delete().

Print:

1. Whether Rohit was successfully deleted.
2. The updated Map.


PART 7 — MAP SIZE
-----------------------------------------------------------

Print the total number of employees using:

size


PART 8 — LOOP THROUGH MAP
-----------------------------------------------------------

Use for...of with entries() to print:

Employee: Rahul
Salary: 50000

Employee: Aman
Salary: 52000

...

Do NOT manually print each employee.


PART 9 — PRINT ONLY KEYS
-----------------------------------------------------------

Use keys() to print every employee name.


PART 10 — PRINT ONLY VALUES
-----------------------------------------------------------

Use values() to print every salary.


PART 11 — CALCULATE TOTAL SALARY
-----------------------------------------------------------

Use values() and a loop to calculate the total
salary of all employees.

Store the result in:

totalSalary

Print totalSalary.


PART 12 — OBJECT AS MAP KEY
-----------------------------------------------------------

Create two employee objects:

const employee1 = {
    name: "Rahul",
    department: "IT"
};

const employee2 = {
    name: "Aman",
    department: "HR"
};


Create another Map called:
employeeDetails

Use employee1 and employee2 as KEYS.

Store their employee IDs as values:

employee1 → "EMP101"
employee2 → "EMP102"


Use get() to retrieve the IDs.

IMPORTANT:

Do NOT use:

"Rahul"

as the key.

The actual object must be the key.


PART 13 — FINAL REPORT
-----------------------------------------------------------

Print:

========== EMPLOYEE SALARY REPORT ==========

Total Employees:
...

Rahul Salary:
...

Priya Salary:
...

Does Neha Exist?
...

Does Karan Exist?
...

Deleted Rohit:
...

Total Salary:
...

All Employees:
...

All Salaries:
...


IMPORTANT:

Use these Map concepts:

new Map()
set()
get()
has()
delete()
size()
keys()
values()
entries()

You may use:

for
for...of
if/else
functions
objects
arrays
template literals
console.log()

Do NOT use:

map()
filter()
reduce()
find()
sort()

===========================================================
*/

// Code : 

// Code :

const employeeSalary = new Map([
    ["Rahul", 45000],
    ["Aman", 52000],
    ["Neha", 48000],
    ["Priya", 60000],
    ["Rohit", 55000]
]);


// ==========================================
// PART 2 — GET VALUES
// ==========================================

console.log("Rahul Salary:", employeeSalary.get("Rahul"));
console.log("Priya Salary:", employeeSalary.get("Priya"));
console.log("Rohit Salary:", employeeSalary.get("Rohit"));


// ==========================================
// PART 3 — ADD EMPLOYEE
// ==========================================

employeeSalary.set("Vikas", 50000);

console.log("Updated Map:", employeeSalary);


// ==========================================
// PART 4 — CHANGE SALARY
// ==========================================

employeeSalary.set("Rahul", 50000);

console.log("Updated Rahul Salary:", employeeSalary.get("Rahul"));


// ==========================================
// PART 5 — CHECK EMPLOYEE
// ==========================================

console.log("Does Neha exist?", employeeSalary.has("Neha"));
console.log("Does Karan exist?", employeeSalary.has("Karan"));


// ==========================================
// PART 6 — DELETE EMPLOYEE
// ==========================================

const deletedRohit = employeeSalary.delete("Rohit");

console.log("Was Rohit deleted?", deletedRohit);
console.log("Map after deleting Rohit:", employeeSalary);


// ==========================================
// PART 7 — MAP SIZE
// ==========================================

console.log("Total Employees:", employeeSalary.size);


// ==========================================
// PART 8 — ENTRIES
// ==========================================

for (const [employee, salary] of employeeSalary.entries()) {
    console.log(`Employee: ${employee}`);
    console.log(`Salary: ${salary}`);
}


// ==========================================
// PART 9 — KEYS
// ==========================================

for (const employee of employeeSalary.keys()) {
    console.log("Employee Name:", employee);
}


// ==========================================
// PART 10 — VALUES
// ==========================================

for (const salary of employeeSalary.values()) {
    console.log("Salary:", salary);
}


// ==========================================
// PART 11 — TOTAL SALARY
// ==========================================

let totalSalary = 0;

for (const salary of employeeSalary.values()) {
    totalSalary += salary;
}

console.log("Total Salary:", totalSalary);


// ==========================================
// PART 12 — OBJECT AS MAP KEY
// ==========================================

const employee1 = {
    name: "Rahul",
    department: "IT"
};

const employee2 = {
    name: "Aman",
    department: "HR"
};

const employeeDetails = new Map([
    [employee1, "EMP101"],
    [employee2, "EMP102"]
]);

console.log("Employee 1 ID:", employeeDetails.get(employee1));
console.log("Employee 2 ID:", employeeDetails.get(employee2));


// ==========================================
// PART 13 — FINAL REPORT
// ==========================================

console.log("========== EMPLOYEE SALARY REPORT ==========");

console.log(`Total Employees: ${employeeSalary.size}`);

console.log(`Rahul Salary: ${employeeSalary.get("Rahul")}`);

console.log(`Priya Salary: ${employeeSalary.get("Priya")}`);

console.log(`Does Neha Exist? ${employeeSalary.has("Neha")}`);

console.log(`Does Karan Exist? ${employeeSalary.has("Karan")}`);

console.log(`Was Rohit Deleted? ${deletedRohit}`);

console.log(`Total Salary: ${totalSalary}`);

console.log("All Employees:");

for (const employee of employeeSalary.keys()) {
    console.log(employee);
}

console.log("All Salaries:");

for (const salary of employeeSalary.values()) {
    console.log(salary);
}