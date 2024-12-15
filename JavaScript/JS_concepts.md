# JavaScript


Everything in javascript happens inside an <span style= color:gold>***"EXECUTION CONTEXT"***</span>.
  * You can assume this execution context to be a big box or a container in which whole javascript code is executed.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# EXECUTION CONTEXT ( like FAR in C language)
* Has two components :
  1. <span style= color:orange>***MEMORY ( variable environment)***</span>
       * Here all the variables and functions are stored in ***key : value*** format.
  2. <span style= color:orange>***CODE COMPONENT ( Thread of execution)***</span>
       * Here code is executed one line at a time.

![1](https://github.com/PiyushDaulatkar/My_Texts/assets/141228456/136e5d07-da9d-4852-8f3a-df95086670d4)

<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Javascript is a <span style= color:red>***"synchronous" "single-threaded"***</span> language
### single-threaded:
* Means JS can ***execute one command at a time***.

### synchronous
* Means javascript can execute one command at a time and in a ***specific order***, i.e. it can only go to the next line once the current line has been finished executing.

<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# When you run JS program => 
```js
var n = 2;
function square (num) {
    var ans = num * num;
    return num;
}

var square2 = square(n);
var square1 = square(1);
```
## 1. ***GLOBAL*** Execution Context is created of that JS program
### 1.1 Memory creation phase
* Here JS will allocate memory to all variables and functions.
* for variables it stores => ***undefined***.
* for functions it will store ***whole code of that function {....}***.
<br></br>

### 1.2 Code execution phase
* Here, the actual value is assigned to variables provided in the code.
* function *** definition *** is ignored because there is nothing to execute there.
* But when a function is ***invoked ( function call)***, then a new execution context is created for that function as per that function definition inside global execution context.

### All execution context and nested execution context are managed through ***stack*** called as called stack.
call stack/Execution context stack /program stack/ control stack/ runtime stack/ machine stack.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Hoisting
Hoisting is a phenomenon in javascript by which you can access these variables and functions even before you have initialized it or you have put some value in it you can access it without any error.

How Hoisting works=>
1. so whenever we run a javascript program,
2. its execution context is created,
3. The first phase in the creation of execution context is creating a memory Environment,
4. so before the code execution phase all the variables and functions are allocated memory,
5. and variables are initialized to undefined and functions are allocated their code inside {....},
6. so in the code execution phase even if a function call is encountered first, its definition is present in the memory area,
7. also variable definition is also present in the memory area, but it is undefined,
8. ***so if we access a function before its declaration it will run smoothly but when we access a variable before its declaration it will give undefined value***.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Shortest JS program
```js
// empty program without this comment also is the Shortest JS program
```
1. "***javascript engine***" still creates the global execution context
2. and also sets up the memory space
3. though there is nothing to set up but still it does a job
4. and it also does something interesting so "***javascript engine***" also creates something known as <span style= color:red>***"***window***"***</span>.
5. Window is like a big ***object*** which has various variables and methods.
6. Window object is created by ***javascript engine*** and into the global space.
7. As a window object is created in a global space hence its variables and functions are available to use anywhere in the program.
8. Also with window, the javascript engine creates "***This***" variable, which points to window object window is actually a global object which is created along with the global execution context so, whenever any javascript program is run, a global object(window) is created a global execution context is created and along with that execution context "this" variable is created.
9. Global level or at the base level in the global execution context "this" == "window object" ok so, if you try to do this, "this" is equal to window you will see that it is true.
```js
console.log(this == window); // true
```
<br></br>

* "***global space***" is nothing but any code you write inside JavaScript which is not inside a function.
* In global space whenever you create any variables or functions these get attached to this window.
```js
var a = 28;

//This a variable as it is not inside any function so it is a global variable in global space
// Hence it is attached to the window object, you can access it through window object
console.log(window.a);
    //or
console.log(a);
    //or
console.log(this.a);
```
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br> 

# JS is ***"Loosely/weakly typed"*** language
* So loosely type means that it does not attach its variables to any specific data type.
* so suppose if I created a variable and put string in it so later on in the program I can also put numbers in it.

<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Undefined
Undefined is like a ***placeholder***, which is used to indicate that currently data type is not assigned to this variable.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# ***Scope***
* Scope means where you can access a specific variable or a function in our code.

# ***Lexical(physical) Environment***
* Scope in javascript is directly related to lexical environment.
* Whenever "execution context" is created then "lexical environment" is also created.
* ***Lexical environment is the local memory of block along with the lexical environment reference (reference to local memory) of its parent.***
* lexical as a term means in hierarchy or in a sequence
* in code terms you can say that child function is lexically sitting inside parent function.
* In memory space, along with variables and functions of current block we also get ***"reference" to lexical(physical) environment of parent block***.
* In the case of global execution context, the reference to lexical environment of the parent block is equal to "null", because global execution context is the outermost parent component.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Scope chain
Whenever a variable is not present in child block, so it tries to search it in its parent block through lexical environment reference, if it is not in its parent block then through its parent block lexical environment reference, it will search in its parent's parent block so this chaining is known as "***scope chain***".
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# let & const
* let and const declarations are hoisted.
* these are in the temporal dead zone.
* ***but, if you access them before declaration, then will give reference error because before declaration they are in temporal dead zone.***
* they are not stored in global(window) space.
  
Temporal dead zone: time since when let variable was hoisted and till it is initialized.
* you access variables in temporal dead zone, they can be accessed after initialization.

```js
var i = 10;
var i = 20;  // redeclaration of var is OK.

let i = 10;
let i = 20;  // redeclaration of let will give error.

const b; // will give error
const b = 20; // ok, const should be initialized when declared.
```
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

<table style=" border: 1px solid;">
    <tr>
        <td style=" border: 1px solid;">Var</td>
        <td style=" border: 1px solid;">Let</td>
        <td style=" border: 1px solid;">const</td>
    </tr>
    <tr>
        <td style=" border: 1px solid;">get memory in <strong>global scope</strong></td>
        <td style=" border: 1px solid;">get memory in<strong> block scope<strong></td>
        <td style=" border: 1px solid;">get memory in <strong>block scope.<strong></td>
    </tr>
    <tr>
        <td style=" border: 1px solid;">attached to global window object</td>
        <td style=" border: 1px solid;"></td>
        <td style=" border: 1px solid;"></td>
    </tr>
    <tr>
        <td style=" border: 1px solid;">can be redeclared, reassigned</td>
        <td style=" border: 1px solid;"><strike>redeclared</strike>, but can be reassigned</td>
        <td style=" border: 1px solid;"><strike>redeclared, reassigned</strike></td>
    </tr>
    <tr>
        <td style=" border: 1px solid;"></td>
        <td style=" border: 1px solid;"></td>
        <td style=" border: 1px solid;">should be initialized at declaration only.</td>
    </tr>
   </table>
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Block
* defined by { }.
* to combine multiple js statement into one group.

### why to group statements?
* to use grouped statement as a single statement.
* ex. if() { block }.
```js
{

}
```
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Shadowing
* Inner scope var will shadow outer scope only for let and const (~~var~~).

```js
var a = 'vg';
let l = 'lg';
const c = 'cg';

function x(){
    var a = 'vb';
    let l = 'lb';
    const c = 'cb';

console.log('fv :>> ', a);  // ??
console.log('fl :>> ', l);  // ??
console.log('fc :>> ', c);  // ??
}

x();
console.log('gv :>> ', a);
console.log('gl :>> ', l);
console.log('gc :>> ', c);

```
<hr style="border-top: dotted 1px;" />

```js
// var dereclaration in block
var v = 'vg';
{
    var v = 'vb';
}

console.log('v :>> ', v);  // ??
```
<hr style="border-top: dotted 1px;" />

```js
// var dereclaration in IF block
var v = 'vg';
if (true) {
    var v = 'vb';
}

console.log('v :>> ', v);  // ??
```
<hr style="border-top: dotted 1px;" />

```js
// illegal shadowing (same for let and const)
var v = 'vg';
{
    let v = 'vb';
    console.log('v :>> ', v);  // ??
}

console.log('v :>> ', v);  // ??
```
<hr style="border-top: dotted 1px;" />

```js
let v = 'vg';
{
    var v = 'vb';
    console.log('v :>> ', v);
}

console.log('v :>> ', v);  
// this will give error
```
<hr style="border-top: dotted 1px;" />

```js
// but function will not give error
let v = 'vg';
function x() {
    var v = 'vb';
    console.log('v :>> ', v);
}
x();
console.log('v :>> ', v);
```
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Closures (useful for nested functions, ***when function returns function***)
* It is function along with its lexical scope.
* A closure is the combination of a function bundled together (enclosed) with references to its surroundings state (the lexical environment).
* In other words, a closure gives you access to an outer function scope from an inner function.
* Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.It's not just that function alone it returns but the entire closure.
```js
function x() {
    var a = 18;
    function y() {
        console.log('a :>> ', a);
    }
    return y;
}
var z = x();
console.log('z :>> ', z);
z(); // o/p => 18************

// As y() is nested function so, when x() is called it will return y().

// Now z variable has y().

// When we call z, then y() called.

// But as y() is a nested function inside x() so its memory and all things will be destroyed when x() is removed from call stack so how "y() from z" is able to access variable ' var a' which is in function x(), when x() is not called?

// ANSWER => This is due to closure, Closure is the combination of y() function + reference to its outer(Lexical) environment.

// Hence y() function through its closure has access to its outer lexical environment that is function x() and it can access variable 'var a'.
```
<hr style="border-top: dotted 1px;" />

```js
function x() {
    var a = 18;
    function y() {
        console.log('a :>> ', a);
    }
    a = 100;
    return y;
}
var z = x();
console.log('z :>> ', z);
z(); // ??????
```
```js
function makeAdding (firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting (secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  }
}

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7
```
## Uses of [Closure](https://www.youtube.com/watch?v=80O6L2Ez3GM)
* ***For saving state of outer variables***.
* Can create ***private variables***.
* Model design pattern.
* currying.
* Functions like once().
* memoize.
* Maintain state in Async world.
* setTimeouts.
* Iterators.
* and many more ....
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

### Function statement, function expression, function declaration
* The terms `function statement` and `function expression` refer to two different ways of defining functions in JavaScript.
```js
// Function statement aka function declaration
function a() {
    console.log("Hello world");
}

// function expression
var b = function () {

}
```
#### Differnce between Function `statement` & function `expression`
1. `Usage`: Function expressions offer more flexibility, such as creating anonymous functions or defining functions dynamically. Function declarations are straightforward and are used for more traditional function definitions.
   
2. `Hoisting`: Function declarations are hoisted completely, allowing you to call the function before it is declared in the code. Function expressions only hoist the variable declaration, not the function assignment itself.

* During memory creation phase, memory is assigned to `a()` function with its body,
* but for function expression `b` in memory creation phase a variable `b` is created and assigned value undefined not the function,
* hence if we try to access `a()` before its declaration it will you no error
* but if we try to access `b` as it is a variable so if we try to access it before declaration it will give error (as `b` will be undefined).
```js
// function declaration
```
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Anonymous function
* anonymous function is a function that is defined without a name. Instead of specifying a name after the `function` keyword, you define the function directly as an expression.
```js
// Anonymous function expression
var myFunction = function(parameters) {
    // Function body
    // Code to be executed
};
```
### Usage of Anonymous Functions:
1. As Callbacks: They are commonly used as callback functions, passed as arguments to other functions that expect a function as an argument.
```js
// Example of anonymous function as a callback
setTimeout(function() {
    console.log("Timeout completed!");
}, 1000);
```
2. Immediately Invoked Function Expressions (IIFE): You can use an anonymous function to create an IIFE, which executes immediately after it’s defined.
```js
// Example of IIFE using an anonymous function
(function() {
    var message = "Hello, IIFE!";
    console.log(message);
})();
```
3. Event Handlers: They are also used as event handler functions in DOM manipulation.
```js
// Example of anonymous function as an event handler
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});
```
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Named function
* While assigning function to a variable instead of anonymous function you are giving it a name.
```js
var a = function xyz(parameters) {
    // Function body
    // Code to be executed
};

a(); //==> o/p of call ??
xyz(); //==> o/p of call ??
```
* Above function can be only called from the variable(i.e. a()) it is assigned to you cannot call it from its name(~~xyz()~~).
* If you call it by its name(xyz()) it will give error uncaught reference xyz not defined.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# First order function
* The ability of functions to be `used as values` and ability of function to be `passed as an argument` to another function and `can be returned` from the functions, this ability is known as first class functions in javascript.

* i.e. Functions are `first class citizens`.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Callback function

* In JavaScript, a callback function is a function that is passed as an argument to another function, with the intention of being invoked or called at a later time. Callback functions are a fundamental concept in asynchronous programming, allowing functions to be executed after a certain task is completed, without blocking other operations.

* It gives us access to the whole asynchronous world in a synchronous single threaded language.
* Main thread executes call stack.

### Blocking main thread
* Functions which take long time to execute, like `settimeout()` with 5 second timer, the main thread is blocked for five seconds.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

## How to count clicks on a button

### Approach 1
* declare a global variable and increment it on count..
* Drawback: less secure, any-other function can modify the vaiable.
### Approach 2
* create a function and declare a variable in it.
```js
function attachEventListner() {
     let count=0;
     document.getElementById("clickme").addEventListener("click", function xyz() {
    console.log('button clicked ....', count++);
});
}

attachEventListner();
``` 
* when `attachEventListner()` is called count variable is created, but it will not get destroyed because it will be present in `closure` of function xyz().
* Hence, only function inside `attachEventListner()` can only access count variable.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Garbage collection and remove EventListner
* Event listeners are heavy (i.e. they consume memory).
* (Because even if its callback function is not in call stack, then also `eventListner` maintenances it and its closure).
* Hence you should remove `eventListner` when not required anymore. 
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# prototype
* In JavaScript, every object has a hidden link to another object called its prototype. This prototype is like a parent or blueprint for that object.

* The prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.

### Prototypal inheritance
  * ***To save memory***: Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Immediately Invoked Function Expression ( IIFE )
* An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined.
* SYNTAX
  * ***The syntax involves wrapping the function in parentheses and then immediately invoking it with ()***.
```js
(function() {
    // Code to be executed immediately
    console.log("IIFE executed!");
})();

// OR

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
```
### Why Use IIFE?
* ***Avoid Global Variable Pollution***: IIFEs create a new scope, so variables inside them don’t interfere with variables in the global scope.

* ***Data Privacy***: Variables inside an IIFE are private and cannot be accessed from outside the function.

* ***Initialization Code***: Useful for running initialization code that doesn't need to persist.

* ***Modularity***: Helps in grouping related code together in a self-contained unit.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# Module pattern in JavaScript
* The Module Pattern in JavaScript is a way to organize code into a single unit (called a module). This module can have private parts (hidden from the outside) and public parts (accessible to the outside). It helps keep your code clean, avoids messing up the global scope, and makes it easier to reuse and maintain.

* A module is a construct somewhat similar to a singleton class. It has only one instance and exposes its members, but it doesn’t have any kind of internal state.

### Key Features
* ***Encapsulation***:
Provides a way to encapsulate private data and expose only what is necessary.
Prevents unintentional modification of internal logic by external code.

* ***Namespaces***:
Avoids polluting the global namespace by wrapping functionality in a single object or function.
* ***Reusability***:
Encourages modular and reusable code.
* ***Closures***:
Uses closures to maintain private state and expose public APIs.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>

# ES6 Modules (ESM)
* Each ***file*** has its own ***private scope*** by default, and not only can we choose what things we ***export*** from that file, we can also choose what things we ***import*** into other files.
<br></br>
<br></br>

# npm
* fullform > ***npm is not an acronym***.
<br></br>
<br></br>

# Bundling
* Bundling is the process of combining multiple JavaScript files (and other assets like CSS and images) into a single file (or a few files) based on a dependency graph built from an entry point.

* This reduces the number of HTTP requests and ensures all necessary code is included for the application to run efficiently.

# Webpack
* ***PROBLEM*** > For browser, downloading a large number of module files individually can reduce performance, especially as more third party files(packages) are imported.
* ***SOLUTION***: Webpack(bundling).

* Webpack is one of the most popular JavaScript bundlers.

#### src and dist
* src (short for “source”)
* dist (short for “distribution”).

* ***src*** : it is where we keep all of our website’s source code.
* ***dist***: when we run Webpack to bundle our code, it will output the bundled files into the dist directory.
* Usecase:
  1. We can only share src and others can run webpack command to build dist from src.
  2. Similarly, to deploy our website, we would only need the dist code and nothing else.

  3. ***Work inside src, build into dist, then deploy from there!***

* Webpack allows you to omit file extensions like .js in import paths by automatically resolving them during the bundling process.
  * ex:  (e.g. "./greeting") or  (e.g. "./greeting.js")
* To bundle owr code, we’ll need a ***Webpack configuration file*** in ***root***, which will contain all the details we need for bundling, such as the ***entry point***, the ***output destination***, and anything like plugins and loaders.
* 