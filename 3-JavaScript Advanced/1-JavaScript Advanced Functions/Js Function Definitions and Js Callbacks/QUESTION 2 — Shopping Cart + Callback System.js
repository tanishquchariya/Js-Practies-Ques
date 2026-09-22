/*
===========================================================
QUESTION 2 — SHOPPING CART + CALLBACK SYSTEM
===========================================================

Create a JavaScript program for a Shopping Cart System
using a CALLBACK FUNCTION.

You have the following cart:

Laptop      → price: 55000, quantity: 1
Mouse       → price: 800,   quantity: 2
Keyboard    → price: 1500,  quantity: 1
Headphones  → price: 2500,  quantity: 2


PART 1 — CREATE CART ARRAY
-----------------------------------------------------------

Create an array called:

cart

Store each product as an object containing:

name
price
quantity

Example:

{
    name: "Laptop",
    price: 55000,
    quantity: 1
}


PART 2 — CREATE calculateCart FUNCTION
-----------------------------------------------------------

Create a function:

calculateCart(cart, callback)

The function should:

1. Loop through every product.

2. Calculate the total price of each product:

   price × quantity

For example:

Laptop:

55000 × 1 = 55000

Mouse:

800 × 2 = 1600


3. Print every product's calculated price.

Expected:

Laptop → 55000
Mouse → 1600
Keyboard → 1500
Headphones → 5000


PART 3 — CALCULATE CART TOTAL
-----------------------------------------------------------

Calculate the total cost of all products.

Expected:

Total = 63100


PART 4 — CALL THE CALLBACK
-----------------------------------------------------------

After calculating the total, call:

callback(total);


PART 5 — CREATE CALLBACK FUNCTION
-----------------------------------------------------------

Create a function:

checkOrder(total)

The function should check the total amount.

If:

total >= 50000

Print:

"Premium Order"

Otherwise print:

"Normal Order"


PART 6 — CALL calculateCart
-----------------------------------------------------------

Call:

calculateCart(cart, checkOrder);


Expected output:

Laptop → 55000
Mouse → 1600
Keyboard → 1500
Headphones → 5000

Total = 63100

Premium Order


IMPORTANT:
-----------------------------------------------------------

checkOrder is the CALLBACK FUNCTION.

Pass the function:

calculateCart(cart, checkOrder);

Do NOT write:

calculateCart(cart, checkOrder());


===========================================================
CONCEPTS TO PRACTICE
===========================================================

1. Arrays
2. Objects
3. for loop
4. if / else
5. Functions
6. Function parameters
7. Callback functions
8. Arithmetic operators
9. Variables
10. console.log()
===========================================================
*/

// Code :

const cart = [{
    name: "Laptop",
    price: 55000,
    quantity: 1
},
{
    name: "Mouse",
    price: 800,
    quantity: 2
},{
    name: "Keyboard",
    price: 1500,
    quantity: 1
},{
    name: "Headphones",
    price: 2500,
    quantity: 2
},
]
function calculateCart(cart, callback) {
    let total = 0;
    for (const i of cart) {
        console.log(`${i.name} ->  ${i.price * i.quantity}`);
        total += i.price * i.quantity;
    }
    console.log("Total =", total);
    callback(total)
    
}
function checkOrder(total) {
    if(total >= 50000){
        console.log("Premium Order");
        
    }else{
        console.log("Normal Order");
        
    }
}
calculateCart(cart,checkOrder)
