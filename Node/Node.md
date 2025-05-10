# What is Node.js?
* Node.js is a javascript ***runtime***.
* It allows you to run the javascript code on the server (anywhere else other than browser).

* Node.js uses ***V8 engine***.
* Node.js ***adds certain extensions*** to V8 engine like ***accessing local filesystem***, which not supported in browser v8 engine.
* Some features are also taken away from V8 in node like accessing DOM elements as in server there is no html.

<br/>

## V8 engine
* ***Compiles*** javascript code to ***machine code***.

* V8 engine is written in C++ language.

<br/>

## 2 Ways of executing node code
1. REPL (Read Eval Print Loop).
   * to use it just type `node` in terminal.

2. Execute files.
   * Like `node app.js`.

<br/>

## When you start a server in node:
1. The `http.createServer()` method creates an HTTP server and registers an `event listener` with the Node.js `event loop`.
2. As long as there are `active event listeners` registered, the Node.js `process` will continue running.

3. To stop the Node.js process programmatically, you need to ***remove or close all active event listeners*** (e.g., by calling server.close() or clearing intervals/timeouts).

<br/>

## NPM
* node package manager tool.
* Gets installed with node.

* Use:
  * To install 3rd party packages.
  * To run custom scripts.

<br/>

## Middleware

* Request `Body parsing middleware` should be placed before all `route handling middleware`.
