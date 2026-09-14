// Q2 — Bank Account System (Medium–Hard)
//
// Create a constructor function called BankAccount that takes accountHolder,
// accountNumber, and balance as parameters. Each bank account should have
// accountHolder, accountNumber, and balance properties. Also give every account
// a default bankName of "State Bank of India" and a default accountType of
// "Savings".
//
// Using prototype, create a deposit(amount) method. This method should add the
// given amount to the account's current balance and print the deposited amount
// and updated balance.
//
// Using prototype, create a withdraw(amount) method. If the withdrawal amount
// is less than or equal to the current balance, subtract it from the balance
// and print the withdrawn amount and remaining balance. If the withdrawal
// amount is greater than the balance, print "Insufficient balance." and do not
// change the balance.
//
// Create another prototype method called getAccountInfo(). It should return the
// account holder's name, account number, bank name, account type, and current
// balance.
//
// Create three different bank account objects using the new keyword. Give each
// account a different account holder, account number, and starting balance.
//
// Perform different operations on them. Deposit money into account1 and then
// withdraw some money from account1. Deposit and withdraw money from account2.
// Try to withdraw money from account3 as well.
//
// After that, change ONLY account1's accountType from "Savings" to "Current".
// Print the accountType of account1, account2, and account3 and observe whether
// changing account1 affects the other objects.
//
// Finally, print the account information of all three accounts using the
// getAccountInfo() method.
//
// IMPORTANT RULES:
// 1. Use a constructor function.
// 2. Use the new keyword to create objects.
// 3. Use this to access object properties.
// 4. All three methods must be created using prototype.
// 5. Do not create separate deposit/withdraw functions for each account.
// 6. Do not look at the previous solution while solving.

