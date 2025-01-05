# Express

* When our server receives our GET request, Express stores the request in a request object. This request gets passed through a chain of functions we call middleware functions until eventually, a middleware function tells Express to respond to the request.
<br><br>

# Routes
* Routes essentially just match a request’s HTTP verb (e.g. GET or POST) and URL path to the appropriate set of middleware functions - the controllers.

1. ***First argument***
   * First argument we pass a route is the ***path to match***, which can either be a ***string*** or a ***regular expression***.

   * With string paths, we can also use certain symbols like ?, +, * and () to provide some pattern-matching functionality, similar to regular expressions.
```js
// ? makes a character optional
// The following path matches both /message and /messages
"/messages?"

// () groups characters together, allowing symbols to act on the group
// The following path matches both / and /messages
"/(messages)?"

// * is a wildcard matching any number of any characters
// The following path can match /foo/barbar and even /foo-FOO/bar3sdjsdfbar
"/foo*/bar*bar"
```
>[!NOTE]
> Your routes will be set up in your server in the order they are defined.
```js
app.get("*", (req, res) => {
  res.send("* is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.");
});
app.get("/messages", (req, res) => {
  res.send("This route will not be reached because the previous route's path matches first.");
});

```
<br><br>

## Route parameters
* Route parameters are placeholders in a URL that allow dynamic values to be passed to a route. 

* To denote a route parameter, we start a segment with a `:` followed by the name of the parameter (which can only consist of case-sensitive alphanumeric characters, or `_`).
* Whatever we name that route parameter, Express will automatically populate the req.params object in any of the following middleware functions with whatever value the path passed into the parameter, using the parameter name as its key.
```js
/**
 * GET /odin/messages will have this log
 * { username: 'odin' }
 *
 * GET /theodinproject79687378/messages would instead log
 * { username: 'theodinproject79687378' }
 */
app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.end();
});

/**
 * GET /odin/messages/79687378 will have this log
 * { username: "odin", messageId: "79687378" }
 */
app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  res.end();
});
```

## Query parameters
* Query parameters are a unique and optional part of a URL that ***appear at the end***.
* They are special as they are not actually considered part of the path itself, but are essentially more like arguments we can pass in to a given path.

*  If any keys are repeated, Express will put all values for that key into an array.
```js
/**
 * GET /odin/messages?sort=date&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: "date", direction: "ascending" }
 *
 * GET /odin/messages?sort=date&sort=likes&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: ["date", "likes"], direction: "ascending" }
 */
app.get("/:username/messages", (req, res) => {
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  res.end();
});
```
<br><br>

<table style="border-style: solid;">
<thead style="border-style: solid;">
<tr>
<td>Route parameters</td>
<td>Query parameters</td></tr>
</thead>
<tbody>
<tr><td>part of the URL path(route).</td>
<td>appear at the end of url.</td></tr>
<tr><td>Defined in the route using colons (a:) and accessed using placeholders.</td>
<td>appear after the `?` symbol in the URL, and multiple query parameters are separated by `&`.</td></tr>
<tr><td>Example:

URL: /users/:id, "/:username/messages/:messageId"</td>
<td>Example:

/search?q=node&sort=desc</td></tr>
<tr><td>mandatory unless explicitly made optional (with a ?)</td>
<td>appear at the end of url.</td></tr>
<tr><td>Use Case:

Identifying specific resources (e.g., users, products, articles).
Example: /products/42 retrieves the product with ID 42.</td>
<td>Use Case:

used to send key-value pairs in the URL.

Filtering, sorting, or paginating data.
</td></tr>
<tr><td>Identifies specific resources</td>
<td>Provides additional data (filtering, sorting, etc.)</td></tr>
<tr><td>Access in Express.js:

req.params</td>
<td>req.query</td></tr>
</tbody>
</table>
<br><br>

# Routers
* A router is a component responsible for handling incoming requests and directing them to the appropriate handler or controller.

* To organize our routes into groups and extract each group out to their own file.
<br><br>

# Controllers
* controllers are responsible for handling incoming requests, processing the data (often by interacting with models), and returning a response.
* They act as intermediaries between the routes and the logic of your application.
<br><br>

# Middleware
* Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle.

* Middleware can:
  * Execute code.
  * Make changes to the request and response objects.
  * End the request-response cycle.
  * Call the next middleware function in the stack.
* Types of Middleware
  1. ***Application-Level Middleware***:
Attached directly to the app instance using app.use() or route-specific methods like app.get(), app.post(), etc.
  2. ***Router-Level Middleware***:
Attached to specific routers using router.use().

  3. ***Built-in Middleware***:
Provided by Express, e.g., express.json(), express.urlencoded().
  4. ***Error-Handling Middleware***:
Special middleware to handle errors, identified by having four parameters: (err, req, res, next).
  5. ***Third-Party Middleware***:
Middleware provided by external libraries, e.g., morgan, cors, etc.
