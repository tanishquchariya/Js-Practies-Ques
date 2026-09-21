/*
===========================================================
QUESTION 2 — GENERATOR BASED ORDER PROCESSING SYSTEM
===========================================================

You are building an Order Processing System.

Each order has:

    id
    customer
    amount
    status
    items


DATA
-----------------------------------------------------------
*/

const orders = [
    {
        id: 1001,
        customer: "Rahul",
        amount: 2500,
        status: "Delivered",
        items: ["Laptop Bag", "Mouse"]
    },
    {
        id: 1002,
        customer: "Aman",
        amount: 1200,
        status: "Pending",
        items: ["Keyboard", "Mouse"]
    },
    {
        id: 1003,
        customer: "Neha",
        amount: 5400,
        status: "Delivered",
        items: ["Monitor", "Keyboard"]
    },
    {
        id: 1004,
        customer: "Priya",
        amount: 800,
        status: "Cancelled",
        items: ["Mouse"]
    },
    {
        id: 1005,
        customer: "Rohit",
        amount: 3200,
        status: "Pending",
        items: ["Webcam", "Headset"]
    }
];


/*
===========================================================
PART 1 — NORMAL ITERATION
===========================================================

Using for...of:

Print:

Order 1001 - Rahul - 2500 - Delivered
Order 1002 - Aman - 1200 - Pending
...

===========================================================
*/


/*
===========================================================
PART 2 — NESTED ITERATION
===========================================================

Print every order and its items.

Example:

Order 1001:
Laptop Bag
Mouse

===========================================================
*/


/*
===========================================================
PART 3 — CREATE A GENERATOR
===========================================================

Create a generator function:

function* orderGenerator() {

    // your code

}

The generator should yield every order one by one.

Create:

const generator = orderGenerator();

Then manually call:

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

Observe:

value
done

===========================================================
*/


/*
===========================================================
PART 4 — UNDERSTAND yield
===========================================================

Modify the generator so that it yields
only the order customer names.

Expected values:

Rahul
Aman
Neha
Priya
Rohit

Use:

yield

Do NOT return the names.

IMPORTANT:

Understand the difference between:

yield
return

===========================================================
*/


/*
===========================================================
PART 5 — GENERATOR + for...of
===========================================================

Use:

for...of

to iterate over the generator.

Print:

Rahul
Aman
Neha
Priya
Rohit

===========================================================
*/


/*
===========================================================
PART 6 — FILTER USING GENERATOR
===========================================================

Create another generator:

function* deliveredOrders() {

}

Yield only orders whose status is:

"Delivered"

Expected:

Rahul
Neha

===========================================================
*/


/*
===========================================================
PART 7 — GENERATOR WITH CONDITIONS
===========================================================

Create:

function* expensiveOrders() {

}

Yield orders whose amount is greater than 3000.

Expected:

Neha
Rohit

===========================================================
*/


/*
===========================================================
PART 8 — GENERATOR + CALCULATION
===========================================================

Create a generator that yields the amount
of every order.

Then use iteration to calculate:

Total Order Value

Expected:

13100

===========================================================
*/


/*
===========================================================
PART 9 — GENERATOR STATE
===========================================================

Create:

function* processOrders() {

    console.log("Step 1");

    yield "Order received";

    console.log("Step 2");

    yield "Payment verified";

    console.log("Step 3");

    yield "Order shipped";

    console.log("Step 4");

    return "Order completed";
}

Then:

const process = processOrders();

Call:

console.log(process.next());
console.log(process.next());
console.log(process.next());
console.log(process.next());

Carefully observe the order in which:

console.log("Step 1")
console.log("Step 2")
console.log("Step 3")
console.log("Step 4")

are executed.

===========================================================
*/


/*
===========================================================
PART 10 — next() RESULT
===========================================================

Create a generator:

function* numbers() {

    yield 10;
    yield 20;
    yield 30;

}

Then:

const gen = numbers();

Store each result:

const result1 = gen.next();
const result2 = gen.next();
const result3 = gen.next();
const result4 = gen.next();

Print:

result1.value
result1.done

result2.value
result2.done

...

Understand exactly when:

done === true

===========================================================
*/


/*
===========================================================
PART 11 — GENERATOR + SET
===========================================================

Create a generator that yields every skill
from every order.

For example:

Laptop Bag
Mouse
Keyboard
Mouse
Monitor
Keyboard
Mouse
Webcam
Headset

Then create a Set from the generated values
to remove duplicate items.

Expected unique items:

Laptop Bag
Mouse
Keyboard
Monitor
Webcam
Headset

===========================================================
*/


/*
===========================================================
PART 12 — FINAL HARD CHALLENGE
===========================================================

Create a generator:

function* orderReport() {

}

The generator should yield objects in this format:

{
    id: 1001,
    customer: "Rahul",
    amount: 2500,
    category: "LOW"
}

Rules:

amount >= 3000
    → category = "HIGH"

amount >= 1500
    → category = "MEDIUM"

amount < 1500
    → category = "LOW"


Then iterate through the generator and print:

1001 - Rahul - 2500 - LOW
1002 - Aman - 1200 - LOW
1003 - Neha - 5400 - HIGH
1004 - Priya - 800 - LOW
1005 - Rohit - 3200 - HIGH


IMPORTANT RULES
-----------------------------------------------------------

Use:

✓ function*
✓ yield
✓ next()
✓ for...of
✓ if/else
✓ arrays
✓ objects
✓ Set
✓ functions
✓ string methods

Do NOT use:

✗ map()
✗ filter()
✗ reduce()
✗ forEach()

unless a specific part explicitly asks you
to compare with those concepts.

===========================================================
*/