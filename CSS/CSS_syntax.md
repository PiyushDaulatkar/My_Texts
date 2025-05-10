# Selector
### universal selector
```css
* {
    color: red;
}
```
<br>

### Type selectors / element selector
* A type selector will select all elements of the given element type.
```css
div {
  color: white;
}
```
<br>

### Class selectors
* Class selectors will select all elements with the given class, which is just an attribute you place on an HTML element.
```css
.alert-text {
  color: red;
}
```
```html
<div class="alert-text">Please agree to our terms of service.</div>
```
<br>


### ID selectors
* ID selectors are similar to class selectors.
* They select an element with the given ID, which is another attribute you place on an HTML element.
* The major difference between classes and IDs is ***that an element can only have one ID***.
```css
#title {
  background-color: red;
}
```
```html
<div id="title">My Awesome 90's Page</div>
```
<br>

### Attribute selectors
* attribute is anything in the opening tag of an HTML element - such as src='picture.jpg' or href="www.theodinproject.com".
* `[attribute]` - This general selector will select anything where the given attribute exists. Its value doesn’t matter.
* `selector[attribute]` - Optionally we can combine our attribute selectors with other types of selectors, such as class or element selectors.
* `[attribute="value"]` - To get really specific, we can use = to match a specific attribute with a specific value.
```css
  [src] {
    /* This will target any element that has a src attribute. */
  }

  img[src] {
    /* This will only target img elements that have a src attribute. */
  }

  img[src="puppy.jpg"] {
    /* This will target img elements with a src attribute that is exactly "puppy.jpg" */
  }
```
<br>

### The grouping selector
* What if we have two groups of elements that share ***some*** of their style declarations?

* To cut down on the repetition, we can group these two selectors together as a comma-separated list.
```css
.read,
.unread {
    /* common declarations */
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

### Chaining selectors
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```
* We have two elements with the subsection class that have some sort of unique styles, but what if we only want to apply a separate rule to the element that also has header as a second class? Well, we could chain both the class selectors together in our CSS like so:
```css
.subsection.header {
  color: red;
}
```
* What .subsection.header does is it selects any element that has both the subsection and header classes.
* Notice how there isn’t any space between the .subsection and .header class selectors.
* This syntax basically works for chaining any combination of selectors, ***except for chaining more than one type selector***.
* This can also be used to chain a class and an ID, as shown below:
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>
```
```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: yellow;
}
```
<br>

### Descendant combinator
* Combinators allow us to combine multiple selectors differently than either grouping or chaining them, as they show a relationship between the selectors.
* There are four types of combinators in total, one of them is ***descendant combinator***.
* A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc.) that matches the previous selector.
```html
<div class="ancestor">
  <!-- A -->
  <div class="contents">
    <!-- B -->
    <div class="contents"><!-- C --></div>
  </div>
</div>

<div class="contents"><!-- D --></div>
```
```css
.ancestor .contents {
  /* some declarations */
}
```
* In the above example, the first two elements with the contents class (B and C) would be selected, but that last element (D) wouldn’t be.
<br>

* syntax difference between Chaining selectors & Descendant combinator
    * Chaining selectors => no space between selector
    * Descendant combinator => spaces between selector.
<br><br>


# Shorthand CSS properties
* Shorthand properties are CSS properties that let you set the values of multiple other CSS properties simultaneously. Using a shorthand property, you can write more concise (and often more readable) stylesheets, saving time and energy.
```css
/* Individual */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Shorthand */
margin: 10px 20px; /* top/bottom | right/left */
```

# Child and sibling combinators

`>` - the child combinator\
`+` - the adjacent sibling combinator\
`~` - the general sibling combinator

```html
<main class="parent">
  <div class="child group1">
    <div class="grand-child group1"></div>
  </div>
  <div class="child group2">
    <div class="grand-child group2"></div>
  </div>
  <div class="child group3">
    <div class="grand-child group3"></div>
  </div>
</main>
```
```css
/* The divs with the class "child" will get selected by this */
main > div {
  /* Our cool CSS */
}

/* The divs with the class "grand-child" will get selected by this */
main > div > div {
  /* More cool CSS */
}

/* Only the div with the classes "child group2" will get selected by this */
.group1 + div {
  /* Our cool CSS */
}

/* Only the div with the classes "child group3" will get selected by this */
.group1 + div + div {
  /* More cool CSS */
}

/* All of .group1's div siblings - in this case the 2nd and 3rd .child divs, will get selected by this */
.group1 ~ div {
  /* Our cool CSS */
}
```
<br><br>

# Pseudo-selectors
## Pseudo-elements
* prefixed with a single colon(***::***)
* Pseudo-elements allow you to style parts of an element that aren't directly part of the document structure (like inserting content before or after an element, or styling specific parts of a text block).

* They are used to create effects that you can’t achieve through regular CSS properties alone.
* SYNTAX: `element/id/class:pseudo-class`
```css
::before: /* Inserts content before the content of an element. */
::after: /* Inserts content after the content of an element. */
::first-letter: /* Targets the first letter of a block of text. */
::first-line: /* Targets the first line of a block of text. */

article p::first-line {
  font-size: 120%;
  font-weight: bold;
}

button::before {
  content: "👉";
  margin-right: 8px;
}

button::after {
  content: "✅";
  margin-left: 8px;
}

.box::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  border: 1px solid black;
}

/* ::marker allows you to customize the styling of your <li> elements’ bullets or numbers. */
ol li::marker {
  color: red;
  font-weight: bold;
}

ul li::marker {
  font-size: 150%;
  color: lightgreen;
}
```

<br><br>

## Pseudo-classes
* prefixed with a single colon(***:***)

* A pseudo-class is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.
* SYNTAX: `element/id/class:pseudo-class`	

```css
/* this will target the first child element <p> in the <article> */
article p:first-child {
  font-size: 120%;
  font-weight: bold;
}

:last-child
:only-child
:invalid

a:link,
a:visited {
  color: rebeccapurple;
  font-weight: bold;
}

a:hover {
  color: hotpink;
}
```
<br><br>

<table>
<tr>
<th><b><i>Structural Pseudo-classes</b></i></th>
<th>Pseudo-classes</th>
</tr>
<tr>
<td>:hover, :active, :focus</td>
<td>:first-child, :only-of-type, nth-child(), :nth-child, :empty, :only-child</td>
</tr>
</table>

```css
  .myList:nth-child(5) {/* Selects the 5th element with class myList */}

  .myList:nth-child(3n) { /* Selects every 3rd element with class myList */}

  .myList:nth-child(3n + 3) { /* Selects every 3rd element with class myList, beginning with the 3rd */}

  .myList:nth-child(even) {/* Selects every even element with class myList */}
```
<br><br>

## Combining pseudo-classes and pseudo-elements
```css
/*make the first line of the first paragraph bold*/
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```
<br><br>

## Q: What is the conclusion about using CSS vs JavaScript for simple visual changes?
### A: 
### For simple visual effects like color changes, CSS with pseudo-classes (e.g., :hover, :focus) is usually the best choice. It is faster, simpler, and more maintainable.
### JavaScript should be used when the effect requires more complex logic (e.g., multiple animations, state changes) or when handling dynamic, non-visual behaviors.

* Example if only bg-color changes onhover, then using CSS with a pseudo-class (:hover) is usually the better approach.

* Performance:
  * CSS is hardware accelerated in modern browsers for visual changes like :hover, meaning it's optimized to be as fast as possible.
  * With JavaScript, you are adding extra overhead to the browser, since it needs to handle event listeners, update the DOM, and then apply the styles, which can be less efficient than using CSS.
* Simplicity and Maintainability:
  * CSS keeps visual styles separate from the logic, making the code cleaner and easier to maintain.
  * Using JavaScript for simple visual effects adds unnecessary complexity (e.g., adding event listeners, manually updating styles).
* Declarative vs Imperative:
  * CSS provides a declarative approach: You define the desired effect, and the browser handles it (e.g., "change the color when something happens").
  * JavaScript requires an imperative approach: You must explicitly tell the browser what to do and how to do it (e.g., "when an event happens, change this style").
* Accessibility:
  * CSS-based visual changes work automatically for all users, including those navigating via keyboard or assistive technologies, without needing additional logic.
  * With JavaScript, you need to ensure accessibility by handling keyboard navigation or other input methods.
<br><br>

## Attribute selector
Sometimes we need to be more general in how we access these attributes. For example, perhaps we’re only interested in img elements where the src attribute’s value ends in .jpg. For cases like this we have some attribute selectors that allow us to match a part of the attribute’s value. If you’ve ever come across regular expressions before, these attributes use a similar syntax.

`[attribute^="value"]` - ^= Will match strings from the start.
`[attribute$="value"]` - $= Will match strings from the end.
`[attribute*="value"]` - *= The wildcard selector will match anywhere inside the string.

```css
[class^='aus'] {
  /* Classes are attributes too!
    This will target any class that begins with 'aus':
    class='austria'
    class='australia'
  */
}

[src$='.jpg'] {
  /* This will target any src attribute that ends in '.jpg':
  src='puppy.jpg'
  src='kitten.jpg'
  */
}

[for*='ill'] {
  /* This will target any for attribute that has 'ill' anywhere inside it:
  for="bill"
  for="jill"
  for="silly"
  for="ill"
  */
}
```

<br/>

# Naming Convention
## BEM (Block Element Modifier)
* ***Block***: Represents a standalone component (e.g., hero, navbar, button).

* ***Element***: Represents a part of a block (e.g., `button__icon`, `navbar__item`).

* ***Modifier***: Represents a different state or variant of a block or element (e.g., `hero--large`, `navbar__item--active`).

<br/>

# CSS units
* px: Hard code.
* %: percent related to parent container.
* vw, vh: percent related to screen.
  * viewport width/height.
* vmax, vmin: max/min form screen height and width.
* em, rem.

# Responsive Tips
* Add `position: relative;` to all parent divs.