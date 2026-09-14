// 🔴 Question 2 — Strict Mode Challenge

// Create a JavaScript program using:

// "use strict";

// at the top of the program.

// Create a function called:

// bankTransaction()

// Inside the function:

// Create:
// let accountBalance = 50000;
// const accountHolder = "Amit";
// Increase the balance by 10000.
// Create an undeclared variable:
// transactionId = "TXN101";

// Print:
// accountHolder
// accountBalance
// transactionId
// Try to delete the accountBalance variable.
// Create another block:
// {
//     let withdrawal = 5000;
//     const transactionType = "Withdrawal";

//     console.log(withdrawal);
//     console.log(transactionType);
// }
// After the block, try to print:
// withdrawal
// transactionType
// Call:
// bankTransaction();
// 🚨 Your challenge

// Run the program without removing any problematic lines first.

// Observe the error.

// Then comment out the error-causing line and run it again.

// Determine:

// Why does transactionId = "TXN101" cause an error?
// Why does deleting accountBalance cause an error?
// Why can withdrawal and transactionType be used inside { }?
// Why can't they be used outside { }?
// What does "use strict" change compared with normal JavaScript?

// Your Strict Mode material specifically demonstrates that undeclared variables and certain operations such as deleting variables are not allowed in strict mode.

// Code : 

// 🔴 Question 2 — Strict Mode Challenge

"use strict";

function bankTransaction() {

    let accountBalance = 50000;
    const accountHolder = "Amit";

    // Increase account balance by 10000
    accountBalance = accountBalance + 10000;

    // ❌ Error in Strict Mode:
    // transactionId = "TXN101";

    // To make transactionId valid, declare it:
    let transactionId = "TXN101";

    console.log(accountHolder);
    console.log(accountBalance);
    console.log(transactionId);

    // ❌ Error in Strict Mode:
    // delete accountBalance;

    {
        let withdrawal = 5000;
        const transactionType = "Withdrawal";

        console.log(withdrawal);
        console.log(transactionType);
    }

    // ❌ Error because withdrawal is block-scoped:
    // console.log(withdrawal);

    // ❌ Error because transactionType is block-scoped:
    // console.log(transactionType);

}

bankTransaction();