# Properties
## color
```css
  /* hex example: */
  color: #1100ff;

  /* Hexadecimal Colors With Transparency */
  color: #ff000080;  /* red transparency */
  color: #00ff0080;   /* green transparency */
  color: #0000ff80;  /* blue transparency */


  /* rgb example: */
  color: rgb(100, 0, 127);

  /* RGBA example */
  color: rgba(255, 0, 0, 0.3)   /* red with opacity */
  color: rgba(0, 255, 0, 0.3)   /* green with opacity */
  color: rgba(0, 0, 255, 0.3)   /* blue with opacity */


  /* hsl example: */
  color: hsl(15, 82%, 56%);

  /* HSLA Colors */
  color: hsla(120, 100%, 50%, 0.3);

  /* Predefined/Cross-browser Color Names */
  color: red;
```
* A ***hexadecimal*** color is specified with: ***#RRGGBB***.

* ***HSL*** stands for ***hue, saturation, and lightness*** - and represents a cylindrical-coordinate representation of colors.

* hsl(hue, saturation, lightness).

* ***RGBA*** color values are an extension of RGB color values with an ***alpha channel*** - which specifies the opacity of the object.

### The ***currentcolor*** Keyword
* The currentcolor keyword refers to the value of the color property of an element.
```css
#myDIV {
  color: blue; /* Blue text color */
  border: 10px solid currentcolor; /* Blue border color */
}
```
* The border color of the following <div> element will be blue, because the text color of the <div> element is blue.
<br>

## background-color
```css
background-color: #ff0000;
```
<br>

## font-family
```css
font-family: "Times New Roman";
/* or */
font-family: serif;
/* or */
font-family: "Times New Roman", serif;
```
* If a browser cannot find or does not support the first font in a list, it will use the next one, then the next one and so on until it finds a supported and valid font.
<br>

## font-size: 22px
## font-weight
```css
font-weight: bold
/* or */
font-weight: 700 /* from 1 to 1000*/
```
## text-align
* It will align text ***horizontally*** within an elemen
```css
text-align: center
```
<br>

## height & width
```css
img {
  height: auto;
  width: 500px;
}
```
* It’s best to include both of these properties and the HTML attributes for image elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than the rest of the page contents, it won’t take up any space on the page at first but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a height and width prevents this from happening, as space will be “reserved” on the page and appear blank until the image loads.
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>