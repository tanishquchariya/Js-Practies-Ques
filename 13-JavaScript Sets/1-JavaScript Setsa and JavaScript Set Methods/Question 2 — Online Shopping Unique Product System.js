// =====================================================
// QUESTION 2 — Online Shopping Unique Product System
// =====================================================

// Create a JavaScript program for an Online Shopping System.
//
// The system receives product names from different
// categories. Some products may appear multiple times.
//
// Your job is to remove duplicates and compare categories
// using JavaScript Set.

// -----------------------------------------------------
// Step 1 — Create Sets
// -----------------------------------------------------

// Create a Set called electronics containing:
//
// "Laptop"
// "Mouse"
// "Keyboard"
// "Monitor"
// "Laptop"
// "Mouse"
//
// Create another Set called accessories containing:
//
// "Mouse"
// "Headphones"
// "Webcam"
// "Keyboard"
// "Headphones"
// "USB Cable"


// -----------------------------------------------------
// Step 2 — Add Products
// -----------------------------------------------------

// Add "Printer" to electronics.

// Add "Webcam" to electronics.

// Try adding "Laptop" again.

// Try adding "Headphones" again to accessories.


// -----------------------------------------------------
// Step 3 — Check Products
// -----------------------------------------------------

// Check whether "Laptop" exists in electronics.

// Check whether "Mobile" exists in electronics.

// Check whether "USB Cable" exists in accessories.

// Use has() for all checks.


// -----------------------------------------------------
// Step 4 — Count Unique Products
// -----------------------------------------------------

// Print the number of unique products in electronics.

// Print the number of unique products in accessories.
//
// Remember:
// Set automatically removes duplicate values.


// -----------------------------------------------------
// Step 5 — Difference
// -----------------------------------------------------

// Find products that are available in electronics
// but NOT in accessories.
//
// Store the result in:
//
// electronicsOnly


// Find products that are available in accessories
// but NOT in electronics.
//
// Store the result in:
//
// accessoriesOnly


// Use difference().


// -----------------------------------------------------
// Step 6 — List Products
// -----------------------------------------------------

// Use for...of to print all products in electronicsOnly.

// Use for...of to print all products in accessoriesOnly.


// -----------------------------------------------------
// Step 7 — values()
// -----------------------------------------------------

// Use values() to get an iterator containing all
// electronics products.
//
// Store it in a variable called electronicsValues.
//
// Use for...of to print the values.


// -----------------------------------------------------
// Step 8 — keys()
// -----------------------------------------------------

// Use keys() to get an iterator containing all
// electronics products.
//
// Store it in a variable called electronicsKeys.
//
// Use for...of to print the values.


// -----------------------------------------------------
// Step 9 — Compare keys() and values()
// -----------------------------------------------------

// Print both results and observe:
//
// electronics.keys()
// electronics.values()
//
// For a Set, both return the Set's values.


// -----------------------------------------------------
// Step 10 — Set Type
// -----------------------------------------------------

// Print:
//
// typeof electronics
//
// Then check:
//
// electronics instanceof Set


// -----------------------------------------------------
// Expected output should contain:
//
// Electronics unique products:
// Accessories unique products:
//
// Is Laptop available:
// Is Mobile available:
// Is USB Cable available:
//
// Products only in Electronics:
// ...
//
// Products only in Accessories:
// ...
//
// Electronics using values():
// ...
//
// Electronics using keys():
// ...
//
// Type:
// Is electronics a Set:
// -----------------------------------------------------

// IMPORTANT:
// Do NOT use arrays.
// Do NOT use forEach() for listing.
// Use Set, add(), has(), size, difference(),
// values(), keys(), for...of and instanceof.