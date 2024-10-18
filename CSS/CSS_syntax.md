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
