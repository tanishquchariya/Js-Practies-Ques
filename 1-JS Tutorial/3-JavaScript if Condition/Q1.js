// Q-1 Write a JavaScript program that creates a variable called age with the value 22. Use an if statement to check whether the age is greater than or equal to 18. If the condition is true, print "You are eligible to vote" using console.log().

// Code 

// let age = 22

// if(age>=18){
//     console.log('You are eligible to vote');
// }


// Q-2 Create a variable called marks with the value 75. Write three separate if statements. The first if should check whether the marks are greater than or equal to 90 and print "Excellent". The second if should check whether the marks are greater than or equal to 60 and print "Good". The third if should check whether the marks are greater than or equal to 40 and print "Pass". Use only JavaScript, variables, if statements, comparison operators, and console.log().

// Code :

// let marks =  75


// if(marks>=90){
//     console.log('Excellent');

// }
// if(marks>=60){
//     console.log('Good');

// }
// if(marks>=40){
//     console.log('Pass');

// }

// Q - 3 : Create a variable called temperature with the value 35. Write separate if statements to check three conditions. If the temperature is greater than 40, print "Very Hot". If the temperature is greater than or equal to 30, print "Hot". If the temperature is greater than or equal to 20, print "Normal". Finally, create another variable called age with the value 16 and write an if statement that prints "Teenager" if the age is greater than or equal to 13. Use only let, if, comparison operators, and console.log(). Do not use else, else if, loops, arrays, or functions.


// let temperature = 35

// if(temperature>40){
//     console.log('Very Hot');

// }
// if(temperature>=30){
//     console.log('Hot');

// }
// if(temperature >= 20){
//     console.log('Normal');

// }
// let age  = 16 
// if(age>= 13){
//     console.log('Teenager');

// }


// Q - 4 : Create a JavaScript program for a student result system. Create variables marks = 78, attendance = 82, and hasSubmittedProject = true. First check whether the student is eligible for the result: the student must have marks greater than or equal to 40 AND attendance greater than or equal to 75. If the student is not eligible, print "Not Eligible". If the student is eligible, determine the grade using if...else if...else: marks greater than or equal to 90 should print "Grade A", marks greater than or equal to 75 should print "Grade B", marks greater than or equal to 60 should print "Grade C", marks greater than or equal to 40 should print "Grade D", otherwise print "Fail". However, a student can receive the grade only if hasSubmittedProject is true; if the project has not been submitted, print "Project Not Submitted". Finally, if the student has marks greater than or equal to 90 AND attendance greater than or equal to 90 AND has submitted the project, print "Outstanding Student" in addition to the grade.

// Expected output
// Grade B

// code:
let marks = 78
let attendance = 82
let hasSubmittedProject = true


if (marks >= 40 && attendance >= 75) {
    if (hasSubmittedProject) {
        if (marks >= 90) {
            console.log('Grade A');

        } else if (marks >= 75) {
            console.log('Grade B');

        } else if (marks >= 60) {
            console.log('Grade C');

        } else if (marks >= 40) {
            console.log('Grade D');

        } else {
            console.log('Fail');

        }

    }
    else {
        console.log('Project Not Submitted');

    }
}
else {
    console.log('Not Eligible');

}