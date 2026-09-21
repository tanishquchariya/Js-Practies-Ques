// 🔴 Q5 — Frequency of Array Elements
// let arr = [2, 3, 2, 4, 3, 2, 5];

// Expected output:

// 2 → 3
// 3 → 2
// 4 → 1
// 5 → 1

// code : 

let arr = [2, 3, 2, 4, 3, 2, 5];

let visited = [];

for (let i = 0; i < arr.length; i++) {

    let alreadyVisited = false;

    // Check if arr[i] is already present in visited
    for (let k = 0; k < visited.length; k++) {

        if (arr[i] === visited[k]) {
            alreadyVisited = true;
            break;
        }
    }

    // If already counted, skip it
    if (alreadyVisited) {
        continue;
    }

    // Count frequency
    let count = 0;

    for (let j = 0; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            count++;
        }
    }

    console.log(`${arr[i]} -> ${count}`);

    // Remember this element
    visited.push(arr[i]);
}