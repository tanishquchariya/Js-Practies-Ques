// Q3 — Bank Account Manager
//
// Create an object called "bankAccount" with the following properties:
//
// accountHolder: "Tanishq"
// accountNumber: "ACC101"
// balance: 25000
//
// Add a method called deposit(amount).
//
// The deposit() method should:
// 1. Check whether the amount is greater than 0.
// 2. If the amount is valid, add it to the balance.
// 3. Print the deposited amount.
// 4. Print the updated balance.
// 5. If the amount is 0 or negative, print "Invalid deposit amount".
//
// Add another method called withdraw(amount).
//
// The withdraw() method should:
// 1. Check whether the amount is greater than 0.
// 2. Check whether the amount is less than or equal to the current balance.
// 3. If both conditions are true, subtract the amount from the balance.
// 4. Print the withdrawn amount.
// 5. Print the updated balance.
// 6. If the amount is greater than the balance, print "Insufficient balance".
// 7. If the amount is 0 or negative, print "Invalid withdrawal amount".
//
// Add another method called getAccountDetails().
//
// This method should print:
//
// Account Holder: Tanishq
// Account Number: ACC101
// Current Balance: 25000
//
// Requirements:
//
// 1. Use an object.
// 2. Use methods inside the object.
// 3. Use "this" to access the object's properties.
// 4. deposit() and withdraw() must accept an argument.
// 5. getAccountDetails() does not need an argument.
// 6. The balance should actually change after deposit or withdrawal.
//
// Test your methods using:
//
// deposit(5000)
// withdraw(3000)
// getAccountDetails()
//
// Expected final balance:
//
// 27000
//
// Challenge:
//
// Also test:
//
// withdraw(50000)
// deposit(-1000)
// withdraw(-500)

// Code :

const bankAccount = {
    accountHolder: "Tanishq",
    accountNumber: "ACC101",
    balance: 25000,

    deposit: function (amount) {
        if (amount > 0) {
            this.balance = amount + this.balance;

            console.log(`Deposited: ${amount}`);
            console.log(`Updated Balance: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount");
        }
    },

    withdraw: function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance = this.balance - amount;

            console.log(`Withdrawn: ${amount}`);
            console.log(`Updated Balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            console.log("Invalid withdrawal amount");
        }
    },

    getAccountDetails: function () {
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Current Balance: ${this.balance}`);
    }
};

bankAccount.deposit(5000);
bankAccount.withdraw(3000);
bankAccount.getAccountDetails();