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
