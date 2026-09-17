/*
===========================================================
QUESTION — ONLINE USER TRACKING
===========================================================

Create a WeakSet called onlineUsers.

Create three user objects:

user1:
name = "Rahul"
age = 22

user2:
name = "Aman"
age = 23

user3:
name = "Rohit"
age = 21


REQUIREMENTS:

1. Add user1 and user2 to the WeakSet.

2. Check whether user1 is being tracked.

3. Check whether user3 is being tracked.

4. Delete user1 from the WeakSet.

5. Check again whether user1 is being tracked.

6. Create a function:

       checkUser(user)

   The function should check whether the given user
   exists in the WeakSet.

   If the user exists, print:

       Rahul is being tracked.

   Otherwise print:

       Rahul is not being tracked.

7. Test the function with:

       user1
       user2
       user3


IMPORTANT:

Use only these WeakSet methods:

add()
has()
delete()

Do NOT use:

size
for...of
forEach()
values()

Remember:

WeakSet can store ONLY objects.

===========================================================
*/