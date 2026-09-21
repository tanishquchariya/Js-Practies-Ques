// ============================================================
// Q2 — Bank Account Report Generator
// ============================================================
//
// Create an object called "account" with:
//
// accountHolder: "Tanishq"
// accountNumber: "ACC101"
// accountType: "Savings"
// balance: 50000
// isActive: true
//
// Create a nested object called "branch":
//
// name: "State Bank"
// city: "Bhopal"
// state: "Madhya Pradesh"
//
// ------------------------------------------------------------
// TASK 1 — Property Access
// ------------------------------------------------------------
//
// Print accountHolder and accountType using DOT notation.
//
// Print balance and accountNumber using BRACKET notation.
//
// ------------------------------------------------------------
// TASK 2 — Modify Object
// ------------------------------------------------------------
//
// Change:
//
// balance → 65000
//
// Add:
//
// minimumBalance → 10000
//
// Add:
//
// currency → "INR"
//
// Delete:
//
// isActive
//
// Then use "in" to check whether isActive still exists.
//
// ------------------------------------------------------------
// TASK 3 — Dynamic Property Access
// ------------------------------------------------------------
//
// Create:
//
// const property = "balance";
//
// Print the balance using:
//
// account[property]
//
// Then create:
//
// const branchProperty = "city";
//
// Use the variable to access the branch city:
//
// account.branch[branchProperty]
//
// ------------------------------------------------------------
// TASK 4 — for...in
// ------------------------------------------------------------
//
// Use a for...in loop to display all properties of the
// account object.
//
// Format:
//
// accountHolder: Tanishq
// accountNumber: ACC101
// accountType: Savings
// balance: 65000
//
// etc.
//
// IMPORTANT:
//
// Use:
//
// account[key]
//
// inside the loop.
//
// ------------------------------------------------------------
// TASK 5 — Object.values()
// ------------------------------------------------------------
//
// Create:
//
// const accountValues = Object.values(account);
//
// Print all values.
//
// Then convert accountValues into a string using:
//
// toString()
//
// Print the resulting string.
//
// ------------------------------------------------------------
// TASK 6 — Object.entries()
// ------------------------------------------------------------
//
// Create:
//
// const accountEntries = Object.entries(account);
//
// Use a loop to display each property and its value.
//
// Format:
//
// accountHolder => Tanishq
// accountNumber => ACC101
// accountType => Savings
// balance => 65000
//
// etc.
//
// ------------------------------------------------------------
// TASK 7 — JSON.stringify()
// ------------------------------------------------------------
//
// Convert the account object into a JSON string:
//
// const accountJSON = JSON.stringify(account);
//
// Print the result.
//
// ------------------------------------------------------------
// TASK 8 — Account Method
// ------------------------------------------------------------
//
// Add a method called:
//
// getAccountSummary()
//
// The method should RETURN:
//
// Holder: Tanishq
// Account: ACC101
// Type: Savings
// Balance: 65000
//
// Use "this" for every property.
//
// Do NOT hardcode the values inside the method.
//
// ------------------------------------------------------------
// TASK 9 — Deposit Method
// ------------------------------------------------------------
//
// Create:
//
// deposit(amount)
//
// If amount > 0:
//
//     Add amount to this.balance.
//
//     Return:
//
//     Deposit successful
//
// Otherwise return:
//
//     Invalid deposit amount
//
// ------------------------------------------------------------
// TASK 10 — Withdrawal Method
// ------------------------------------------------------------
//
// Create:
//
// withdraw(amount)
//
// Rules:
//
// If amount <= 0:
//
//     Return:
//
//     Invalid withdrawal amount
//
// If amount > this.balance:
//
//     Return:
//
//     Insufficient balance
//
// Otherwise:
//
//     Subtract amount from this.balance.
//
//     Return:
//
//     Withdrawal successful
//
// ------------------------------------------------------------
// TASK 11 — Perform Transactions
// ------------------------------------------------------------
//
// Perform:
//
// deposit(10000)
//
// withdraw(25000)
//
// withdraw(100000)
//
// deposit(-500)
//
// After all operations, print the final balance.
//
// ------------------------------------------------------------
// TASK 12 — Add Method AFTER Object Creation
// ------------------------------------------------------------
//
// AFTER the account object has been created,
// add:
//
// getUpperCaseHolder()
//
// It should RETURN:
//
// TANISHQ
//
// Use:
//
// this.accountHolder.toUpperCase()
//
// ------------------------------------------------------------
// TASK 13 — Generate Final Report
// ------------------------------------------------------------
//
// Call:
//
// account.getAccountSummary()
//
// account.getUpperCaseHolder()
//
// Print both returned values.
//
// Then display the account in FOUR different ways:
//
// 1. Direct object
// 2. for...in
// 3. Object.values()
// 4. Object.entries()
// 5. JSON.stringify()
//
// ------------------------------------------------------------
// TASK 14 — Nested Object Display
// ------------------------------------------------------------
//
// Use Object.entries() on the "branch" object.
//
// Display:
//
// name => State Bank
// city => Bhopal
// state => Madhya Pradesh
//
// ------------------------------------------------------------
// REQUIREMENTS
// ------------------------------------------------------------
//
// - Do not manually create arrays.
// - Use objects.
// - Use nested objects.
// - Dot notation.
// - Bracket notation.
// - Dynamic bracket notation.
// - Change properties.
// - Add properties.
// - Delete properties.
// - "in" operator.
// - for...in.
// - Object.values().
// - Object.entries().
// - JSON.stringify().
// - Object methods.
// - this.
// - Parameters.
// - return.
// - if/else.
// - Add a method after object creation.
// - toUpperCase().
// - Modify the actual balance.
// ============================================================