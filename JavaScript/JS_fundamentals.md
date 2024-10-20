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


# DataTypes
### Number
* The number type represents both integer and floating point numbers.
* 
```js
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```