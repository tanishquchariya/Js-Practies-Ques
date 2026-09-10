// Q1. Student Information

// Create an object:

// const student = {
//     name: "Tanishq",
//     age: 22,
//     marks: 85
// };

// Add a method called getResult().

// If marks are >= 40, return "Pass"
// Otherwise return "Fail"

// Call the method and print the result.

const student = {
    name: "Tanishq",
    age: 22,
    marks: 85,
    getResult : function () {
        
        if(student.marks >= 40){
            return "Pass"
        }else{
            return "Fail"
        }
    }
};
console.log(student.getResult());
