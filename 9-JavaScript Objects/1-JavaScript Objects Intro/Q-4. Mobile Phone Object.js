// Q4 — Mobile Phone Manager
//
// Create an object called "phone" with the following properties:
//
// brand: "Samsung"
// model: "Galaxy S25"
// price: 80000
// battery: 80
// isOn: false
//
// Add a method called turnOn().
//
// If the phone is already on, print:
// "Phone is already ON"
//
// Otherwise, change isOn to true and print:
// "Phone turned ON"
//
// Add another method called turnOff().
//
// If the phone is already off, print:
// "Phone is already OFF"
//
// Otherwise, change isOn to false and print:
// "Phone turned OFF"
//
// Add another method called usePhone(minutes).
//
// Every 10 minutes of phone usage should reduce the battery by 5%.
//
// For example:
// 10 minutes → battery decreases by 5
// 20 minutes → battery decreases by 10
// 30 minutes → battery decreases by 15
//
// The phone should only be used if isOn is true.
//
// If the phone is OFF, print:
// "Turn on the phone first"
//
// If the phone is ON, reduce the battery and print the remaining battery.
//
// Add another method called getPhoneDetails().
//
// It should print:
//
// Brand: Samsung
// Model: Galaxy S25
// Price: 80000
// Battery: 80%
// Status: OFF
//
// Requirements:
//
// 1. Use an object.
// 2. Use methods.
// 3. Use "this".
// 4. Use function parameters where necessary.
// 5. Modify the object's properties when the phone is turned on/off
//    or when the battery changes.
// 6. Do not use arrays.
// 7. Test all methods at least once.
//
// Try these calls:
//
// phone.turnOn();
// phone.usePhone(20);
// phone.getPhoneDetails();
// phone.turnOff();

// Code :

const phone = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 80000,
    battery: 80,
    isOn: false,
    turnOn: function () {
        if (this.isOn) {
            console.log("Phone is already ON");
        } else {
            this.isOn = true
            console.log("Phone turned ON");
        }
    },
    turnOff: function () {
        if (this.isOn === false) {
            console.log("Phone is already OFF");

        } else {
            this.isOn = false
            console.log("Phone turned OFF");

        }
    },
    usePhone: function (minutes) {
        if (this.isOn) {
            this.battery = this.battery - minutes / 2
            // console.log(`${minutes} minutes -> battery decreases by ${minutes/2} `);
            console.log(this.battery);


        } else {
            console.log("Turn on the phone first");

        }
    },
    getPhoneDetails: function () {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Price: ${this.price}`);
        console.log(`Battery: ${this.battery}`);
        if (this.isOn) {
            console.log("Status: ON");

        } else {
            console.log("Status : OFF");

        }

    }
}

phone.turnOn();
phone.usePhone(20);
phone.getPhoneDetails();
phone.turnOff();