# API
* Servers that are created for serving data for external use (in websites or apps) are often referred to as APIs or ‘Application Programming Interfaces’.

* APIs are accessed through **URLs**.
<br><br>

# XMLHttpRequest
* XMLHttpRequest (often abbreviated as XHR) is an API in JavaScript used to interact with servers.
* It allows you to send HTTP requests to a server and receive responses without reloading the entire page.

* This capability is foundational for AJAX (Asynchronous JavaScript and XML) operations.
```js
//Example: GET Request

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure it: GET-request for a specific URL
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

// Set up a callback function to handle the response
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // 4 means the request is complete
    if (xhr.status === 200) { // 200 means "OK"
      console.log("Response:", xhr.responseText); // Log the response
    } else {
      console.error("Error:", xhr.status, xhr.statusText);
    }
  }
};

// Send the request
xhr.send();
```
<br><br>

# Axios
* Axios is a popular JavaScript library used to make HTTP requests.
* It is built on top of `XMLHttpRequest` but provides a simpler and more modern interface.
 
* It ***supports promises***, making it ***easier to handle asynchronous operations***, and includes many useful features out of the box.

#### Key Features of Axios
  * ***Promise-Based***: Axios is built around Promises, making it easier to write asynchronous code.
  * ***Supports All HTTP Methods***: GET, POST, PUT, DELETE, etc.
  * ***Automatic JSON Parsing***: Axios automatically parses JSON responses and transforms request data.
  * ***Error Handling***: Simplified error handling using .catch().
  * ***Supports Interceptors***: Allows you to modify requests or responses before they are sent or received.
  * ***Cancelable Requests***: Supports request cancellation using CancelToken.

  * ***Browser and Node.js Support***: Works in both environments.

#### Example:
```js
// Import Axios (for Node.js or ES6 environments)
// const axios = require('axios');

// Perform a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log('Response Data:', response.data); // Response data
  })
  .catch((error) => {
    console.error('Error:', error.message); // Handle errors
  })
  .finally(() => {
    console.log('Request completed'); // Runs after the request, whether successful or not
  });
```
<br><br>

# Fetch
  * 

<br><br>

# Axios vs fetch
<table style="border-style: solid;">
<thead style="border-style: solid;">
<tr><td>Feature</td>
<td>Axios</td>
<td>fetch</td></tr>
</thead>
<tbody>
<tr><td>Automatic JSON Parsing</td>
<td>Yes</td>
<td>No</td></tr>
<tr><td>Error Handling</td>
<td>Automatically handles errors</td>
<td>Must manually handle</td></tr>
<tr><td>Interceptors</td>
<td>Yes</td>
<td>No</td></tr>
<tr><td>Timeout Support</td>
<td>Yes</td>
<td>No (requires extra code)</td></tr>
<tr><td>Browser Compatibility</td>
<td>Older browsers supported</td>
<td>Modern browsers only</td></tr>
</tbody>
</table>
<br><br>

# Axios vs fetch
<table style="border-style: solid;">
<thead style="border-style: solid;">
<tr><td>Use Axios If...
</td>
<td>Use Fetch If...	</td></tr>
</thead>
<tbody>
<tr><td>You need features like interceptors or cancel tokens.
</td>
<td>You want a lightweight, dependency-free solution.</td></tr>
<tr><td>You frequently make complex or repetitive API calls.</td>
<td>You’re making simple HTTP requests.	</td></tr>
<tr><td>You want automatic JSON parsing or extended error handling.</td>
<td>You prefer using the browser’s built-in API.</td></tr>
<tr><td>You work in environments where you need Node.js support.</td>
<td>You’re optimizing for bundle size.</td></tr>
</tbody>
</table>
<br><br>

# CORS
* For security, browsers block requests from one website to another if they don’t trust each other. This is called the same-origin policy.
* For example:
  * Allowed: A page from https://example.com requests data from https://example.com/api.

  * Blocked: A page from https://example.com requests data from https://anotherdomain.com/api.

* To protect users from malicious websites trying to access sensitive data from other websites without permission.

#### How CORS Works
  1. A browser makes a request to another domain (a "cross-origin request").
  2. The server receiving the request decides whether to allow it.

  3. If allowed, the server includes the appropriate CORS headers in its response. The browser checks these headers and decides whether to allow the web page to access the response.

* To allow sharing, the server includes a special note (header) in its response, like:
  * Access-Control-Allow-Origin: https://mywebsite.com (allows just your website).

  * Access-Control-Allow-Origin: * (allows any website).
