/*
===========================================================
QUESTION 2 — E-COMMERCE ORDER PROCESSING SYSTEM
===========================================================

Create a JavaScript program for an E-Commerce Order
Processing System.

Create an array called "orders" containing at least
6 order objects.

Each order should contain:

orderId
customer
city
items
status
discount

Each "items" property should contain an array of objects.

Example:

{
    orderId: 101,
    customer: "Rahul",
    city: "Gwalior",

    items: [
        {
            name: "Laptop",
            price: 60000,
            quantity: 1
        },
        {
            name: "Mouse",
            price: 1000,
            quantity: 2
        }
    ],

    status: "Delivered",
    discount: 10
}

Create different orders with different customers,
products, quantities, discounts and statuses.


PART 1 — DISPLAY ALL ORDERS
-----------------------------------------------------------

Use forEach() to display:

Order 101 → Rahul → Delivered
Order 102 → Aman → Pending
...


PART 2 — CALCULATE ORDER SUBTOTAL
-----------------------------------------------------------

For every order, calculate the subtotal.

For each item:

price × quantity

Example:

Laptop → 60000 × 1 = 60000
Mouse → 1000 × 2 = 2000

Subtotal = 62000

Use reduce() to calculate the subtotal of each order.


PART 3 — APPLY DISCOUNT
-----------------------------------------------------------

Each order has a discount percentage.

Example:

Subtotal = ₹62000
Discount = 10%

Final Price = ₹55800

Use map() to create a NEW array containing:

orderId
customer
subtotal
discount
finalPrice

Do NOT modify the original orders array.


PART 4 — FIND HIGH-VALUE ORDERS
-----------------------------------------------------------

Use filter() to find orders where:

finalPrice >= ₹50000

Display:

High Value Orders:

Order 101 → Rahul → ₹55800
Order 105 → Priya → ₹72000
...


PART 5 — EXTRACT ALL PRODUCTS
-----------------------------------------------------------

Use flatMap() to create ONE array containing all
products purchased across all orders.

Example:

[
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Laptop",
    ...
]

Then find the UNIQUE products.

You may use another JavaScript concept you already know.


PART 6 — CALCULATE DELIVERED REVENUE
-----------------------------------------------------------

Use reduce() to calculate the total revenue.

IMPORTANT:

Only include orders whose status is:

"Delivered"

Do NOT include:

"Pending"
"Processing"
"Shipped"
"Cancelled"

Display:

Total Delivered Revenue: ₹xxxxx


PART 7 — ORDER STATUS ANALYSIS
-----------------------------------------------------------

Use every() to check:

Are all orders using a valid status?

Valid statuses are:

[
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled"
]

Then use some() to check:

1. Is there at least one cancelled order?

2. Is there at least one pending order?

3. Is there at least one order worth more than
   ₹100000?


PART 8 — FIND MOST EXPENSIVE ORDER
-----------------------------------------------------------

Use reduce() to find the order having the highest
finalPrice.

Display:

Most Expensive Order:

Order ID: 105
Customer: Priya
Amount: ₹92500


PART 9 — ORDER RANKING
-----------------------------------------------------------

Create a NEW array using the spread operator (...).

Example:

const rankedOrders = [...processedOrders];

Sort the orders from:

Highest final price
        ↓
Lowest final price

Do NOT modify the original processedOrders array.

Use entries() to display the ranking.

Expected style:

========== ORDER RANKING ==========

1. Order 105 → Priya → ₹92500
2. Order 101 → Rahul → ₹55800
3. Order 103 → Neha → ₹48500
...


PART 10 — ARRAY.from() CHALLENGE
-----------------------------------------------------------

Create:

const storeCode = "TECHSTORE2026";

Use Array.from() to convert the string into an array
of characters.

Then use the second argument of Array.from() to
transform every character.

Example:

T
E
C
H
S
T
O
R
E
2
0
2
6

You can combine this with another JavaScript concept
you have already learned.


IMPORTANT:

Try to use these Array Iteration concepts:

forEach()
map()
filter()
reduce()
flatMap()
every()
some()
Array.from()
entries()
spread (...)

You can also use:

if/else
loops
functions
objects
strings
numbers
template literals

Do not use external libraries.

===========================================================
Write your complete solution below this comment.
===========================================================
*/