// for(let i = 0; i<user.length; i++){
//     let ele += user[i]
    
// }
// console.log(ele)

const arr = [1,2,3,4,5,6,7,8,9,10];
// arr.map((i) => console.log(i));
arr.forEach((i) => console.log(i));
// let ele = 0;
// for(let i = 0; i<user.length; i++){
//     ele += user[i]
// }
// console.log(ele)

// console.log(user[i])


// const user2 = {
//     e1 : 1,
//     e2 : 2,
//     e3 : 3,
//     e4 : 4,
//     e5 : 5,
//     e6 : 6,
//     e7 : 7,
//     e8 : 8,
//     e9 : 9,
//     e10 : 10
// };

// foreach (const key in user2) {
//     user2.map() => {
//         console.log(key)
//     }
    // console.log(user2[key])
// }




// Ques :- Move All Zeros to the End

// function moveZero(nums) {
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             // Swap nums[i] and nums[count]
//             [nums[i], nums[count]] = [nums[count], nums[i]];
//             count++;
//         }
//     }

//     return count;
// }

// // Example
// let nums = [1, 0, 1, 1, 0, 1];

// console.log(moveZero(nums));
// console.log(nums);