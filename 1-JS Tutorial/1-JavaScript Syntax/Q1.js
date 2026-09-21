// Q - 1: Create a variable called name and store your name in it.
// Then print it using console.log().
// let name = "Tanishq"
// console.log(name)

// Question 2 — Variables
// Create three variables:
// let age = 22, city = "jaipur" , isStudent = true;
// console.log(age)
// console.log(city)
// console.log(isStudent)

// // Q - 3 Now let's test whether you actually understand variables, reassignment, expressions, and const.
// let price = 500;
// let quantity = 3;
// let total = price * quantity
// console.log(total);
// price = 600;
// total = price * quantity
// console.log(total);
// const taxRate = 0.18
// let tax = total * taxRate
// console.log(tax);

// Q - 4: Create a variable called productName with the value "Laptop", a variable called price with the value 45000, 
// and a variable called quantity with the value 2. Calculate the total price by multiplying price and quantity 
// and store it in a variable called total. Then create a constant called discount with the value 0.10, calculate the discount amount from total, 
// and store it in a variable called discountAmount. Finally, calculate the final price after subtracting the discount amount from the total and store it in a variable called finalPrice. Print the product name, total price, discount amount, and final price using console.log().

// Expected output
// Laptop
// 90000
// 9000
// 81000

// Code : 
// let productName = "Laptop", price = 45000 , quantity = 2
// let total = price*quantity
// const discount = 0.10

// let discountAmount = total * discount
// let finalPrice = total - discountAmount

// console.log(productName);
// console.log(total);
// console.log(discountAmount);
// console.log(finalPrice);



// Q - 5 Create a variable called studentName with the value "Tanishq", a variable called mathMarks with the value 85, a variable called scienceMarks with the value 90, and a variable called englishMarks with the value 80. Calculate the total marks and store the result in a variable called totalMarks. Then calculate the average marks and store the result in a variable called averageMarks. Create a constant called subjects with the value 3. Finally, print the student name, total marks, and average marks using console.log().
// code:


let studentName = "Tanishq"
let mathMarks = 85 , scienceMarks = 90, englishMarks = 80

let totalMarks = mathMarks + scienceMarks + englishMarks

const subjects = 3
let averageMarks = totalMarks/subjects

console.log(studentName);
console.log(totalMarks);
console.log(averageMarks);



