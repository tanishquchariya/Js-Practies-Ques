// ============================================================
// Q1 — Smart Employee Management System
// ============================================================
//
// Create an object called "employee" with the following properties:
//
// name: "Rahul"
// age: 26
// department: "Software"
// salary: 55000
// isActive: true
//
// Also create a nested object called "address":
//
// city: "Bhopal"
// state: "Madhya Pradesh"
// country: "India"
//
// ------------------------------------------------------------
// TASK 1 — Accessing Properties
// ------------------------------------------------------------
//
// Print the employee's name and department using DOT notation.
//
// Print the employee's salary using BRACKET notation.
//
// ------------------------------------------------------------
// TASK 2 — Changing a Property
// ------------------------------------------------------------
//
// Increase the salary from 55000 to 65000.
//
// Print the updated salary.
//
// ------------------------------------------------------------
// TASK 3 — Adding a Property
// ------------------------------------------------------------
//
// Add a new property:
//
// experience: 3
//
// Print the employee's experience.
//
// ------------------------------------------------------------
// TASK 4 — Checking a Property
// ------------------------------------------------------------
//
// Check whether the employee object contains a "phone" property.
//
// If it exists, print:
//
// Phone property exists
//
// Otherwise print:
//
// Phone property does not exist
//
// ------------------------------------------------------------
// TASK 5 — Deleting a Property
// ------------------------------------------------------------
//
// Delete the "age" property.
//
// Then check whether "age" still exists in the employee object.
//
// Print an appropriate message.
//
// ------------------------------------------------------------
// TASK 6 — Nested Object
// ------------------------------------------------------------
//
// Print the employee's city using DOT notation.
//
// Print the employee's country using BRACKET notation.
//
// ------------------------------------------------------------
// TASK 7 — Dynamic Property Access
// ------------------------------------------------------------
//
// Create:
//
// const propertyName = "department";
//
// Use the variable propertyName to access the department.
//
// IMPORTANT:
// You must use:
//
// employee[propertyName]
//
// Do NOT write:
//
// employee["department"]
//
// ------------------------------------------------------------
// TASK 8 — Create an Object Method
// ------------------------------------------------------------
//
// Add a method called "getDetails" inside the employee object.
//
// The method should return:
//
// Employee: Rahul
// Department: Software
// Salary: 65000
// Experience: 3 years
//
// IMPORTANT:
// Use "this" to access the employee's properties.
//
// Do NOT directly write "Rahul", "Software", 65000, etc.
// inside the method.
//
// ------------------------------------------------------------
// TASK 9 — Method with Parameter
// ------------------------------------------------------------
//
// Add another method called "increaseSalary(amount)".
//
// The method should:
//
// 1. Check whether amount is greater than 0.
// 2. If yes, increase the employee's salary by amount.
// 3. If amount is 0 or negative, print:
//
// Invalid salary increase
//
// The method should modify the actual salary property.
//
// Example:
//
// employee.increaseSalary(5000);
//
// After calling it, the salary should become:
//
// 70000
//
// ------------------------------------------------------------
// TASK 10 — Adding a Method AFTER Object Creation
// ------------------------------------------------------------
//
// Add a new method called "getUpperCaseName"
// AFTER the employee object has already been created.
//
// The method should return the employee's name in uppercase.
//
// Example:
//
// RAHUL
//
// IMPORTANT:
// Use:
//
// this.name.toUpperCase()
//
// ------------------------------------------------------------
// TASK 11 — Method Calling
// ------------------------------------------------------------
//
// Call:
//
// employee.getDetails()
//
// employee.increaseSalary(5000)
//
// employee.getUpperCaseName()
//
// Print the returned value of getUpperCaseName().
//
// Remember:
//
// employee.getDetails
//
// and
//
// employee.getDetails()
//
// are NOT the same.
//
// ------------------------------------------------------------
// TASK 12 — Final Object
// ------------------------------------------------------------
//
// Finally print the complete employee object.
//
// Make sure:
//
// 1. age has been deleted.
// 2. experience exists.
// 3. salary has been updated.
// 4. address still exists.
// 5. all methods are present.
//
// ------------------------------------------------------------
// REQUIREMENTS
// ------------------------------------------------------------
//
// - Use objects only.
// - DO NOT use arrays.
// - Use both dot notation and bracket notation.
// - Use a nested object.
// - Use the "in" operator.
// - Use delete.
// - Use a dynamic property variable.
// - Use object methods.
// - Use "this" inside methods.
// - Use a method parameter.
// - Add one method after object creation.
// - Use toUpperCase().
// - Use return where appropriate.
// - Do not hardcode property values inside methods.
// ============================================================


// Code :

const employee = {
    name: "Rahul",
    age: 26,
    department: "Software",
    salary: 55000,
    isActive: true,
    address: {
        city: "Bhopal",
        state: "Madhya Pradesh",
        country: "India"
    },

    getDetails: function () {
        return `Employee: ${this.name}
        Department: ${this.department}
        Salary: ${this.salary}
        Experience: ${this.experience} years`;
    },
    increaseSalary: function (amount) {
        if (amount > 0) {
            this.salary += amount
        } else {
            console.log("Invalid salary increase");

        }
    }
}
employee.getUpperCaseName = function () {
    return this.name.toUpperCase();

}
console.log(employee.name);
console.log(employee["salary"]);

employee.salary = 65000
console.log(employee.salary);

employee.experience = 3
console.log(employee.experience);

let ans = "phone" in employee
if (ans) {
    console.log("Phone property exists");

} else {
    console.log("Phone property does not exist");

}

delete employee.age

let ans2 = "age" in employee
if (ans2) {
    console.log("Age still exists");
} else {
    console.log("Age property deleted");
}
console.log(employee.address.city);
console.log(employee["address"]["country"]);


const propertyName = "department";

console.log(employee[propertyName]);
employee.increaseSalary(5000);
console.log(employee.getDetails());
console.log(employee.getUpperCaseName());
console.log(employee);
