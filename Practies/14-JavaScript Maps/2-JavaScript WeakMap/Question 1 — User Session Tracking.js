/*
===========================================================
QUESTION 1 — USER SESSION TRACKING SYSTEM
===========================================================

Create a JavaScript program for a User Session Tracking
System using WeakMap.


Create four user objects:

user1:
name = "Rahul"
role = "Admin"

user2:
name = "Aman"
role = "Developer"

user3:
name = "Neha"
role = "Manager"

user4:
name = "Priya"
role = "Tester"


Create a WeakMap called:

userSessions


REQUIREMENTS:

1. Add session information for user1, user2,
   and user3 using set().

   Example session data:

   user1 → "Session-101"
   user2 → "Session-102"
   user3 → "Session-103"


2. Use get() to print the session of:

   user1
   user2
   user3


3. Use has() to check:

   user1
   user4


4. Add user4 to the WeakMap with:

   "Session-104"


5. Print user4's session using get().


6. Delete user2 using delete().

7. Check whether user2 still exists using has().


8. Create this function:

   getUserSession(user)

   The function should:

   - Check whether the user exists in userSessions.
   - If yes, print the user's name and session.
   - Otherwise, print that the user has no active session.


9. Test getUserSession() with:

   user1
   user2
   user3
   user4


10. Create another function:

    removeUserSession(user)

    The function should:

    - Delete the user's session.
    - Print whether the session was removed.


11. Use the function to remove:

    user3


12. Check user3 again using getUserSession().


IMPORTANT:

Use only these WeakMap methods:

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


Remember:

The KEYS must be OBJECTS.

Do not use:

"Rahul"

as a WeakMap key.

Use:

user1

as the key.

===========================================================
*/