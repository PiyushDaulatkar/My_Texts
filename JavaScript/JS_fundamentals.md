# Basic operators, maths

```js
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
```

```js
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root).
```

```js
let s = "my" + "string";
alert(s); // mystring
```

```js
alert( '6' + 9 ); // "69"
alert( 9 + '6' ); // "96"
```

```js
alert(2 + 2 + '1' ); // "*41*" and not "221"
```
* rule :>> **before add after append.**
```js
alert('1' + 2 + 2); // "*122*" and not "14"
```

### Only '+' will act differently, as it **performs addition** & also used to **append string**.
* JavaScript uses the + operator for both addition and concatenation.
* Numbers are added. Strings are concatenated.
```js
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
alert( '6' * 9 ); // 54
alert( 9 * '6' ); // 54
```
```js
// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```
* Strictly perform addtion on chars:
```js
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```
```js
==	// equal to
===	// equal value and equal type
```
* Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number).

```js
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.
```
```js
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
```
* In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

*You might hear the terms interpreted and compiled in the context of programming. In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned. You don't have to transform the code into a different form before the browser runs it. The code is received in its programmer-friendly text form and processed directly from that.

* Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. For example, C/C++ are compiled into machine code that is then run by the computer. The program is executed from a binary format, which was generated from the original program source code.
<br><br>
<br><br>


# DataTypes (8)
### 1. Number
* The number type represents both integer and floating point numbers.
* “special numeric values” which also belong to this data type: `Infinity`, `-Infinity` and `NaN`.
```js
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
```
<br><br>

### 2. BigInt
* The “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.
```js
/* below both output are same */
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```
* A BigInt value is created by ***appending `n` to the end of an integer***.
```js
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```
<br><br>

### 3. String
* A string in JavaScript must be surrounded by quotes.
```js
/*
1. ' '
2. ""
3. ` `
*/
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```
<br><br>

### 4. Boolean (logical type)
* The boolean type has only two values: true and false.
<br><br>

### 5. The “null” value
* In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
* It’s just a special value which represents “nothing”, “empty” or “value unknown”.

* The code below states that age is unknown.
* ***typeof null >> object***.
* (For null returns "object" – this is an error in the language, it’s not actually an object).
```js
let age = null;
```
<br><br>

### 6. The “undefined” value
* The meaning of undefined is ***“value is not assigned”***.

* If a variable is declared, but not assigned, then its value is undefined.
* Also you can directly assign undefined to a variable.
<br><br>

### 7. Object
* For non-primitive types.
<br><br>

### 8. Symbol
* The symbol type is used to create unique identifiers for objects.

* It is a unique and immutable primitive type.
```js
const symbol1 = Symbol('foo');
const symbol2 = Symbol('foo');

console.log(symbol1 === symbol2); // false
```
<br><br>

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```
<br><br>

# Functions
## Functions that are part of objects are called `methods`.
<br><br>

### Default parameters
```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```
<br><br>

### Anonymous functions
* Function with no name.
* generally use to pass it as argument.
```js
/* Anonymous function passed to f1 as argument */
f1(function () {
  alert("hello");
});
```
<br><br>

### Arrow functions
* It is a way to pass a function as an argument.
```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

/* you can omit the parentheses around the parameter */
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```
* Finally, if your function contains only one line that's a return statement, you can also omit the braces and the return keyword and implicitly return the expression.
```js
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);
/*
equivalent to
function doubleItem(item) {
  return item * 2;
}
*/
console.log(doubled); // [2, 4, 6]
```
### Main use of arrow function
* `this` keyword in arrow function refers to ***outer scope*** not to current scope. 
```js
// with arrow function
const user = {
    fname: 'a',
    lname: 'b',
    fullname: () => {
       console.log(this); //window object
       console.log(this.fname + " " + this.lname) //undefined undefined
    }
};
//vs
// without arrow function
const user = {
    fname: 'a',
    lname: 'b',
    fullname: () => {
       console.log(this); //user object
       console.log(this.fname + " " + this.lname) //a b
    }
};  
```
<br><br>

# Types of errors in javascript
### Reference error
### Syntax error
### Type error
* an operand or argument passed to a function is incompatible with the type expected by that operator or function;
* or when attempting to modify a value that cannot be changed;
* or when attempting to use a value in an inappropriate way.

### In JavaScript, arrays use numbered indexes.
### In JavaScript, objects use named indexes.
<br><br>

# HTML vs DOM
* HTML represents initial page content
* DOM represents current page content(after changes by javascript).
* The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.
<br><br>

# DOM
## DOM methods
* Query selectors
* Element creation
* Append elements
* Remove elements
* Altering elements
```js
element.querySelector(selector)
element.querySelectorAll(selectors)

document.createElement(tagName, [options])

parentNode.appendChild(childNode)
parentNode.insertBefore(newNode, referenceNode)

parentNode.removeChild(child)

const div = document.createElement("div");
div.setAttribute("style", "color: red; background: white;");
div.style.color = "red";
```
<br><br>

* When accessing a kebab-cased CSS property like background-color with JS, you will need to either use camelCase with dot notation or bracket notation. When using bracket notation, you can use either camelCase or kebab-case, but the property name must be a string.
```js
// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background-color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];
```

> [!TIP]  
> Note that using textContent is preferred over innerHTML for adding text, as innerHTML should be used sparingly to avoid potential security risks.

> [!NOTE]
> Keep in mind that the JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.

> [!IMPORTANT]
> * Your JavaScript, for the most part, is run whenever the JS file is run or when the script tag is encountered in the HTML. If you are including your JavaScript at the top of your file, many of these DOM manipulation methods will not work because the JS code is being run before the nodes are created in the DOM. The simplest way to fix this is to include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created.
> * Alternatively, you can link the JavaScript file in the `<head>` of your HTML document. Use the `<script>` tag with the src attribute containing the path to the JS file, and include the defer keyword to load the file after the HTML is parsed.

<br><br>

# Events
* To manipulate DOM dynamically or on demand.
* Events are actions that occur on your webpage, such as mouse-clicks or key-presses.
### There are three primary ways to go about this:
#### <u>Method 1</u>: You can specify function attributes directly on your HTML elements.
* Drawbacks:
  * Clutter js and html together.
  * You can only call one method(alert) per event(onClick).
```html
<button onclick="alert('Hello World')">Click Me</button>
```
<br>

#### <u>Method 2</u>: You can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in your JavaScript.
* Drawbacks:
  * You can only call one method(alert) per event(onClick).
```html
<!-- the HTML file -->
<button id="btn">Click Me</button>
```
```js
// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
```
<br>

#### <u>Method 3</u>: You can attach event listeners to the DOM nodes in your JavaScript.
```html
<!-- the HTML file -->
<button id="btn">Click Me Too</button>
```
```js
// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
}); 
```
<br><hr><br>

```js
btn.addEventListener("click", function (e) {
  e.target.style.background = "red";
});

```
* `e.target`: This refers to the element that triggered the event—in this case, the button (#btn).
* The e parameter in that callback function contains an object that references the event itself. Within that object you have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed, or information about the event’s target - the DOM node that was clicked.
<br><br>

## Attaching listeners to groups of nodes
```html
<div id="container">
  <button id="one">Click Me</button>
  <button id="two">Click Me</button>
  <button id="three">Click Me</button>
</div
```

```js
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
```
<br><br>

# NodeList
* NodeList is a collection of nodes, typically returned by methods like `document.querySelectorAll()`, `childNodes`, or `getElementsByTagName()`.
* NodeList is a collection of nodes, typically returned by methods like document.querySelectorAll(), childNodes, or getElementsByTagName().
<br><br>

# Event bubbling
### Benefits
* When an event occurs on an element (like a click), it first triggers the event handler on that element. Then, the event bubbles up to its parent elements, triggering their event handlers in the process, all the way up to the root of the document.
* When you click the button, the click event occurs in the following order:
  * button
  * div with the id container
  * body
  * html
  * document

* Usecase:
 ***<u>Event Delegation</u>***: You can attach a single event listener to a parent element instead of multiple listeners to child elements.
```js
// alert if any of button inside parent div is clicked.
parentDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    alert("Button inside parent clicked!");
  }
});
```

### [Page load events](https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/)
  * DOMContentLoaded
  * load
  * beforeunload
  * unload
### [Mouse events](https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/)
### [Keyboard events](https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/)
### [Event delegation](https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/)
### [The dispatchEvent method](https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent/)

* dispatchEvent() is used to stimulate an event without actual event.(like instead of human clicking code will click).  
* For clicking on precise location.
  * clientX
  * clientY.
### [Custom events](https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/)
  * **CustomEvent()** constructor to create a custom event.
  * ***dispatchEvent()*** to trigger the event.
<br><br>

# Objects
* can be defined in two ways:
```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```
```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
```
```js
user.isAdmin = true; // add new property
delete user.age; // delete a property.
```
```js
// For multiword properties
user["likes birds"] = true;
alert(user["likes birds"]); // true
```
* As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
```js
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6
```
```js
let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)
```
* There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
```js
let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
```
<br>

## in operator
```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```
<br>

## "for..in" loop
```js
for (key in object) {
  // executes the body for each key among object properties
}
```
```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```
<br>

## when you copy an object variable, it will contain a reference to the object provided to it.
```js
// obj contains a reference to the object we defined on the right side
const obj = { data: 42 };
// objCopy will contain a reference to the object referenced by obj
const objCopy = obj;

// making changes to objCopy will make changes to the object that it refers to
objCopy.data = 43;

console.log(obj); // { data: 43 }
console.log(objCopy); // { data: 43 }
```

## Reassigning object data type variables
```js
let animal = { species: "dog" };
let dog = animal;

// reassigning animal variable with a completely new object
animal = { species: "cat" };

console.log(animal); // { species: "cat" }
console.log(dog); // { species: "dog" }
```
<br><br>

### `map` returns a new array and does not change the original array.

## reduce
```js
array.reduce((accumulator, currentValue, index, array) => {
    // Your reducer logic here
}, initialValue);
```
  1. Accumulator (accumulator): This is the value returned from the previous iteration of the reducer function. On the first call, it is equal to the initialValue (if provided) or the first element of the array (if no initialValue is provided).

  2. Current Value (currentValue): This is the current element being processed in the array.

  3. Index (optional): The index of the current element being processed.

  4. Array (optional): The array that reduce() was called upon.

