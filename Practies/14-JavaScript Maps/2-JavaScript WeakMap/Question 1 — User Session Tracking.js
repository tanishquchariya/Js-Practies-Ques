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
   - Otherwise, print that the .


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

// Code : 
// Create user objects

const user1 = {
   name: "Rahul",
   role: "Admin"
};

const user2 = {
   name: "Aman",
   role: "Developer"
};

const user3 = {
   name: "Neha",
   role: "Manager"
};

const user4 = {
   name: "Priya",
   role: "Tester"
};


// Create WeakMap

const userSessions = new WeakMap();


// Add sessions

userSessions.set(user1, "Session-101");
userSessions.set(user2, "Session-102");
userSessions.set(user3, "Session-103");


// Get sessions

console.log(userSessions.get(user1));
console.log(userSessions.get(user2));
console.log(userSessions.get(user3));


// Check users

console.log("Does user1 exist?", userSessions.has(user1));
console.log("Does user4 exist?", userSessions.has(user4));


// Add user4

userSessions.set(user4, "Session-104");

console.log(
   "User4 session:",
   userSessions.get(user4)
);


// Delete user2

console.log(
   "Was user2 deleted?",
   userSessions.delete(user2)
);


// Check user2

console.log(
   "Does user2 exist?",
   userSessions.has(user2)
);


// Function to get session

function getUserSession(user) {

   if (userSessions.has(user)) {

      console.log(
         `${user.name} has ${userSessions.get(user)}`
      );

   } else {

      console.log(
         `${user.name} has no active session`
      );
   }
}


// Test function

getUserSession(user1);
getUserSession(user2);
getUserSession(user3);
getUserSession(user4);


// Function to remove session

function removeUserSession(user) {

   const removed = userSessions.delete(user);

   console.log(
      `${user.name} session removed:`,
      removed
   );
}


// Remove user3

removeUserSession(user3);


// Check user3

console.log(
   "Does user3 exist?",
   userSessions.has(user3)
);