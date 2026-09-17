/*
===========================================================
QUESTION 2 — PRODUCT INVENTORY & CATEGORY ANALYSIS
===========================================================

Create a JavaScript program for a Product Inventory
Analysis System.

Create an array called:

products

with the following objects:

{
    name: "Laptop",
    category: "Electronics",
    price: 75000
}

{
    name: "Mouse",
    category: "Electronics",
    price: 1200
}

{
    name: "Office Chair",
    category: "Furniture",
    price: 8500
}

{
    name: "Desk",
    category: "Furniture",
    price: 12000
}

{
    name: "Keyboard",
    category: "Electronics",
    price: 2500
}

{
    name: "Notebook",
    category: "Stationery",
    price: 200
}


PART 1 — CREATE PRODUCT MAP
-----------------------------------------------------------

Create a Map called:

productPrices

Store:

Product Name → Price

For example:

"Laptop" → 75000


Add all six products to the Map using set().


PART 2 — GET PRODUCT PRICE
-----------------------------------------------------------

Use get() to print the prices of:

Laptop
Keyboard
Notebook


PART 3 — ADD NEW PRODUCT
-----------------------------------------------------------

Add:

"Monitor" → 15000

to productPrices.

Print the updated Map.


PART 4 — UPDATE PRODUCT PRICE
-----------------------------------------------------------

The Laptop price changes from:

75000

to:

72000

Use set() to update the price.

Print the new Laptop price.


PART 5 — CHECK PRODUCTS
-----------------------------------------------------------

Use has() to check:

"Mouse"

and:

"Printer"

Print the results.


PART 6 — DELETE PRODUCT
-----------------------------------------------------------

Delete:

"Notebook"

using delete().

Print the updated Map.


PART 7 — MAP SIZE
-----------------------------------------------------------

Print the number of products currently stored
in productPrices.


PART 8 — DISPLAY ALL PRODUCTS
-----------------------------------------------------------

Use entries() with a for...of loop.

Print:

Product: Laptop
Price: 72000

Product: Mouse
Price: 1200

...


PART 9 — FIND TOTAL INVENTORY VALUE
-----------------------------------------------------------

Use values() with a loop.

Calculate the total price of all products
currently stored in productPrices.

Store it in:

totalInventoryValue

Print the result.


PART 10 — GROUP PRODUCTS BY CATEGORY
-----------------------------------------------------------

Use:

Map.groupBy()

to group the original products array
according to the product category.

Create:

productsByCategory

The groups should be based on:

Electronics
Furniture
Stationery


Print the resulting Map.


PART 11 — ACCESS GROUPS
-----------------------------------------------------------

Use get() on productsByCategory to access:

Electronics

and:

Furniture

Print the products belonging to each group.


PART 12 — LOOP THROUGH GROUPS
-----------------------------------------------------------

Use:

for...of

with:

productsByCategory.entries()

Print every category and the products
belonging to that category.

Expected style:

Category: Electronics

Laptop
Mouse
Keyboard


Category: Furniture

Office Chair
Desk


Category: Stationery

Notebook


PART 13 — MAP SIZE AFTER GROUPING
-----------------------------------------------------------

Print:

productsByCategory.size

This should represent the number of categories/groups.


PART 14 — FINAL CHALLENGE
-----------------------------------------------------------

Create a function:

displayCategory(category)

The function should:

1. Receive a category name as a parameter.
2. Check whether that category exists in
   productsByCategory.
3. If it exists, print all products in that category.
4. If it does not exist, print:

   Category not found.


Test the function with:

"Electronics"

"Furniture"

"Clothing"


PART 15 — FINAL REPORT
-----------------------------------------------------------

Print:

========== PRODUCT INVENTORY REPORT ==========

Total Products:
...

Laptop Price:
...

Keyboard Price:
...

Does Mouse Exist?
...

Does Printer Exist?
...

Total Inventory Value:
...

Total Categories:
...

Electronics Products:
...

Furniture Products:
...

Stationery Products:
...


IMPORTANT:

Use these Map concepts:

new Map()
set()
get()
has()
delete()
size
entries()
keys()
values()
forEach()

Also use:

Map.groupBy()


You may use:

for
for...of
if/else
functions
arrays
objects
template literals
console.log()


Do NOT use:

map()
filter()
reduce()
find()
sort()


IMPORTANT:

Do NOT manually create the category groups.

Map.groupBy() must perform the grouping.

Do NOT manually calculate the total inventory value.

Use the Map values and a loop.


===========================================================
*/