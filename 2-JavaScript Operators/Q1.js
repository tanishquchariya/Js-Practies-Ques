// Q-1 Create variables for a product with an original price of 2500, quantity of 4, and a discount of 15 percent. Calculate the total original cost by multiplying the price by the quantity. Then calculate the discount amount using the total cost and discount percentage. After that, calculate the final amount the customer has to pay after applying the discount. The customer then pays 10000 rupees, so calculate how much money should be returned to the customer. Finally, calculate the remainder when the final amount is divided by 100. Print the total cost, discount amount, final amount, money returned, and remainder.

// Expected output
// Total: 10000
// Discount: 1500
// Final: 8500
// Returned: 1500
// Remainder: 0

// // code :
// let price = 2500, quantity = 4 , discount = 0.15
// let total = price*quantity
// let totaldis = total * discount
// let customer = 10000
// let final = total - totaldis
// let returnamount = customer - final
// let remainder = final % 100

// console.log(total);
// console.log(totaldis);
// console.log(final);
// console.log(returnamount);
// console.log(remainder);


// Q - 2 Question: A shirt costs ₹2000. There are 3 shirts. The store gives a 20% discount. The customer pays ₹6000. Calculate the total price, discount amount, final bill, and amount to return to the customer. Use only JavaScript variables, arithmetic operators, and console.log().

// Expected output:
// 6000
// 1200
// 4800
// 1200

// Code 
let shirtcost = 2000
let totalCost = shirtcost * 3
let customer = 6000

let discountofoneshit = 0.2 * 2000
let alldis = discountofoneshit * 3

let finalBill = totalCost - alldis
let returned = customer - finalBill


console.log(totalCost);
console.log(alldis);
console.log(finalBill);
console.log(returned);
