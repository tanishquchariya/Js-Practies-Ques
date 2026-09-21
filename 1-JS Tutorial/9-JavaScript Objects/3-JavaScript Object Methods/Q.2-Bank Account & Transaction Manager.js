// ============================================================
// Q2 — Bank Account & Transaction Manager
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
// TASK 1 — Basic Property Access
// ------------------------------------------------------------
//
// Print:
//
// Account Holder
// Account Number
// Account Type
//
// Use DOT notation for these.
//
// Print the balance using BRACKET notation.
//
// ------------------------------------------------------------
// TASK 2 — Change Property
// ------------------------------------------------------------
//
// Change accountType from:
//
// "Savings"
//
// to:
//
// "Premium Savings"
//
// Print the updated accountType.
//
// ------------------------------------------------------------
// TASK 3 — Add Property
// ------------------------------------------------------------
//
// Add:
//
// minimumBalance: 10000
//
// Print it.
//
// ------------------------------------------------------------
// TASK 4 — Nested Object Access
// ------------------------------------------------------------
//
// Print the branch city using DOT notation.
//
// Print the branch state using BRACKET notation.
//
// ------------------------------------------------------------
// TASK 5 — Property Checking
// ------------------------------------------------------------
//
// Check whether the account object has:
//
// "email"
//
// If it exists, print:
//
// Email is available
//
// Otherwise print:
//
// Email is not available
//
// ------------------------------------------------------------
// TASK 6 — Delete Property
// ------------------------------------------------------------
//
// Delete:
//
// isActive
//
// Then use the "in" operator to verify whether it still exists.
//
// Print an appropriate message.
//
// ------------------------------------------------------------
// TASK 7 — Dynamic Property Access
// ------------------------------------------------------------
//
// Create:
//
// const selectedProperty = "balance";
//
// Use:
//
// account[selectedProperty]
//
// to print the balance.
//
// IMPORTANT:
// Do NOT use:
//
// account["balance"]
//
// ------------------------------------------------------------
// TASK 8 — Create getAccountInfo() Method
// ------------------------------------------------------------
//
// Create a method:
//
// getAccountInfo()
//
// The method should RETURN a string containing:
//
// Account Holder: Tanishq
// Account Number: ACC101
// Account Type: Premium Savings
// Balance: 50000
//
// IMPORTANT:
// Use "this" to access the properties.
//
// Do NOT hardcode the values inside the method.
//
// ------------------------------------------------------------
// TASK 9 — Deposit Method
// ------------------------------------------------------------
//
// Create a method:
//
// deposit(amount)
//
// Rules:
//
// If amount is greater than 0:
//
//     Add amount to the current balance.
//
//     Print:
//
//     Deposit successful
//
//     Print the new balance.
//
// If amount is 0 or negative:
//
//     Print:
//
//     Invalid deposit amount
//
// IMPORTANT:
// You must modify:
//
// this.balance
//
// ------------------------------------------------------------
// TASK 10 — Withdraw Method
// ------------------------------------------------------------
//
// Create a method:
//
// withdraw(amount)
//
// Rules:
//
// 1. amount must be greater than 0.
//
// 2. amount must NOT be greater than the current balance.
//
// If amount is valid:
//
//     Subtract amount from balance.
//
//     Print:
//
//     Withdrawal successful
//
//     Print the new balance.
//
// If amount is greater than balance:
//
//     Print:
//
//     Insufficient balance
//
// If amount is 0 or negative:
//
//     Print:
//
//     Invalid withdrawal amount
//
// IMPORTANT:
// Use:
//
// this.balance
//
// ------------------------------------------------------------
// TASK 11 — Minimum Balance Check
// ------------------------------------------------------------
//
// Create a method:
//
// checkMinimumBalance()
//
// The method should check whether the current balance is
// greater than or equal to minimumBalance.
//
// If yes, return:
//
// Minimum balance maintained
//
// Otherwise return:
//
// Minimum balance requirement not maintained
//
// IMPORTANT:
// Access minimumBalance using "this".
//
// ------------------------------------------------------------
// TASK 12 — Add Method AFTER Object Creation
// ------------------------------------------------------------
//
// AFTER creating the account object, add a method:
//
// getUpperCaseHolder()
//
// This method should return the account holder's name in uppercase.
//
// Example:
//
// TANIShQ
//
// Actually, the correct result for "Tanishq" should be:
//
// TANISHQ
//
// IMPORTANT:
// Use:
//
// this.accountHolder.toUpperCase()
//
// ------------------------------------------------------------
// TASK 13 — Perform Transactions
// ------------------------------------------------------------
//
// Perform the following operations:
//
// 1. Deposit 10000
// 2. Withdraw 15000
// 3. Withdraw 60000
// 4. Deposit -500
//
// Observe which operations are successful and which are rejected.
//
// ------------------------------------------------------------
// TASK 14 — Dynamic Access Again
// ------------------------------------------------------------
//
// Create:
//
// const property = "accountType";
//
// Use:
//
// account[property]
//
// to print the current account type.
//
// ------------------------------------------------------------
// TASK 15 — Final Information
// ------------------------------------------------------------
//
// Call:
//
// account.getAccountInfo()
//
// account.checkMinimumBalance()
//
// account.getUpperCaseHolder()
//
// Print all returned values.
//
// Finally print the complete account object.
//
// ------------------------------------------------------------
// IMPORTANT REQUIREMENTS
// ------------------------------------------------------------
//
// - NO ARRAYS.
// - Use an object.
// - Use nested objects.
// - Use dot notation.
// - Use bracket notation.
// - Use dynamic bracket notation.
// - Use property modification.
// - Use property addition.
// - Use delete.
// - Use the "in" operator.
// - Use multiple object methods.
// - Use "this".
// - Use method parameters.
// - Use return.
// - Use if/else.
// - Add a method after object creation.
// - Use toUpperCase().
// - Actually modify the balance.
// - Do not hardcode values inside methods.
// ============================================================