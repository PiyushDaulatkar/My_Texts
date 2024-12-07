# CSS

```css
/*selector*/
div.bold-text {
    /*property: value*/
     font-weight: 700;
}
```
## Selector
* The **HTML elements** to which CSS rules apply.
* They’re what is actually being “selected” for each rule.
<br><br>

# Specificity
* Numeric value of precedence order of CSS.
<br>

## Precedence

1. Inline css.
2. Css defined in styles element which is in head element.
3. External css (outer file linked via link tag).
<hr><br>

***1. ID selectors (most specific selector) [#]\
2. Class selectors [.]\
3. Type selectors [like p or div]***
<hr><br>

* ***When there is no declaration with a selector of higher specificity, a rule with a greater number of selectors of the same type will take precedence over another rule with fewer selectors of the same type.***
```css
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```
```html
<!-- index.html -->

<div class="main">
  <div class="list subsection">Red text</div>
</div>
```
* In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors, so the color: red declaration would take precedence.
<br>

* ***Universal selector has no specificity value.***
<br><br>

## Inheritance

* Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s children, even if we don’t explicitly write a rule for those descendants.
* Typography-based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.
<br><br>

## Rule order
* If elements have same specificity the ***last one declared will be applied***.
```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```
* Since the .warning rule was the last one defined, and no other factor was able to determine which rule to apply, it’s the one that gets applied to the element.
<br><br>

# CSS positioning & layout
## The box model
* Every single thing on a webpage is a rectangular box. These boxes can have other boxes in them and can sit alongside one another.
* There are other shapes also, but they are considered as rectangle when positioned in layout.

* Deciding how you are going to nest and stack these block elements.
* You can get a rough idea of how this works by applying an outline to every element on the page like this:
```css
/* Try below by F12 > elements > styles > + */
* {
  outline: 2px solid red;
}
```
* ***To manipulate the size of these boxes, and the space between them, use `padding`, `border`, and `margin`.***

* ***For adjacent elements(not nested), if both have margin applied, then the margin with highest value is applied.***(<s>both margin are not added</s>).
<br><br>

# Display property
## Block and Inline
* CSS has two box types: `block` and `inline` boxes.

<br>

### Block
* By default, block elements will appear on the page stacked atop each other, ***each new element starting on a new line***.
### Inline
* Inline elements, however, do not start on a new line. They appear in line with whatever elements they are placed beside.
* ex: `<a>`.
* Padding and margin behave differently on inline elements.
* In general, you do not want to try to put extra padding or margin on inline elements.

### display: inline-block
* It is used to make an element behave like an inline element while also allowing it to accept width and height properties.

* This means:
  * Inline Behavior: The element will sit next to other inline elements without starting a new line.
  * Block Properties: You can set width, height, margins, and padding, similar to block elements.

***(usefull to place elements beside each other)***.
* Aligning multiple elements horizontally while maintaining control over their dimensions.
* Creating grid layouts without using float or flexbox.
<br><br>

## Divs and spans
* generic boxes that can contain anything.
* Div is a block-level element by default.
* Span is an inline-level element by default. It can be used to group text content and inline HTML elements for styling.
<br><br>

# Flexbox (Flexible Box)
* Flexbox is a way to arrange items into rows or columns.
* These items will flex (i.e. grow or shrink) based on some rules that you can define.

* Flex containers + flex items.
## Flex containers and flex items

### Flex containers
* ***A flex container is any element that has `display:flex` on it***.

### Flex items
* ***A flex item is any element that lives directly inside of a flex container***.
<hr>

* ***Any element can be both a flex container and a flex item. Said another way, you can also put display: flex on a flex item and then use flexbox to arrange its children.***
<hr><br>

### Flex containers
* ***justify-content*** => to align items ***horizontally*** in flexbox.
* ***align-items*** => to align items ***vertically*** in flexbox.
```css
.menu-container {
  /* ... */
  display: flex;
  justify-content: center;    /* Add this */
}
```
```
"justify-content" values:

`center`
`flex-start` (left aligned)
`flex-end` (right aligned)
`space-around` (spreads its items out across its entire width)
`space-between` (adds extra space evenly between items).
```
```
"align-items" values:

`center`
`flex-start` (top aligned)
`flex-end` (bittom aligned)
`stretch` (spreads its items out across its entire height)
`baseline` (adds extra space evenly between items).
```
<br><br>

### Flex container direction
* “Direction” refers to whether a container renders its items horizontally or vertically.
* The default is horizontal direction.
```css
.photo-grid {
  flex-direction: column;
  /* or */
  flex-direction: row;
}
```
***For mobile it can be row and for desktop it can be column.***

* When you rotate the direction of a container, you also rotate the direction of the justify-content property. It now refers to the container’s vertical alignment—not its horizontal alignment.

***i.e. now below properties will act reverse as***
* ***justify-content*** => to align items ***vertically*** in flexbox.
* ***align-items*** => to align items ***horizontally*** in flexbox.

### Flex items

* flex: 1 ==> 1 1 0
* flex: auto ==> 1 1 auto
* when you specify flex-grow or flex-shrink, flex items do not necessarily respect your given values for width. In the above example, all 3 divs are given a width of 250px, but when their parent is big enough, they grow to fill it. Likewise, when the parent is too small, the default behavior is for them to shrink to fit. This is not a bug, but it could be confusing behavior if you aren’t expecting it.

* There is a difference between the default value of flex-basis and the way the flex shorthand defines it if no flex-basis is given. The actual default value for flex-basis is auto, but when you specify flex: 1 on an element, it interprets that as flex: 1 1 0. If you want to only adjust an item’s flex-grow you can do so directly, without the shorthand. Or you can be more verbose and use the full 3 value shorthand flex: 1 1 auto, which is also equivalent to using flex: auto.

* `flex-grow`: how much with that flex item will ***grow*** ***relative*** to other elements in that flexible container.
* `flex-shrink`: how much with that flex item will ***shrink*** ***relative*** to other elements in that flexible container.

* `flex-basis`:  the ***initial main size*** of the flex item, ***before free space*** is distributed according to the flex factors.
```css
gap: 8px;
```
<br><br>

# CSS resets
* These resets are stylesheets containing CSS rules aimed at altering or removing the defaults set by user-agent(browser) stylesheets.
* To address inconsistencies across browsers and establish a consistent starting point for styling, some developers started using CSS resets.
<br><br>

# Normalize.css
Instead of removing styles, Normalize.css adjusts them. It improves the consistency of elements like forms, buttons, and headings without completely stripping their default styles.
* Reset: Removes all default styling.
* Normalize: Retains useful styles and makes them consistent.
<br><br>


# Units
## Absolute units
* Absolute units are those that are always the same in any context.
* ex: `px` (`in`,`cm` generally use only for printing).

## Relative units
* Relative units are units that can change based on their context.
* ex: `em`, `rem`
### em

* em is a unit that relates to the ***font size*** of an element or its parent element.
* For example, if you have a text element with a font size of 16 pixels, then:
If you set its width to 4em, it would be 64 pixels wide (because 16px × 4 = 64px).

### rem
* rem stands for "root em" and is based on the ***font size*** of the root element of the page (either `:root` or `html`).
* Using a relative size like rem to define font sizes across your website is recommended.

## Viewport units (vh, vw, vmin & vmax)
* The units `vh` and `vw` relate to the size of the viewport. Specifically, `1vh` is equal to ***1% of the viewport height*** and `1vw` is equal to ***1% of the viewport width***.
* These can be useful any time you want something to be sized relative to the viewport.
* The term viewport refers to the visible area of a webpage in a web browser. It’s essentially the part of the screen where users can see content.

## ch
* The ch unit in CSS stands for "character unit".
* It is based on the width of the "0" (zero) character in the current font.
* e.g. : If you want to set paragraph width to fit 75 chars (75ch).
<br><br>

# Positioning
* Static positioning.
* relative positioning.
* absolute positioning.
* fixed positioning.
* sticky positioning.

## Static positioning.
* The default positioning mode of every element is `position: static`.
* `top`, `right`, `bottom`, and `left` <span style="color:pink">***do not affect***</span> the position of the element.

## relative positioning.
* Allows you to change the position of the element <span style="color:gold">***relative to where it normally would***</span> be in the document flow if it was static.
* `top`, `right`, `bottom`, and `left` <span style="color:red">***will affect***</span> the position of the element.
* It moves out of document flow. Hence elements near to it will not be affected.
* (do not use).

## absolute positioning.
* mostly used.
* It completely removes the element from document flow.
* And other things render such as that element didnt exist.
* `top`, `right`, `bottom`, and `left` <span style="color:red">***will affect***</span> the position of the element.
* ***Element will be placed absolutely from its nearest parent(relative, absolute,fixed, sticky, <s>static</s>)*** {i.e. top will apply from nearest elative, absolute,fixed, sticky ancestor}.

## fixed positioning.
* They are position based on entire html  element(root).
* Completely ignores parent positioning.
* ***Stay in the same place when you scroll***.

## sticky positioning.
* Combination of relative and fixed positioning.
* Sticky elements will act like normal elements until you scroll past them, then they start behaving like fixed elements.
<br><br>

# CSS functions
* min(), max(), and clamp()
* calc() >> for  performing basic math operations, with the ability to interpolate between unit types (ex. rem to vw).
* var() >> accepts two parameters. The first parameter is the custom property we want to assign. The second parameter is an optional fallback value.
  * When a fallback value is provided in addition to a custom property, the fallback value will be used if the custom property is invalid or hasn’t been declared yet.
  ```css
  .fallback {
  --color-text: white;

  background-color: var(--undeclared-property, black);
  color: var(--undeclared-again, var(--color-text, yellow));
  }
  /* In the above example, our background-color property would have a value of black and our color property would have a value of white. If the --color-text custom property was invalid or didn’t exist, the fallback to our fallback would take over and the color property would have a value of yellow. */
  ```
<br><br>

# Custom properties (CSS variables)
* By using custom properties, instead of having to update every single instance of a specific value (“This shade of red is too light, let’s change the shade on all seven of these selectors”), we only need to update a single instance: the custom property itself.
* custom properties can help us keep colors consistent throughout a project, something that will be really helpful as projects get larger.

### How to declare custom properties.
```css
.error-modal {
  --color-error-text: red;
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

  color: var(--color-error-text);
  border: var(--modal-border);
  font-size: var(--modal-font-size);
}
```
* casing : start with `--` & seperated by `-`(Kebab case (single hyphens to separate words)).

### The scope of custom properties.
* Define a custom property inside a specific selector (like a class or element), it ***applies to that selector and any of its child elements***.
```html
<!-- In the example below, only the element with the cool-paragraph class would get styled with a red background since it’s a descendant of the element where our custom property is declared. -->
<div class="cool-div">
  <p class="cool-paragraph">Check out my cool, red background!</p>
</div>

<p class="boring-paragraph">I'm not in scope so I'm not cool.</p>
```
```css
.cool-div {
  --main-bg: red;
}

.cool-paragraph {
  background-color: var(--main-bg);
}

.boring-paragraph {
  background-color: var(--main-bg);
}
```
> [!NOTE]
> ***To access a custom property use var().***
> 
> Variables do not work inside media queries and container queries.

### The :root selector.
* Declaring here is like global variables.
```html
<p class="cool-paragraph">Lorem ipsum dolor sit amet.</p>

<p class="exciting-paragraph">Lorem ipsum dolor sit amet.</p>
```
```css
:root {
  --main-color: red;
}

.cool-paragraph {
  color: var(--main-color);
}

.exciting-paragraph {
  background-color: var(--main-color);
}
```
* By declaring our custom property on the :root selector in the example above, we can access it on any other valid selector within our CSS file, since any other selector would be considered a descendant of the :root selector.
* USECASE : ```to add themes```.

### Using media queries.

<br><br>

# CSS data types
<br><br>

# CSS Framework
* Bootstrap
* Tailwind
* Bulma
* Foundation
<br><br>

# CSS Preprocessors
*  SASS
*  LESS
*  Stylus.
<br><br>

# CSS GRID vs Flexbox
<table>
<tr>
<th>Flexbox</th>
<th>Grid</th>
</tr>
<tr>
<td>1D</td>
<td>2D</td>
</tr>
<tr>
<td></td>
<td>Overlap items.</td>
</tr>
<table>