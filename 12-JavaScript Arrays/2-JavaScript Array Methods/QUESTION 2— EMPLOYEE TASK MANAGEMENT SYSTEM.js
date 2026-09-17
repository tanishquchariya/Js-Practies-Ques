/*
===========================================================
QUESTION — EMPLOYEE TASK MANAGEMENT SYSTEM
===========================================================

Create a JavaScript program for an Employee Task
Management System.

Create the following array:

const tasks = [
    "Login Page",
    "Dashboard",
    "API Integration",
    "Database Setup",
    "Testing"
];


PART 1 — BASIC ARRAY INFORMATION
-----------------------------------------------------------

1. Print the complete tasks array.

2. Print the total number of tasks using length.

3. Print the first task using at().

4. Print the last task using at(-1).


PART 2 — ADD NEW TASKS
-----------------------------------------------------------

5. Add:

   "Deployment"

   to the END of the tasks array using push().

6. Add:

   "Requirement Analysis"

   to the BEGINNING of the tasks array using unshift().

7. Print the updated tasks array.

8. Store the return value of push() in a variable
   and print it.

9. Store the return value of unshift() in another
   variable and print it.


PART 3 — REMOVE TASKS
-----------------------------------------------------------

10. Remove the last task using pop().

11. Store the removed task in a variable.

12. Remove the first task using shift().

13. Store the removed task in another variable.

14. Print both removed tasks.

15. Print the current tasks array.


PART 4 — JOIN
-----------------------------------------------------------

16. Convert the tasks array into a string using:

       join(" -> ")

17. Store the result in:

       taskList

18. Print taskList.


PART 5 — CONCAT
-----------------------------------------------------------

Create another array:

const urgentTasks = [
    "Security Fix",
    "Bug Fixing",
    "Performance Testing"
];


19. Create a new array called:

       allTasks

    by combining tasks and urgentTasks using concat().

20. Print allTasks.

21. Print tasks.

22. Verify that concat() did not change the original
    tasks array.


PART 6 — SPLICE
-----------------------------------------------------------

Using the current tasks array:

23. Find the position of:

       "API Integration"

    using a loop.

24. Remove "API Integration".

25. Add:

       "REST API Development"

    at the same position.

26. Use splice() to perform the operation.

27. Store the removed element returned by splice()
    in a variable.

28. Print the removed task.

29. Print the updated tasks array.


PART 7 — SLICE
-----------------------------------------------------------

30. Create a new array called:

       selectedTasks

31. Use slice() to extract tasks from index 1
    up to, but NOT including, index 4.

32. Print selectedTasks.

33. Print tasks again.

34. Make sure the original tasks array is unchanged
    by slice().


PART 8 — TOSPLICED
-----------------------------------------------------------

Create:

const sprintTasks = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];


35. Create a new array called:

       updatedSprintTasks

    using toSpliced().

36. Remove:

       "JavaScript"

    and replace it with:

       "TypeScript"

37. Print sprintTasks.

38. Print updatedSprintTasks.

39. Check whether the original sprintTasks array
    changed.


PART 9 — COPYWITHIN
-----------------------------------------------------------

Create:

const taskCategories = [
    "Frontend",
    "Backend",
    "Database",
    "Testing"
];


40. Print taskCategories before copyWithin().

41. Use copyWithin() to copy the element at index 0
    to index 2.

42. Print taskCategories after copyWithin().

43. Do NOT add or remove any element.

44. Check the length of taskCategories before and
    after copyWithin().


PART 10 — FLAT
-----------------------------------------------------------

Create:

const employeeTasks = [
    ["Login", "Signup"],
    ["Dashboard", "Profile"],
    ["API", "Database"]
];


45. Use flat() to create:

       flatTasks

46. Print flatTasks.

47. Print flatTasks.length.


PART 11 — ARRAY TO STRING
-----------------------------------------------------------

48. Convert flatTasks to a string using:

       toString()

49. Store the result in:

       flatTaskString

50. Print flatTaskString.


PART 12 — FINAL REPORT
-----------------------------------------------------------

Print a final report containing:

========== EMPLOYEE TASK REPORT ==========

Current Tasks:
...

Total Tasks:
...

First Task:
...

Last Task:
...

Removed by pop():
...

Removed by shift():
...

Removed by splice():
...

All Tasks:
...

Selected Tasks:
...

Updated Sprint Tasks:
...

Task Categories:
...

Flattened Employee Tasks:
...

Flattened Tasks as String:
...


IMPORTANT:

Use these Array methods:

at()
push()
pop()
shift()
unshift()
join()
concat()
splice()
slice()
copyWithin()
flat()
toSpliced()
toString()
length


You may also use:

for
for...of
if/else
functions
variables
array indexes


Do NOT use:

map()
filter()
reduce()
find()
sort()
forEach()


IMPORTANT:

Do not manually calculate the results.

Let JavaScript calculate everything.

Do not create unnecessary extra operations after
completing each part because they may change the array
and affect your final results.

===========================================================
*/