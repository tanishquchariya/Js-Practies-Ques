/*
===========================================================
QUESTION 1 — RANDOM NUMBER GUESSING GAME
===========================================================

Create a simple Random Number Guessing Game.

The computer should generate a random integer between
1 and 50.

Use:

Math.random()
Math.floor()


PART 1 — GENERATE RANDOM NUMBER
-----------------------------------------------------------

Generate a random number between 1 and 50.

Store it in:

const secretNumber


PART 2 — USER GUESS
-----------------------------------------------------------

Ask the user to enter a number using:

prompt()

Convert the input into a Number.


PART 3 — COMPARE THE NUMBER
-----------------------------------------------------------

Compare the user's guess with secretNumber.

If guess is greater:

"Your guess is too high"

If guess is smaller:

"Your guess is too low"

If guess is equal:

"Correct! You guessed the number."


PART 4 — ATTEMPTS
-----------------------------------------------------------

Give the user a maximum of 5 attempts.

Use a loop.

Example:

Attempt 1
Attempt 2
Attempt 3
...


If the user guesses correctly:

Stop the game.

If the user uses all 5 attempts:

Print:

"Game Over!"
"Secret Number was: 37"

(The actual number will be random.)


PART 5 — SCORE
-----------------------------------------------------------

Create a score system.

Starting score:

100

For every wrong answer:

subtract 20 points.

Example:

Wrong → 80
Wrong → 60
Wrong → 40
Correct → final score


Print:

Your Score: 60


PART 6 — EXTRA CHALLENGE
-----------------------------------------------------------

After every wrong guess, also print the difference
between the guess and secretNumber.

Example:

Your guess: 20
Difference: 7

Use:

Math.abs()

===========================================================

RULES
===========================================================

Use:

✓ Math.random()
✓ Math.floor()
✓ Math.abs()
✓ Number()
✓ if/else
✓ loops
✓ variables
✓ functions if required

Do NOT hard-code the secret number.

===========================================================
*/

// Code :
/*
===========================================================
QUESTION 1 — RANDOM NUMBER GUESSING GAME
===========================================================
*/

const secretNumber = Math.floor(Math.random() * 50) + 1;

console.log("Secret Number:", secretNumber);

let score = 100;
let guessedCorrectly = false;

for (let attempt = 1; attempt <= 5; attempt++) {

    const user = Number(prompt(`Attempt ${attempt}: Enter your guess (1-50)`));

    if (user > secretNumber) {

        console.log("Your guess is too high");

        const difference = Math.abs(user - secretNumber);
        console.log(`Difference: ${difference}`);

        score -= 20;

    } else if (user < secretNumber) {

        console.log("Your guess is too low");

        const difference = Math.abs(user - secretNumber);
        console.log(`Difference: ${difference}`);

        score -= 20;

    } else {

        console.log("Correct! You guessed the number.");
        guessedCorrectly = true;

        break;
    }
}

if (guessedCorrectly) {

    console.log(`Your Score: ${score}`);

} else {

    console.log("Game Over!");
    console.log(`Secret Number was: ${secretNumber}`);
    console.log(`Your Score: ${score}`);
}