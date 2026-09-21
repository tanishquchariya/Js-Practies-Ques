// Question 2 — Nested Function + Block Scope Challenge

// Create a JavaScript program for a Bank Account System.

// At the global level, create:

// bankName = "National Bank"
// accountType = "Savings"
// balance = 100000

// Use:

// let for bankName
// const for accountType
// var for balance

// Now create a function called bankDetails().

// Inside bankDetails():

// Create a let variable called balance with value 50000.
// Create a const variable called customerName with value "Amit".
// Create a var variable called accountNumber with value "ACC101".

// Then create an if block:

// if (balance > 30000) {
//     // create your block variables here
// }

// Inside the if block:

// Create a let variable called withdrawal with value 10000.
// Create a const variable called minimumBalance with value 5000.
// Create a var variable called accountNumber with value "ACC202".

// Then create another function inside bankDetails() called showAccount().

// Inside showAccount():

// Print bankName
// Print accountType
// Print balance
// Print customerName
// Print accountNumber

// Finally, call the functions and print appropriate values from the correct scopes.

// 🎯 Your challenge

// You must figure out which variable JavaScript accesses when the same variable name exists in multiple scopes.

// Pay special attention to:

// global balance
//       ↓
// function balance
//       ↓
// if-block accountNumber
//       ↓
// function accountNumber

// Also determine:

// Can showAccount() access variables from bankDetails()?
// Can bankDetails() access withdrawal?
// What happens to accountNumber when you declare another var accountNumber inside the if block?
// Which balance does showAccount() print?
// Which variables are global, function-scoped, and block-scoped?

// Code : 

let bankName = "National Bank"
const accountType = "Savings"
var balance = 100000

function bankDetails() {
    let balance = 50000
    const customerName = "Amit"
    var accountNumber = "ACC101"

    if (balance > 30000) {
        // create your block variables here
        let withdrawal = 10000
        const minimumBalance = 5000
        var accountNumber = "ACC202"
    }
    function showAccount() {
        console.log(bankName);
        console.log(accountType);
        console.log(balance);
        console.log(customerName);
        console.log(accountNumber);
        
        
    }
    showAccount()
}
bankDetails()

