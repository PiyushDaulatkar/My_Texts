# Views

* Views are the user-facing part of the application, in this case, HTML files.
* These files are static, but many of our use cases require views to be dynamic w.r.t. data.

* Hence, we use ***template engines*** to create our views.
* We write template files in our codebase that get transformed into HTML when we respond to a server request.
* Any variables defined in our template files are replaced with actual data. Additionally, we can insert conditional and/or loop logic into our template file, e.g. render the user’s username once they have logged in

# Embedded JavaScript templating (EJS).
*  EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.