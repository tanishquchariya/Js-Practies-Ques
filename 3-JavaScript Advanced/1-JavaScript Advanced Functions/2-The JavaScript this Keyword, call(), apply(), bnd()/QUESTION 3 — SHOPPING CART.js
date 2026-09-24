/*
===========================================================
QUESTION 3 — SHOPPING CART
===========================================================

Create the following objects:

const customer1 = {
    name: "Rahul",
    discount: 10
};

const customer2 = {
    name: "Priya",
    discount: 20
};


Create this function:

function calculateBill(...prices) {
    // your code
}


The function should:

1. Calculate the total price of all products.

2. Calculate discount:

   discountAmount =
   total × this.discount / 100

3. Calculate final amount:

   finalAmount =
   total - discountAmount

4. Return an object:

{
    customer: this.name,
    total: ...,
    discount: ...,
    finalAmount: ...
}


-----------------------------------------------------------
PART A — USING call()
-----------------------------------------------------------

Call the function using call().

customer1:

1200, 800, 1500, 500

customer2:

2500, 1200, 800


-----------------------------------------------------------
PART B — USING apply()
-----------------------------------------------------------

Create:

const customer3 = {
    name: "Aman",
    discount: 15
};


Create an array:

const prices = [1800, 900, 1200, 600, 400];


Call the SAME function using apply().


-----------------------------------------------------------
PART C — CONCEPT CHALLENGE
-----------------------------------------------------------

Explain in comments why this works:

calculateBill.call(customer1, 1200, 800, 1500);


But this requires:

calculateBill.apply(customer3, prices);


Also test:

calculateBill.call(customer3, prices);


Observe what happens.

Understand why call() does NOT automatically unpack
the array into separate arguments.


CONCEPTS:
-----------------------------------------------------------

- this
- call()
- apply()
- Rest parameters
- Arrays
- Objects
- Loops
- Arithmetic
- Function arguments

===========================================================
*/


// WRITE YOUR CODE FOR QUESTION 3 HERE
