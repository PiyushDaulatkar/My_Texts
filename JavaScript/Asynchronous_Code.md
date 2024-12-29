# Terms
* Event loop.
* Call stack.
* Web APIs.
* Task queue/callback queue.
* [Micro task queue](https://www.youtube.com/watch?v=eiC58R16hb8).
<br><br>

# [Event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* When an asynchronous function is called, it is added to the `call stack`. However, since it's asynchronous, JavaScript does not wait for its execution to complete and removes it from the `call stack` and puts in `Web API environment`. The function continues executing in the `Web API environment`. Once it completes, its result or callback is placed into the `task queue`.
* A task is added to the `task queue` only after it has completed its operation.
* The `event loop` continuously checks the `call stack` and `task queue`. If the `call stack` is empty, it pushes tasks from the `task queue` into the `call stack` for execution.
* .then() callbacks from Promises are placed into the `microtask queue` once the Promise is resolved or rejected.

* The `event loop` prioritizes tasks in the `microtask queue` over those in the `task queue`.
<br><br>

# Ways to handle asynchrnus code in js.
1. Callbacks
2. Promises
3. Async/Await
4. Event Listeners
5. Using `setTimeout` or `setInterval`
6. Observables (RxJS).
<br><br>

# Callbacks
* ***A callback function is a function passed into another function as an argument***, which is then invoked inside the outer function to complete some kind of routine or action.

* There are two ways in which the callback may be called: ***synchronous*** and ***asynchronous***.
* Synchronous callbacks are c***alled immediately after the invocation of the outer function***, with no intervening asynchronous tasks.
* While asynchronous callbacks are called at some point later, after an asynchronous operation has completed.
<br>
<hr><br>

### Callback hell
* A situation where ***multiple callbacks are nested within each other***, making the code hard to read, maintain, and debug.
* When you have multiple asynchronous operations that depend on each other, you end up writing nested callbacks, one inside the other. This nesting can quickly get out of hand, making your code difficult to read and maintain.

* Example:
```js
// Example of Callback Hell
fs.readFile('file.txt', 'utf8', function(err, data) {
  if (err) {
    console.log('Error reading file:', err);
  } else {
    parseData(data, function(parsedData) {
      fetchDataFromServer(parsedData, function(serverData) {
        processServerData(serverData, function(finalResult) {
          console.log('Final result:', finalResult);
        });
      });
    });
  }
});
```
#### Problems with Callback Hell:
1. Hard to Read.
2. Difficult to Debug.
3. Error Handling.

#### How to Avoid Callback Hell:
1. Use Named Functions.
2. Use Promises.
3. Async/Await.
<br>
<hr><br>

#### Why callbacks are used in JavaScript:

* ***Asynchronous execution***: Callbacks allow your program to continue running while waiting for time-consuming tasks like API calls or file reading.
* ***Non-blocking behavior***: You can avoid freezing or stalling your program while performing background tasks.
* Flexibility: Callbacks enable different behaviors for the same task by passing different functions.
* **Event-driven programming**: Callbacks help your program react to events, like user actions or data updates, in real-time.
* Modularity: Callbacks promote writing smaller, more manageable pieces of code that can be reused.

* Industry standard: Many JavaScript libraries and APIs depend on callbacks, so using them is essential for compatibility.
<br>
<hr>
<br><br>

# Promises
* A Promise in JavaScript is a special object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
* A promise is an object that might produce a value at some point in the future.

#### States of a Promise:
* ***Pending***: The initial state, neither fulfilled nor rejected.
* ***Fulfilled***: The operation completed successfully, and the promise has a result.

* ***Rejected***: The operation failed, and the promise has a reason (error).

#### Methods to Handle Promises:

* ***.then(onFulfilled)***: Runs when the promise is resolved (fulfilled).

* ***.catch(onRejected)***: Runs when the promise is rejected (failed).
* ***.finally(onFinally)***: Runs after the promise is settled, regardless of whether it was fulfilled or rejected.
<br>
<hr><br>

#### Creating and Using a Promise
```js
// Step 1: Create a promise
const orderPizza = new Promise((resolve, reject) => {
  const isPizzaAvailable = true;

  setTimeout(() => {
    if (isPizzaAvailable) {
      resolve("Pizza is ready!"); // Fulfilled
    } else {
      reject("Sorry, we're out of pizza."); // Rejected
    }
  }, 2000);
});

// Step 2: Use the promise
orderPizza
  .then((message) => {
    console.log(message); // Output: "Pizza is ready!" if fulfilled
  })
  .catch((error) => {
    console.error(error); // Output: "Sorry, we're out of pizza." if rejected
  })
  .finally(() => {
    console.log("Order process finished."); // Always runs
  });
```
<br>
<hr><br>

#### Chaining Promises
* You can chain .then() to handle multiple asynchronous operations sequentially.

```js
const checkIngredients = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ingredients checked.");
    }, 1000);
  });
};

const makePizza = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza is being made.");
    }, 2000);
  });
};

const deliverPizza = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza is delivered.");
    }, 1500);
  });
};

// Chain promises
checkIngredients()
  .then((message) => {
    console.log(message);
    return makePizza();
  })
  .then((message) => {
    console.log(message);
    return deliverPizza();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
<br>
<hr><br>

#### Handling Multiple Promises with Promise.all
* Promise.all runs multiple promises in parallel and waits for all of them to finish.
```js
const task1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const task2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 2000));
const task3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 1500));

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log("All tasks finished:", results);
  })
  .catch((error) => {
    console.error("One of the tasks failed:", error);
  });
```
<br>
<hr><br>

### Why Use Promises?
* ***Asynchronous code***.
* ***Avoid Callback Hell***: Promises make code more readable and easier to maintain than deeply nested callbacks.

* ***Error Handling***: You can use .catch() to handle errors cleanly.
* ***Flexible***: Promises can be chained and combined using utilities like Promise.all or Promise.race.

<br>
<hr><br>

# Async and Await keywords
* `await` must always be used inside an `async` function.
  * If you try to use await outside of an async function, it will throw a syntax error.
* `async` does not require `await` to be used inside it.

## async
* The async keyword is what lets the JavaScript engine know that you are declaring an asynchronous function.

* Functions declared with `async` ***automatically return a Promise***.
* And you can use the `await` keyword inside them to pause execution until a Promise is resolved.
* ***Returning in an async function is the same as resolving a promise. Likewise, throwing an error will reject the promise.***

### Why Use async?
* ***To make asynchronous code look and behave like synchronous code.***
* ***To handle Promises without chaining .then() calls***.

* To reduce complexity when working with multiple asynchronous operations.

### Without await
* ***Without await***: The async function will always return a Promise, regardless of whether you use await inside it or not.

* ***With await***: The async function still returns a Promise. However, within the function, await pauses execution until the Promise resolves, so you get the resolved value directly in your code (inside the function).
* ***The key point is***: An async function always returns a Promise, but await lets you work with the resolved value more easily inside the function.
```js
// without await

async function withoutAwait() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Resolved Value"), 2000)
  );
}

// Calling the function
withoutAwait().then((result) => console.log(result)); // Output after 2s: "Resolved Value"
```
```js
// with await

async function withAwait() {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve("Resolved Value"), 2000)
  );
  console.log(result); // Output: "Resolved Value"
}

// Calling the function
withAwait(); // Logs "Resolved Value" after 2 seconds

// Function still returns a Promise
console.log(withAwait()); // Logs: Promise { <pending> }
```
* It’s like a ‘pause until done’ keyword. The await keyword is used to get a value from a function where you would normally use .then().

* Instead of calling .then() after the asynchronous function, you would assign a variable to the result using `await`.
* Then you can use the result in your code as you would in your synchronous code.

## Error handling
### Method 1:
*  Promises have the .catch() method for handling rejected promises, and since async functions just return a promise, you can call the function, and append a .catch() method to the end.
```js
asyncFunctionCall().catch(err => {
  console.error(err)
});
```
### Method 2:
* If you want to ***handle the error directly inside the async function***, you can use `try/catch` with async/await syntax.
```js
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}
```
### async/await does not make the code or function synchronous. Instead, it provides a way to write asynchronous code in a style that looks and behaves more like synchronous code, without blocking the main thread.

<br>
<hr><br>

<br>
<hr><br>
<br>
<hr><br>
<br>
<hr><br>