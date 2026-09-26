              Promise
                 │
              PENDING
                 │
        ┌────────┴────────┐
        ↓                 ↓
    FULFILLED          REJECTED
       ✅                  ❌
    resolve              reject
       ↓                   ↓
    .then()             .catch()


    # JavaScript Promise — Simple Example

A Promise represents a result that we will get in the future.

A Promise has mainly two outcomes:

- `resolve()` → Success
- `reject()` → Failure

Then:

- `.then()` → runs when Promise is successful
- `.catch()` → runs when Promise fails


## Simple Example

```js
const myPromise = new Promise((resolve, reject) => {

    const age = 20;

    if (age >= 18) {
        resolve("You are eligible");
    } else {
        reject("You are not eligible");
    }

});


myPromise
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    });