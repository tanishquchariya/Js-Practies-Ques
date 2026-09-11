// ============================================================
// Q1 — Product Inventory Display System
// ============================================================
//
// Create an object called "product" with:
//
// name: "Laptop"
// brand: "Dell"
// price: 75000
// stock: 12
// category: "Electronics"
// isAvailable: true
//
// Also create a nested object called "seller":
//
// name: "Tech Store"
// city: "Bhopal"
// country: "India"
//
// ------------------------------------------------------------
// TASK 1 — Basic Object Display
// ------------------------------------------------------------
//
// Print the complete product object.
//
// Then try to store the object in a variable called "text":
//
// const text = product;
//
// Print:
//
// text
//
// Observe what JavaScript displays when an object is used
// directly in a string context.
//
// ------------------------------------------------------------
// TASK 2 — Display Individual Properties
// ------------------------------------------------------------
//
// Print:
//
// Product Name
// Brand
// Price
// Stock
//
// Use DOT notation for the first two properties.
//
// Use BRACKET notation for the price and stock.
//
// ------------------------------------------------------------
// TASK 3 — Modify the Object
// ------------------------------------------------------------
//
// Change the price from:
//
// 75000
//
// to:
//
// 70000
//
// Add a new property:
//
// discount: 10
//
// Delete the "stock" property.
//
// Then check whether "stock" still exists using the "in"
// operator.
//
// ------------------------------------------------------------
// TASK 4 — Dynamic Property Access
// ------------------------------------------------------------
//
// Create:
//
// const selectedProperty = "category";
//
// Use:
//
// product[selectedProperty]
//
// to print the category.
//
// Do NOT hardcode "category" inside the brackets.
//
// ------------------------------------------------------------
// TASK 5 — Nested Object
// ------------------------------------------------------------
//
// Print the seller's city using DOT notation.
//
// Print the seller's country using BRACKET notation.
//
// ------------------------------------------------------------
// TASK 6 — for...in LOOP
// ------------------------------------------------------------
//
// Use a for...in loop to display ALL remaining properties
// of the product object.
//
// For every property, print:
//
// propertyName: propertyValue
//
// IMPORTANT:
//
// Inside the loop, use:
//
// product[propertyName]
//
// Do NOT use:
//
// product.propertyName
//
// because propertyName is a variable.
//
// ------------------------------------------------------------
// TASK 7 — Object.values()
// ------------------------------------------------------------
//
// Use:
//
// Object.values(product)
//
// Store the result in a variable called "values".
//
// Print the values.
//
// Then convert the values into a string using:
//
// toString()
//
// and print the resulting string.
//
// ------------------------------------------------------------
// TASK 8 — Object.entries()
// ------------------------------------------------------------
//
// Use:
//
// Object.entries(product)
//
// Store the result in a variable called "entries".
//
// Use a loop to display every property and value.
//
// Output should follow this idea:
//
// name => Laptop
// brand => Dell
// price => 70000
//
// etc.
//
// ------------------------------------------------------------
// TASK 9 — JSON.stringify()
// ------------------------------------------------------------
//
// Convert the complete product object into a JSON string
// using:
//
// JSON.stringify(product)
//
// Store it in:
//
// const jsonData
//
// Print jsonData.
//
// ------------------------------------------------------------
// TASK 10 — Object Method
// ------------------------------------------------------------
//
// Add a method called:
//
// getProductInfo()
//
// The method should RETURN a string containing:
//
// Product: Laptop
// Brand: Dell
// Price: 70000
// Category: Electronics
//
// IMPORTANT:
//
// Use "this" to access the properties.
//
// Do NOT hardcode the property values inside the method.
//
// ------------------------------------------------------------
// TASK 11 — Add Method AFTER Object Creation
// ------------------------------------------------------------
//
// After the product object has already been created,
// add a method:
//
// getUpperCaseBrand()
//
// It should return the brand in uppercase.
//
// Example:
//
// DELL
//
// Use:
//
// this.brand.toUpperCase()
//
// ------------------------------------------------------------
// TASK 12 — Final Display
// ------------------------------------------------------------
//
// Call:
//
// product.getProductInfo()
//
// product.getUpperCaseBrand()
//
// Print both returned values.
//
// Finally print:
//
// 1. The complete product object.
// 2. Object.values(product)
// 3. Object.entries(product)
// 4. JSON.stringify(product)
//
// ------------------------------------------------------------
// REQUIREMENTS
// ------------------------------------------------------------
//
// - Objects only for your own data.
// - No manually created arrays.
// - Use dot notation.
// - Use bracket notation.
// - Use dynamic bracket notation.
// - Use nested objects.
// - Use property modification.
// - Use property addition.
// - Use delete.
// - Use "in".
// - Use for...in.
// - Use Object.values().
// - Use Object.entries().
// - Use JSON.stringify().
// - Use object methods.
// - Use this.
// - Use return.
// - Add a method after object creation.
// - Use toUpperCase().
// ============================================================

// Code :

const product = {
    name: "Laptop",
    brand: "Dell",
    price: 75000,
    stock: 12,
    category: "Electronics",
    isAvailable: true,
    seller: {
        name: "Tech Store",
        city: "Bhopal",
        country: "India"
    },
    getProductInfo: function () {
        return `Product: ${this.name}
        Brand: ${this.brand}
        Price: ${this.price}
        Category: ${this.category}`;
    },

}

console.log(product);

const text = product;
console.log(text);

console.log(`Product Name : ${product.name}`);
console.log(`Brand : ${product.brand}`);
console.log(`Price : ${product["price"]}`);
console.log(`Stock : ${product["stock"]}`);

product.price = 70000

product.discount = 10
delete product.stock

let ans = "stock" in product
if (ans) {
    console.log("stock still exists");

} else {
    console.log("stock not exists");

}
const selectedProperty = "category";
console.log(product[selectedProperty]);

console.log(product.seller.city);
console.log(product["seller"]["country"]);

let texts = "";
for (let x in product) {
    texts += x + ": " + product[x] + "\n";
}
console.log(texts);

let arr = Object.values(product)
console.log(arr);

let values = arr.toString()
console.log(values);

let entries = "";
for (let [key, value] of Object.entries(product)) {
    entries += key + " => " + value + "\n";
}
console.log(entries);


const jsonData = JSON.stringify(product)
console.log(jsonData);

console.log(product.getProductInfo());
product.getUpperCaseBrand = function () {
    return this.brand.toUpperCase();
};
console.log(product.getUpperCaseBrand());