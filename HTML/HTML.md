# HTML

* Consists of elements and tags.

## Elements
```html
e.g. `<html>` abcd `</html>`
* above whole is html element.
```
<br><br>

## Tags
* elements consists of three parts.
```html
1. opening tag => <html>
2. some text content => represents content wrapped within the opening and closing tags.
3. closing tag => </html> {has forward slash}.
```
<br><br>


## Void elements
* Some HTML elements do not have a closing tag. These elements just have a single tag, like: `<br>` or `<img>`. They are known as void elements because they are void of any content, there is nothing inside of them. No closing tag means they can’t wrap content like other tags do. 
<br><br>

# The DOCTYPE
* The doctype’s purpose is to tell the browser what version of HTML it should use to render the document.
* The latest version of HTML is HTML5, and the doctype for that version is `<!DOCTYPE html>`.
<br><br>


# index.html
* It is worth noting that we named our HTML file index. We should always name the HTML file that will contain the homepage of our website index.html.
* This is because web servers will by default look for an index.html page when users land on our websites – and not having one will cause big problems.
<br><br>

# HTML attributes

* 
<br><br>

# Head element
* The <head> element is where we put important meta-information about our webpages, and stuff required for our webpages to render correctly in the browser.
* Inside the `<head>`, we should not use any element that displays content on the webpage.
```html
e.x.
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
</html>

```

<br><br>

# Title element
* The `<title>` element is used to give webpages a human-readable title, which is displayed in our webpage’s browser tab.
<br><br>

# Body element
* The final element needed to complete the HTML boilerplate is the `<body>` element. This is where all the content that will be displayed to users will go - the text, images, lists, links, and so on.
<br><br>

## Boilerplate code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
  </body>
</html>

```
<br><br>

# HTML comments
```html
<!-- comment -->
```
<br><br>

# HTML is case-insensitive
* In HTML (as per the HTML5 specification), tag names are not case-sensitive.
* This means that both `<H1>` and `<h1>` will produce the same result in a browser. The browser treats them identically.
* Recommendation: ***lowercase***.

<br><br>

# Unordered lists
* If you want to have a list of items where the order doesn’t matter, like a shopping list of items that can be bought in any order, then you can use an unordered list.
* Each list item in an unordered list begins with a ***bullet point***.
```html
<ul>
    <li>Item 1<li>
    <li>Item 2<li>
    <li>Item 3<li>
    <li>Item 4<li>
</ul>
```
<br><br>

# Ordered lists
* If you instead want to create a list of items where the order does matter, like step-by-step instructions for a recipe, or your top 10 favorite TV shows, then you can use an ordered list.
* each list item in an ordered list begins with a ***number***.
```html
<ol>
    <li>Item 1<li>
    <li>Item 2<li>
    <li>Item 3<li>
    <li>Item 4<li>
</ol>
```
<br><br>

# Links
### Link tag
* The `<link>` tag is used in the ***head section*** of an HTML document to link external resources such as stylesheets, icons, or other metadata to the HTML document.
* It is ***not used for navigation or user interaction*** in the same way as the `<a>` tag.
```html
<link rel="stylesheet" href="styles.css">
```
<br>

### Anchor tag
* Used to create hyperlinks that navigate users from one page to another, or to specific sections within a page, or to external websites.
* It is one of the most fundamental and commonly used elements in HTML for navigation.
```html
<a href="https://www.example.com">Click here</a>
```
<br><br>

### Absolute links
* Links to pages on other websites on the internet.
* An absolute link will always contain the protocol and domain of the destination.
```html
<a href="https://www.example.com">Example</a>
```
### Relative links
* Links to other pages within our own website.
* Relative links do not include the domain name, since it is another page on the same site, it assumes the domain name will be the same as the page we created the link on.
```html
<a href="/about-us">About Us</a>
```
<br><br>

# HTML vs DOM
* HTML represents initial page content
* DOM represents current page content(after changes by javascript).
<br><br>