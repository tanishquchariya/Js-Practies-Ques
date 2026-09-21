// function myFunction() {
//     clearInterval(timer)
// }
// let count = 1
// let timer = setInterval(() => {
//     console.log(2*count);
//     count++
//     if(count === 11){
//         myFunction()
//     }

// }, 1000);

// function myFunction() {
//     clearInterval(timer)
// }


// code

// function myFunction() {
//     clearInterval(timer2)
// }
// let cout2 = 0
// let timer2 = setInterval(() => {
//     // console.log(cout2);
//     if (cout2 === 10) {
//         clearInterval(timer)
//         clearInterval(timer2)
//     }
//     cout2++
//     console.log("Hello");
    
// }, 1000);

let count = 1
let timer = setInterval(() => {
    console.log(2 * count);
    count++
    // if(count === 11){
    //     myFunction()
    // }

}, 1000);

setTimeout(() => {
    console.log(count);
    
    clearInterval(timer)
}, 10100)