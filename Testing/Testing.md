# Test Driven Development (TDD)

## Why should developers care about automated unit tests?

* Keeps you out of the (time hungry) debugger!
* Reduces bugs in new features and in existing features.
* Reduces the cost of change.
* Improves design.
* Encourages refactoring.
* Builds a safety net to defend against other programmers.
* Is fun.
* Forces you to slow down and think.

* Speeds up development by eliminating waste.
* Reduces fear.
<br><br>

## Tips
* An important basic concept in testing is isolation.
* You should only test one method at a time.

* Don’t make your test depend on the correct behavior of other functions, especially if those functions are already being tested separately.

# Pure functions
1. Same input always gives the same output.
2. A pure function does not modify anything outside itself, like variables, files, or databases. It only uses its inputs and returns a result without changing external states.

## Tightly coupled code is hard to test!
* Example below code is very hard to test.
  * First, we do not need to test the functions prompt and alert because they are built in to the browser.
```js
function guessingGame() {
  const magicNumber = 22;
  const guess = prompt('guess a number between 1 and 100!');
  if (guess > magicNumber) {
    alert('YOUR GUESS IS TOO BIG');
  } else if (guess < magicNumber) {
    alert('YOUR GUESS IS TOO SMALL');
  } else if (guess == magicNumber) {
    alert('YOU DID IT! 🎉');
  }
}
```
* What we do need to test is the number logic, which is much easier if we untangle it from the other functions:
* Correct approach:
```js
function evaluateGuess(magicNumber, guess) {
  if (guess > magicNumber) {
    return 'YOUR GUESS IS TOO BIG';
  } else if (guess < magicNumber) {
    return 'YOUR GUESS IS TOO SMALL';
  } else if (guess == magicNumber) {
    return 'YOU DID IT! 🎉';
  }
}

function guessingGame() {
  const magicNumber = 22;
  const guess = prompt('guess a number between 1 and 100!');
  const message = evaluateGuess(magicNumber, guess);
  alert(message);
}

guessingGame();
```
* In this example, the only thing we really need to test is the evaluateGuess function, which is much easier to test because it has a clear input and output and doesn’t call any external functions.
<br><br>

# Mocking
* There are two solutions to the ‘tightly coupled code’ problem:
  *  The ***first***, and best option is to ***remove those dependencies from your code*** as we did above, but that is not always possible.
  
  *  The ***second*** option is mocking - writing “fake” versions of a function that always behaves exactly how you want. 
     *  For example, if you’re testing a function that gets information from a DOM input, you really don’t want to have to set up a webpage and dynamically insert something into the input just to run your tests. With a mock function, you could just create a fake version of the input-grabbing function that always returns a specific value and use THAT in your test.