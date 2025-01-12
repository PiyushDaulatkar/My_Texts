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
  1. ***Router-Level Middleware***:
Attached to specific routers using router.use().

  1. ***Built-in Middleware***:
Provided by Express, e.g., express.json(), express.urlencoded().
  1. ***Error-Handling Middleware***:
Special middleware to handle errors, identified by having four parameters: (err, req, res, next).
  1. ***Third-Party Middleware***:
Middleware provided by external libraries, e.g., morgan, cors, etc.

# Controllers
* controllers are responsible for handling incoming requests, processing the data (often by interacting with models), and returning a response.
* They act as intermediaries between the routes and the logic of your application.

* They also classify as a middleware (at least in the Express world) that are used by ***route handlers***.
* Controllers are a key component of the MVC (Model-View-Controller) pattern, a design approach for organizing software. Middleware, on the other hand, is a core feature of Express that allows you to run code, modify requests, or end the cycle at specific points in the request-response cycle.
* So we are using middleware in Express to implement the “Controller” part of the MVC pattern.
* A controller comes into play whenever a request hits the server and a route matches the requested HTTP verb and path. The route determines which controller should handle the request based on the defined middleware chain. The appropriate controller then takes over, performing the necessary actions to fulfill the request. This could involve retrieving data from the model, processing the data, making decisions based on business logic, or updating the model with new data. Once the controller completes its tasks, it passes the processed data to the view. The view then renders this data into a format suitable for sending back to the client. Typically, this would be HTML or Json.               
<br><br>

# Handling errors
## 1. try/catch
```js
async function getAuthorById(req, res) {
  const { authorId } = req.params;

  try {
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      res.status(404).send("Author not found");
      return;
    }

    res.send(`Author Name: ${author.name}`);
  } catch (error) {
    console.error("Error retrieving author:", error);
    res.status(500).send("Internal Server Error");

    // or we can call next(error) instead of sending a response here
    // Using `next(error)` however will only render an error page in the express' default view and respond with the whole html to the client.
    // So we will need to create a special type of middleware function if we want a different response.
  }
};
```
<br>

## 2. ***express-async-handler*** package
```js
const asyncHandler = require("express-async-handler");

// The function will automatically catch any errors thrown and call the next function
const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author Name: ${author.name}`);
});
```
<br>

## 3. With a middleware
* An error middleware function handles all errors in our application that come down from other middleware functions.

* We want to place this error middleware function at the very end of the application code to ensure it's the last middleware function executed and only handles errors bubbling down from preceding middleware functions.
```js
// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});
```
* It requires 4 parameters, if for example we exclude one of the parameters, it will not be recognized as an error middleware function.
* This is an odd one where the error object must be the first parameter in the callback.

* This middleware function handles the errors thrown in other middleware functions or something that is sent by a previous middleware function using the next function (e.g. next(err)).
* error middleware function => takes 4 parameters.
* request middleware function => takes less than 4 parameters.
<br>


## 4. [Creating custom errors](https://www.theodinproject.com/lessons/nodejs-controllers#creating-custom-errors)
* With the solutions above, the error middleware function can only really respond with a 500 status code no matter what error it is.

* Solution ==> create our own custom error by extending the Error object.
<br><br>

# next function
* It is used to pass control to the next middleware function in the application's request-response cycle.
```js
function middleware1(req, res, next) {
  console.log("Middleware 1");
  next(); // Pass control to the next middleware
};

function middleware2(req, res, next) {
  console.log("Middleware 2");
  res.send("Response from Middleware 2");
  // request-response cycle ends here
};

function middleware3(req, res, next) {
  console.log("Middleware 3");
  res.send("Response from Middleware 3");
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
// will log `Middleware 1` -> `Middleware 2` and send a response with the text "Response from Middleware 2"
```
* Here we have middleware1, middleware2, and middleware3. middleware1 calls the next function, and since we are not yet sending a response, we pass the control to the next middleware function - middleware2 (as indicated by the order of app.use calls). In middleware2, we send a response which ends the request-response cycle. Since it has ended, the third middleware function (middleware3) does not run. 

* We have the following arguments that we can pass to it:

  1. ***No argument next()*** - Will pass control to the next middleware function. Very simple and straightforward.
  2. ***With an error argument next(new Error(...))*** - Will pass control directly to the error middleware function.
  3. ***With the string next('route')*** - Will pass control to the next route handler with the same matching path (if there is one). This only works for app.METHOD or router.METHOD. Potentially, it can also be the same as just calling next with no argument.
  4. ***With the string next('router')*** - Will skip all middleware functions attached to the specific router instance and pass control back out of the router instance. Basically, we exit the router and go back to the parent router, e.g. app (yes, the Express app is also just a router under the hood).
