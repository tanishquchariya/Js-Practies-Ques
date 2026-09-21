/*
===========================================================
QUESTION — EMPLOYEE ACCESS TRACKING SYSTEM
===========================================================

Create a JavaScript program for an Employee Access
Tracking System using WeakSet.

Create four employee objects:

employee1:
name = "Rahul"
department = "IT"

employee2:
name = "Aman"
department = "HR"

employee3:
name = "Rohit"
department = "Finance"

employee4:
name = "Neha"
department = "IT"


Create a WeakSet called:

authorizedEmployees


REQUIREMENTS:

1. Add employee1, employee2, and employee4
   to the WeakSet.

   Do NOT add employee3.


2. Check whether employee1 is authorized.

   Expected result:

   Rahul is authorized.


3. Check whether employee3 is authorized.

   Expected result:

   Rohit is not authorized.


4. Create a function:

       checkAccess(employee)

   The function should check whether the employee
   exists in authorizedEmployees.

   If the employee exists, print:

       Rahul from IT department has access.

   Otherwise, print:

       Rohit from Finance department does not have access.


5. Call the function for:

       employee1
       employee2
       employee3
       employee4


6. Now remove employee2 from the WeakSet using:

       delete()


7. Check employee2's access again.

   Expected result:

       Aman from HR department does not have access.


8. Create a new employee object:

       employee5:
       name = "Priya"
       department = "Marketing"


9. Check whether employee5 is authorized WITHOUT
   adding employee5 to the WeakSet first.

   Expected result:

       Priya from Marketing department does not have access.


IMPORTANT:

Use ONLY these WeakSet methods:

       add()
       has()
       delete()


Remember:

- WeakSet can store ONLY objects.
- Do NOT store strings directly.
- Do NOT use .size.
- Do NOT use for...of.
- Do NOT use forEach().
- Do NOT use .values().
- Do NOT try to print all WeakSet elements.


BONUS:

Create another function:

       authorizeEmployee(employee)

   This function should add the employee to the
   WeakSet and then print:

       Priya has been authorized.


Use the function to authorize employee5.

Then check employee5 again using checkAccess().


EXPECTED FINAL FLOW:

Employee 1 → authorized
Employee 2 → authorized
Employee 3 → not authorized
Employee 4 → authorized

Remove Employee 2

Employee 2 → not authorized

Employee 5 → not authorized

Authorize Employee 5

Employee 5 → authorized

===========================================================
*/