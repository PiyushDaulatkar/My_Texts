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
* Inner scope var will shadow outer scope var.
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>
<br></br>
<hr style="border-top: dotted 1px;" />
<br></br>
