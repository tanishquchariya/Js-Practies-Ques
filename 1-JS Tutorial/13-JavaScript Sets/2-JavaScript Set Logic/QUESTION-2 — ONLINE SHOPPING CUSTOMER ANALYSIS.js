/*
===========================================================
QUESTION — ONLINE SHOPPING CUSTOMER ANALYSIS
===========================================================

Create a JavaScript program for an Online Shopping
Customer Analysis System.

There are three customers and the products they purchased.

Customer A purchased:
Laptop, Mouse, Keyboard, Monitor, Headphones

Customer B purchased:
Laptop, Keyboard, Webcam, Headphones, Microphone

Customer C purchased:
Mobile, Charger, Earphones, Power Bank, Mouse


REQUIREMENTS:

1. Create three Sets:

   customerA
   customerB
   customerC


2. Find the UNION of Customer A and Customer B.

   Store the result in:

   allProducts


3. Find the INTERSECTION of Customer A and Customer B.

   Store the result in:

   commonProducts


4. Find the products purchased by Customer A
   but NOT by Customer B.

   Store the result in:

   onlyInA


5. Find the products purchased by Customer B
   but NOT by Customer A.

   Store the result in:

   onlyInB


6. Find the SYMMETRIC DIFFERENCE between Customer A
   and Customer B.

   Store the result in:

   uniqueProducts


7. Check whether Customer C is a subset of Customer A.

   Store the result in:

   isCSubsetOfA


8. Check whether Customer A is a superset of Customer B.

   Store the result in:

   isASupersetOfB


9. Check whether Customer A and Customer C are disjoint.

   Store the result in:

   areADisjointFromC


10. Create a function:

       compareCustomers(customer1, customer2)

    The function must calculate and return an object
    containing:

       allProducts
       commonProducts
       onlyInFirst
       onlyInSecond
       uniqueProducts

    IMPORTANT:

    Use the function parameters to perform the
    Set operations.

    Do NOT use the original customerA or customerB
    variables directly inside the function.


11. Call the function using:

       customerA
       customerB

    Store the returned object in:

       result


12. Create an array containing all customers:

       const customers = [
           customerA,
           customerB,
           customerC
       ];


13. Use a loop to display the number of products
    purchased by each customer.

    Use the Set property:

       size


14. Create a function:

       findProduct(product)

    The function should check whether the product
    was purchased by:

       Customer A
       Customer B
       Customer C

    Use the Set method:

       has()


15. Test the function with these products:

       "Laptop"
       "Mouse"
       "Mobile"
       "Camera"

    If a product is not purchased by any customer,
    display:

       Camera was not purchased by any customer.


EXPECTED OUTPUT FORMAT:

========== CUSTOMER PRODUCT ANALYSIS ==========

Customer A Products:
...

Customer B Products:
...

Customer C Products:
...

All Products Purchased by A or B:
...

Common Products:
...

Only in Customer A:
...

Only in Customer B:
...

Unique Products:
...

Is Customer C a subset of Customer A?
...

Is Customer A a superset of Customer B?
...

Are Customer A and Customer C disjoint?
...


========== CUSTOMER PRODUCT COUNT ==========

Customer A has ... products.
Customer B has ... products.
Customer C has ... products.


========== PRODUCT SEARCH ==========

Laptop:
Purchased by Customer A
Purchased by Customer B

Mouse:
Purchased by Customer A
Purchased by Customer C

Mobile:
Purchased by Customer C

Camera:
Camera was not purchased by any customer.


IMPORTANT:

Use these Set methods where appropriate:

union()
intersection()
difference()
symmetricDifference()
isSubsetOf()
isSupersetOf()
isDisjointFrom()
has()

You can also use previously learned concepts:

- Variables
- Functions
- Objects
- Arrays
- Loops
- for...of
- if/else
- Template literals
- console.log()
- Set.size


IMPORTANT:

Do NOT manually calculate and hard-code the results.

Let JavaScript calculate the results using Set methods.

Try to write the program yourself before looking for
any solution.

===========================================================
*/