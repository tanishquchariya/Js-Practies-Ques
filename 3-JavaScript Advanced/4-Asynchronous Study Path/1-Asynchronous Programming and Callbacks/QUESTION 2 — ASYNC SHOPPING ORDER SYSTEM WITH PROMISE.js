/*
===========================================================
QUESTION 2 — ASYNC SHOPPING ORDER SYSTEM
===========================================================

Create an Asynchronous Shopping Order System.

You will simulate:

    1. Validate cart
    2. Calculate total
    3. Apply discount
    4. Process payment
    5. Generate order
    6. Display final result


Use JavaScript Promise.

You MUST use:

    new Promise()
    resolve()
    reject()
    .then()
    .catch()
    setTimeout()


===========================================================
CART DATA
===========================================================
*/

const cart = [
    {
        name: "Laptop",
        price: 55000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 800,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 1500,
        quantity: 1
    }
];


/*
===========================================================
PART 1 — VALIDATE CART
===========================================================

Create:

validateCart(cart)

This function must RETURN A PROMISE.

Use setTimeout() inside the Promise.

Rules:

If cart is an array AND cart.length > 0

    resolve(cart)

Otherwise

    reject("Cart is empty or invalid")


Example:

validateCart(cart)
    .then(...)
    .catch(...)


IMPORTANT:

Do NOT directly console.log() inside the Promise.

Use resolve() and reject().
*/


/*
===========================================================
PART 2 — CALCULATE CART TOTAL
===========================================================

After cart validation succeeds, calculate:

total =
    price × quantity
    for every product


For the given cart:

Laptop:
55000 × 1

Mouse:
800 × 2

Keyboard:
1500 × 1


Use a loop or appropriate array method.

Return/pass the total to the next .then().

Example:

.then(cart => {
    // calculate total

    return total;
})


IMPORTANT:

The next .then() must receive the total.

*/


/*
===========================================================
PART 3 — APPLY DISCOUNT
===========================================================

Create discount rules:

If total >= 50000

    discount = 10%

Else if total >= 30000

    discount = 5%

Otherwise

    discount = 0%


Calculate:

discountAmount =
    total × discountPercentage / 100


Then:

afterDiscount =
    total - discountAmount


Pass an object to the next .then():

{
    total: ...,
    discountPercentage: ...,
    discountAmount: ...,
    afterDiscount: ...
}


===========================================================
PART 4 — PROCESS PAYMENT
===========================================================

Create:

processPayment(orderData)

This function must RETURN A PROMISE.

Use setTimeout().

Payment rules:

If afterDiscount <= 60000

    resolve(orderData)

Otherwise

    reject("Payment amount exceeds allowed limit")


If payment succeeds, add:

paymentStatus: "Success"


Example:

{
    total: 58000,
    discountAmount: 5800,
    afterDiscount: 52200,
    paymentStatus: "Success"
}


IMPORTANT:

Use resolve() for successful payment.

Use reject() for failed payment.


===========================================================
PART 5 — GENERATE ORDER
===========================================================

After payment succeeds, create an order object:

{
    orderId: 1001,
    items: cart,
    total: ...,
    discount: ...,
    finalAmount: ...,
    paymentStatus: "Success"
}


The orderId should be generated using:

1000 + some value

You can use any simple logic to generate it.


Return this object to the next .then().


===========================================================
PART 6 — DISPLAY ORDER
===========================================================

The final .then() should display:

=============================
ORDER CONFIRMED
=============================

Order ID: 1001

Items:
Laptop
Mouse
Keyboard

Original Total: ...
Discount: ...
Final Amount: ...

Payment Status: Success

=============================


Use console.log().


===========================================================
PART 7 — ERROR HANDLING
===========================================================

Use ONE .catch() at the end.

Example structure:

validateCart(cart)

    .then(...)

    .then(...)

    .then(...)

    .then(...)

    .catch(error => {
        console.log("Order Failed:", error);
    });


If any Promise rejects, the remaining success
.then() blocks should NOT execute.

The .catch() should handle the error.


===========================================================
IMPORTANT PROMISE CHAIN
===========================================================

Your program should follow this flow:

validateCart()
      ↓
    .then()
      ↓
calculate total
      ↓
    .then()
      ↓
apply discount
      ↓
    .then()
      ↓
process payment
      ↓
    .then()
      ↓
generate order
      ↓
    .then()
      ↓
display order
      ↓
   .catch()
   (if error)


===========================================================
REQUIREMENTS
===========================================================

You MUST use:

✓ Objects
✓ Arrays
✓ Functions
✓ Loops or array methods
✓ if / else if / else
✓ Arithmetic operators
✓ new Promise()
✓ resolve()
✓ reject()
✓ setTimeout()
✓ .then()
✓ Multiple .then()
✓ .catch()
✓ return values between .then()

Do NOT use:

✗ async
✗ await


===========================================================
EXTRA CHALLENGE
===========================================================

Create a second cart:

const emptyCart = [];


Run your Promise system with emptyCart.

It should produce:

Order Failed: Cart is empty or invalid


Then create another cart where the final amount
exceeds 60000.

It should produce:

Order Failed: Payment amount exceeds allowed limit


===========================================================
*/