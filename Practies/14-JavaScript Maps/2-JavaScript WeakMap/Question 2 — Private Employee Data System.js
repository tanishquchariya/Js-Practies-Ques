/*
Question 2 — Private Employee Data System
This one will teach you a lot more because it combines:
WeakMap
+
Objects
+
Class
+
Constructor
+
Methods
+
Functions

===========================================================
QUESTION 2 — PRIVATE EMPLOYEE DATA SYSTEM
===========================================================

Create a JavaScript program for an Employee System
using WeakMap to store private employee data.


Create a WeakMap called:

privateEmployeeData


Create a class:

Employee


The Employee constructor should receive:

name
department
salary


PART 1 — PUBLIC DATA
-----------------------------------------------------------

Inside the constructor, store:

this.name
this.department


Do NOT store salary directly as:

this.salary


Instead, store salary inside privateEmployeeData.

The WeakMap should store:

employee object → salary


PART 2 — CREATE EMPLOYEES
-----------------------------------------------------------

Create these employees:

Employee 1:

name = "Rahul"
department = "IT"
salary = 50000


Employee 2:

name = "Aman"
department = "HR"
salary = 45000


Employee 3:

name = "Neha"
department = "Finance"
salary = 60000


PART 3 — GET PRIVATE SALARY
-----------------------------------------------------------

Create a method inside Employee:

getSalary()


It should return the employee's salary using:

privateEmployeeData.get(this)


Print the salary of:

Rahul
Aman
Neha


PART 4 — UPDATE PRIVATE SALARY
-----------------------------------------------------------

Create another method:

updateSalary(newSalary)


The method should update the employee's salary
inside the WeakMap using:

set()


Give Rahul a new salary:

55000


Print Rahul's updated salary.


PART 5 — CHECK PRIVATE DATA
-----------------------------------------------------------

Use:

privateEmployeeData.has(employee)


to check whether private salary data exists for:

Rahul
Aman


Print the results.


PART 6 — DELETE PRIVATE DATA
-----------------------------------------------------------

Delete Neha's private salary data using:

privateEmployeeData.delete(neha)


Then check:

privateEmployeeData.has(neha)


Print the result.


PART 7 — TEST THE CLASS
-----------------------------------------------------------

Create these objects:

const rahul = new Employee(
    "Rahul",
    "IT",
    50000
);

const aman = new Employee(
    "Aman",
    "HR",
    45000
);

const neha = new Employee(
    "Neha",
    "Finance",
    60000
);


Print:

Rahul's name
Rahul's department
Rahul's salary

Aman's name
Aman's department
Aman's salary

Neha's name
Neha's department
Neha's salary


PART 8 — PRIVACY TEST
-----------------------------------------------------------

Try to access:

rahul.salary


Print the result.

Observe what happens.

The salary should NOT be directly stored as:

this.salary


The salary should be retrieved through:

getSalary()


PART 9 — FINAL TEST
-----------------------------------------------------------

Update Rahul's salary to:

60000

Print Rahul's salary.

Delete Neha's private salary data.

Check whether Neha still has private data.

Print the final status.


IMPORTANT:

Use WeakMap methods:

set()
get()
has()
delete()


Do NOT use:

size
keys()
values()
entries()
forEach()


The WeakMap key must always be the actual employee
OBJECT:

rahul
aman
neha


Do NOT use:

"Rahul"
"Aman"
"Neha"

as WeakMap keys.


===========================================================
*/