// Q7 — Employee Profile Manager
//
// Create an object called "employee" with these properties:
//
// name: "Rahul"
// age: 25
// department: "IT"
// salary: 50000
// isActive: true
//
// Also create a nested object called "contact" containing:
//
// email: "rahul@example.com"
// phone: "9876543210"
// city: "Delhi"
//
// 1. Print the employee's name and department using DOT NOTATION.
//
// Expected:
//
// Name: Rahul
// Department: IT
//
//
// 2. Print the employee's phone number using BRACKET NOTATION.
//
// Expected:
//
// Phone: 9876543210
//
//
// 3. Change the employee's salary from 50000 to 60000.
//
// Print:
//
// Updated Salary: 60000
//
//
// 4. Add a new property called "experience".
//
// Set its value to:
//
// 2
//
// Print:
//
// Experience: 2 years
//
//
// 5. Check whether the employee has a property called "role"
//    using the "in" operator.
//
// If it exists, print:
//
// Role exists
//
// Otherwise print:
//
// Role does not exist
//
//
// 6. Delete the "age" property from the employee object.
//
// After deleting it, use the "in" operator to check whether
// "age" still exists.
//
// If it does not exist, print:
//
// Age property deleted
//
//
// 7. Access the nested contact object's city using DOT NOTATION.
//
// Expected:
//
// Contact City: Delhi
//
//
// 8. Access the nested contact object's email using BRACKET NOTATION.
//
// Expected:
//
// Email: rahul@example.com
//
//
// 9. Create a variable:
//
// const propertyName = "salary";
//
// Use this variable with BRACKET NOTATION to access the salary.
//
// Expected:
//
// Salary: 60000
//
//
// 10. Create another variable:
//
// const contactProperty = "phone";
//
// Use this variable to access the phone number from the nested
// contact object.
//
// Expected:
//
// Phone: 9876543210
//
//
// Requirements:
//
// 1. Use an object.
// 2. Use a nested object.
// 3. Use dot notation.
// 4. Use bracket notation.
// 5. Change an existing property.
// 6. Add a new property.
// 7. Delete a property.
// 8. Use the "in" operator.
// 9. Use variables with bracket notation.
// 10. Do not use arrays.
// 11. Do not hard-code the output values.
//     Access the values from the employee object.
//
// Finally:
//
// console.log(employee);
//
// Check that the age property has actually been deleted.


// Code:

const employee = {
    name: "Rahul",
    age: 25,
    department: "IT",
    salary: 50000,
    isActive: true,
    contact: {
        email: "rahul@example.com",
        phone: "9876543210",
        city: "Delhi"
    }
}
console.log(`Name : ${employee.name}`);
console.log(`Department : ${employee.department}`);

console.log(`Phone : ${employee["contact"]["phone"]}`);

employee.salary = 60000
console.log(`Updated Salary: ${employee.salary}`);

employee.experience = 2
console.log(`Experience: ${employee.experience} years`);

let ans = "role" in  employee
if(ans){
    console.log("Role exists");
}else{
    console.log("Role does not exist");
}

delete employee.age

let ans2 = "age" in employee
if(!ans2){
console.log("Age property deleted");
}
console.log(`Contact City: ${employee.contact.city}`);

console.log(`Email: ${employee["contact"]["email"]}`);

const propertyName = "salary";
console.log(`Salary: ${employee[propertyName]}`);

const contactProperty = "phone";
console.log(`Phone: ${employee["contact"][contactProperty]}`);

console.log(employee);


