# FORMS

## The form element
* Form element is like a box that holds everything you need for a form. Inside this box, you put all the things a user interacts with, like text fields, buttons, checkboxes, etc.
* ***When you submit the form, everything inside the form element gets sent to the server.***
* ***Form element*** = A special kind of container for form inputs.
* ***Div element*** = A general container for any kind of content.

* WHY TO USE FORM INSTEAD OF DIV ?
  * The primary job of the <form> element is to collect and send data to a server when the user submits the form. A form has built-in behavior to:
    * ***Handle submitting the data*** (when the user clicks the submit button).
    * ***Send data in a structured way*** (via HTTP requests like GET or POST).
* Forms have a submit event built into them, which triggers when the user presses a submit button or hits enter in an input field.
<br><br>

## Form element's attributes
* action
* method

### action
* URL value that tells the form where it should send its data to be processed.

### method
* tells the browser which HTTP request method it should use to submit the form.
```html
<form action="example.com/path" method="post">

</form>
```
<br><br>

## Form controls

These are all the elements users will interact with on the form, such as text boxes, dropdowns, checkboxes and buttons.

