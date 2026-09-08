// ========================================
//        JAVASCRIPT FUNCTION CHALLENGE
// ========================================

// Create an Employee Salary Management System
// using JavaScript functions.

// You must use:
// 1. Normal function declaration
// 2. Function parameters
// 3. Function arguments
// 4. return
// 5. Function expression
// 6. Arrow function
// 7. Calling one function from another function
// 8. Local variables
// 9. console.log()
// 10. if / else if / else

// Do NOT use:
// - Arrays
// - Objects
// - Loops
// - Classes
// - Built-in array methods


// ----------------------------------------
// INPUT
// ----------------------------------------

// The program should take information for 3 employees.

// For each employee:

// Name
// Basic Salary
// Performance Score
// Years of Experience


// Example input:

// Rahul
// 50000
// 85
// 4

// Priya
// 60000
// 72
// 6

// Amit
// 40000
// 45
// 2


// ----------------------------------------
// SALARY RULES
// ----------------------------------------

// 1. Calculate experience bonus:

// Years >= 5
//     bonus = 20% of basic salary

// Years >= 3
//     bonus = 10% of basic salary

// Years < 3
//     bonus = 5% of basic salary


// 2. Calculate performance bonus:

// Score >= 90
//     performance bonus = 15% of basic salary

// Score >= 75
//     performance bonus = 10% of basic salary

// Score >= 50
//     performance bonus = 5% of basic salary

// Score < 50
//     performance bonus = 0


// 3. Calculate final salary:

// final salary = basic salary + experience bonus + performance bonus


// ----------------------------------------
// GRADE RULES
// ----------------------------------------

// Performance Score:

// 90 - 100  -> A
// 75 - 89   -> B
// 50 - 74   -> C
// Below 50  -> D


// ----------------------------------------
// FUNCTION REQUIREMENTS
// ----------------------------------------

// You must create these functions:

// FUNCTION 1
// ----------------------------------------

// getExperienceBonus(basicSalary, years)

// Returns the experience bonus.


// FUNCTION 2
// ----------------------------------------

// getPerformanceBonus(basicSalary, score)

// Returns the performance bonus.


// FUNCTION 3
// ----------------------------------------

// getGrade(score)

// Returns:

// "A"
// "B"
// "C"
// or
// "D"


// FUNCTION 4
// ----------------------------------------

// Create a FUNCTION EXPRESSION called:

// calculateSalary

// It should take:

// basicSalary
// experienceBonus
// performanceBonus

// and return the final salary.


// FUNCTION 5
// ----------------------------------------

// Create an ARROW FUNCTION called:

// createMessage

// It should take:

// name
// finalSalary
// grade

// and return a message containing all three.


// ----------------------------------------
// IMPORTANT
// ----------------------------------------

// Create one more NORMAL FUNCTION:

// employeeReport(name, basicSalary, score, years)

// This function must call:

// getExperienceBonus()
// getPerformanceBonus()
// getGrade()
// calculateSalary()
// createMessage()

// Then return the final employee report.


// ----------------------------------------
// OUTPUT
// ----------------------------------------

// For every employee print:

// Employee: Rahul
// Basic Salary: 50000
// Experience Bonus: 5000
// Performance Bonus: 5000
// Final Salary: 60000
// Grade: B


// Then print the same information for
// the other two employees.


// ----------------------------------------
// EXTRA CHALLENGE
// ----------------------------------------

// After printing all 3 employees, calculate:

// 1. Total salary paid to all employees
// 2. Average salary

// You MUST create a function:

// calculateAverageSalary(salary1, salary2, salary3)

// It should return the average salary.

// Then print:

// Total Salary: XXXXX
// Average Salary: XXXXX


// ----------------------------------------
// RULE
// ----------------------------------------

// Do NOT copy a solution from the internet.

// Try to solve the entire problem yourself.

// Focus on understanding:

// parameters
//     ↓
// arguments
//     ↓
// function execution
//     ↓
// local variables
//     ↓
// return value
//     ↓
// another function receives that value
//     ↓
// final output


// Employee Information
// Code :
let name1 = "Rahul";
let name2 = "Priya";
let name3 = "Amit";

let salary1 = 50000;
let salary2 = 60000;
let salary3 = 40000;

let score1 = 85;
let score2 = 72;
let score3 = 45;

let experience1 = 4;
let experience2 = 6;
let experience3 = 2;


// 1. Experience Bonus

function experience_bonus(experience, salary) {

    let bonus = 0;

    if (experience >= 5) {
        bonus = 20 / 100 * salary;
    }
    else if (experience >= 3) {
        bonus = 10 / 100 * salary;
    }
    else {
        bonus = 5 / 100 * salary;
    }

    return bonus;
}


// 2. Performance Bonus

function score_bonus(score, salary) {

    let bonus = 0;

    if (score >= 90) {
        bonus = 15 / 100 * salary;
    }
    else if (score >= 75) {
        bonus = 10 / 100 * salary;
    }
    else if (score >= 50) {
        bonus = 5 / 100 * salary;
    }
    else {
        bonus = 0;
    }

    return bonus;
}


// 3. Grade

function CheckGrade(score) {

    if (score >= 90 && score <= 100) {
        return "A";
    }
    else if (score >= 75 && score <= 89) {
        return "B";
    }
    else if (score >= 50 && score <= 74) {
        return "C";
    }
    else {
        return "D";
    }
}


// 4. Function Expression

const calculateSalary = function (
    salary,
    experiencePayment,
    performancePayment
) {

    let finalSalary =
        salary +
        experiencePayment +
        performancePayment;

    return finalSalary;
};


// 5. Arrow Function
const createMessage = (name, finalSalary, grade) => {

    return `Employee: ${name}
Final Salary: ₹${finalSalary}
Grade: ${grade}`;
};


// 6. Employee Report

function employeeReport(name, salary, score, experience) {

    let experiencePayment =
        experience_bonus(experience, salary);

    let performancePayment =
        score_bonus(score, salary);

    let grade =
        CheckGrade(score);

    let finalSalary =
        calculateSalary(
            salary,
            experiencePayment,
            performancePayment
        );

    let message =
        createMessage(
            name,
            finalSalary,
            grade
        );

    return `

${message}
Basic Salary: ₹${salary}
Experience Bonus: ₹${experiencePayment}
Performance Bonus: ₹${performancePayment}
`;
}


// 7. Call employeeReport()

console.log(
    employeeReport(
        name1,
        salary1,
        score1,
        experience1
    )
);

console.log(
    employeeReport(
        name2,
        salary2,
        score2,
        experience2
    )
);

console.log(
    employeeReport(
        name3,
        salary3,
        score3,
        experience3
    )
);


// 8. Calculate Total Salary

let finalSalary1 =
    calculateSalary(
        salary1,
        experience_bonus(experience1, salary1),
        score_bonus(score1, salary1)
    );

let finalSalary2 =
    calculateSalary(
        salary2,
        experience_bonus(experience2, salary2),
        score_bonus(score2, salary2)
    );

let finalSalary3 =
    calculateSalary(
        salary3,
        experience_bonus(experience3, salary3),
        score_bonus(score3, salary3)
    );


let totalSalary =
    finalSalary1 +
    finalSalary2 +
    finalSalary3;

console.log("Total Salary: ₹" + totalSalary);


// 9. Average Salary

function calculateAverageSalary(
    salary1,
    salary2,
    salary3
) {

    return (salary1 + salary2 + salary3) / 3;
}


let averageSalary =
    calculateAverageSalary(
        finalSalary1,
        finalSalary2,
        finalSalary3
    );

console.log("Average Salary: ₹" + averageSalary);