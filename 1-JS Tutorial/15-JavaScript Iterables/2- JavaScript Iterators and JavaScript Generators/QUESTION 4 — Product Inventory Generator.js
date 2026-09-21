/*
===========================================================
QUESTION 2 — PRODUCT INVENTORY GENERATOR
===========================================================

Create a Product Inventory System using Generators.

DATA
-----------------------------------------------------------
*/

const products = [
    {
        id: 101,
        name: "Laptop",
        price: 75000,
        stock: 5
    },
    {
        id: 102,
        name: "Mouse",
        price: 800,
        stock: 20
    },
    {
        id: 103,
        name: "Keyboard",
        price: 1500,
        stock: 0
    },
    {
        id: 104,
        name: "Monitor",
        price: 12000,
        stock: 8
    },
    {
        id: 105,
        name: "Headphones",
        price: 2500,
        stock: 15
    }
];


/*
===========================================================
PART 1 — PRODUCT GENERATOR
===========================================================

Create:

function* productGenerator() {

}

Yield every product one by one.

Then use:

for...of

to print:

Laptop - 75000
Mouse - 800
Keyboard - 1500
Monitor - 12000
Headphones - 2500

===========================================================
*/


/*
===========================================================
PART 2 — AVAILABLE PRODUCTS
===========================================================

Create:

function* availableProducts() {

}

Yield only products where:

stock > 0

Print their names.

Expected:

Laptop
Mouse
Monitor
Headphones

===========================================================
*/


/*
===========================================================
PART 3 — EXPENSIVE PRODUCTS
===========================================================

Create:

function* expensiveProducts() {

}

Yield products whose price is greater than 5000.

Expected:

Laptop
Monitor

===========================================================
*/


/*
===========================================================
PART 4 — PRODUCT STATUS
===========================================================

Create:

function* productStatus() {

}

For every product, yield a NEW object:

{
    name: "Laptop",
    price: 75000,
    status: "Available"
}

Rules:

stock > 0
    → "Available"

stock === 0
    → "Out of Stock"

Print:

Laptop - Available
Mouse - Available
Keyboard - Out of Stock
Monitor - Available
Headphones - Available

===========================================================
*/


/*
===========================================================
PART 5 — MANUAL next()
===========================================================

Create:

const generator = productStatus();

Call:

generator.next()
generator.next()
generator.next()

Store the results and print:

value
done

Observe which product is returned each time.

===========================================================
*/


/*
===========================================================
PART 6 — COUNT PRODUCTS
===========================================================

Using the generator:

Count how many products are currently available.

Expected:

Available Products: 4

Do NOT use:

filter()
reduce()
forEach()

===========================================================
*/


/*
===========================================================
PART 7 — TOTAL STOCK
===========================================================

Create a generator that yields only the stock values.

Then use iteration to calculate:

Total Stock

Expected:

48

===========================================================
*/


/*
===========================================================
PART 8 — FINAL CHALLENGE
===========================================================

Create:

function* productReport() {

}

For every product yield:

{
    id: 101,
    name: "Laptop",
    price: 75000,
    stock: 5,
    category: "PREMIUM"
}

Rules:

price >= 10000
    → "PREMIUM"

price >= 2000
    → "MID-RANGE"

price < 2000
    → "BUDGET"

Expected:

Laptop - PREMIUM
Mouse - BUDGET
Keyboard - BUDGET
Monitor - PREMIUM
Headphones - MID-RANGE


IMPORTANT
-----------------------------------------------------------

Use:

✓ function*
✓ yield
✓ next()
✓ for...of
✓ if/else
✓ arrays
✓ objects
✓ variables
✓ counters

Do NOT use:

✗ map()
✗ filter()
✗ reduce()
✗ forEach()

===========================================================
*/