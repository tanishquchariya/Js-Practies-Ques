//  Question — Discount Calculator
// Create an arrow function called:

// calculateDiscount

// It should take 3 parameters:

// price
// discount
// quantity


// Calculate:

// total = price × quantity

// Then calculate the discount:

// discountAmount = total × discount / 100

// Finally:

// finalPrice = total - discountAmount

// The function must return finalPrice.

// Input

// Test your function with:

// Price = 1000
// Discount = 10%
// Quantity = 2

// Price = 500
// Discount = 20%
// Quantity = 3

// Price = 2500
// Discount = 15%
// Quantity = 1

// Expected Output
// 1800
// 1200
// 2125

// Code : 

const calculateDiscount = (price , discount , quantity) =>{
    let total = price * quantity
    let discountAmount = total * discount / 100
    let finalPrice = total - discountAmount
    return finalPrice

}
let Price1 = 1000
let Discount1 = 10
let Quantity1 = 2

let Price2 = 500
let Discount2 = 20
let Quantity2 = 3

let Price3 = 2500
let Discount3 = 15
let Quantity3 = 1

console.log(calculateDiscount(Price1,Discount1,Quantity1));
console.log(calculateDiscount(Price2,Discount2,Quantity2));
console.log(calculateDiscount(Price3,Discount3,Quantity3));
 
