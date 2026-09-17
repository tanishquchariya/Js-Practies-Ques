/*
===========================================================
QUESTION — PRODUCT INVENTORY ARRAY MANAGER
===========================================================

Create a JavaScript program for a Product Inventory System.

Create this array:

products

with:

"Laptop"
"Mouse"
"Keyboard"
"Monitor"
"Headphones"


PART 1 — ACCESS PRODUCTS
-----------------------------------------------------------

Print:

1. The first product using at()
2. The last product using at(-1)
3. The total number of products


PART 2 — ADD PRODUCTS
-----------------------------------------------------------

Add "Webcam" to the end using push().

Add "USB Cable" to the beginning using unshift().

Print the updated products array.

PART 3 — REMOVE PRODUCTS
-----------------------------------------------------------

Remove the last product using pop().

Store the removed product in a variable.

Remove the first product using shift().

Store the removed product in another variable.

Print both removed products.

Print the updated products array.


PART 4 — JOIN PRODUCTS
-----------------------------------------------------------

Convert the products array into a string using:

join(" | ")

Print the result.


PART 5 — CONCATENATE ARRAYS
-----------------------------------------------------------

Create another array:

accessories

containing:

"Charger"
"Power Bank"
"HDMI Cable"

Create a new array called:

completeInventory

using concat().

Print completeInventory.

Print products again and verify that the original
products array has not been changed by concat().


PART 6 — SPLICE
-----------------------------------------------------------

Using the products array:

1. Find the position of "Keyboard".
2. Remove "Keyboard".
3. Add "Gaming Keyboard" at the same position.

Use splice().

Print the removed product.

Print the updated products array.


PART 7 — SLICE
-----------------------------------------------------------

Create a new array called:

selectedProducts

using slice().

Extract the products from index 1 up to,
but NOT including, index 4.

Print selectedProducts.

Print products again.


PART 8 — COPYWITHIN
-----------------------------------------------------------

Create this separate array:

const categories = [
    "Electronics",
    "Accessories",
    "Gaming",
    "Office"
];

Print categories before copyWithin().

Use copyWithin() to copy the element at index 0
to index 2.

Print categories after copyWithin().


PART 9 — FLAT
-----------------------------------------------------------

Create:

const warehouseProducts = [
    ["Laptop", "Mouse"],
    ["Keyboard", "Monitor"],
    ["Webcam", "Headphones"]
];

Use flat() to create:

allProducts

Print allProducts.


PART 10 — ARRAY TO STRING
-----------------------------------------------------------

Convert allProducts to a string using:

toString()

Print the result.


PART 11 — FINAL REPORT
-----------------------------------------------------------

Print a final report containing:

Total products
First product
Last product
Removed product from pop()
Removed product from shift()
Current products
Complete inventory
Selected products
Flattened products


IMPORTANT:

Use the following Array methods:

at()
push()
pop()
shift()
unshift()
join()
concat()
splice()
slice()
copyWithin()
flat()
toString()
length


Do NOT use:

map()
filter()
reduce()
find()
sort()
forEach()


You may use:

for
for...of
if/else
functions
variables
objects
arrays


Do not manually hard-code the calculated results.

Calculate them using JavaScript.

===========================================================
*/

// Code : 
const products = ["Laptop",
   "Mouse",
   "Keyboard",
   "Monitor",
   "Headphones"]

console.log(products.at(0));
console.log(products.at(-1));
console.log(products.length);

products.push("Webcam")
products.unshift("USB Cable")
console.log(products);

let A = products.pop()
let B = products.shift()
console.log(A, B);
console.log(products);

let C = products.join("|")
console.log(C);

const accessories = ["Charger",
   "Power Bank",
   "HDMI Cable"
]

const completeInventory = []
const ans = accessories.concat(completeInventory)
console.log(`concat Array :  ${ans} `);
console.log(products);


console.log("Splice");

for (let i = 0; i<products.length;i++) {
   if (products[i] === 'Keyboard') {
      let ans2 = products[i]
      products.splice(products[i],1,"Gaming Keyboard")
      console.log(ans2);
      console.log(products);
      
      
   }
}
