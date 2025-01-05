# What is Node?
* As an ***asynchronous*** <span style=color:blue>***event driven***</span> <span style=color:green>***JavaScript runtime***</span>, Node is designed to build scalable network applications.

* Node has some added functionality that is not found in browser-based JavaScript, such as the ability to read and write local files, create http connections and listen to network requests.
<br><brr>

# Debugging node
* ***VS Code Debugger***:
  * Best for everyday debugging, especially when you're working directly in VS Code. It provides a seamless experience with built-in breakpoints and variable inspection.

* ***Chrome DevTools***:
  * Useful when you need advanced DevTools features like performance profiling, memory snapshots, or if you're already familiar with browser debugging.
<br><br>

# Environment Variables
* When you run your code, your code runs in a specific environment.Run your code on a different machine? Different environment.

* Environment variables are just variables that have environment-specific values.
* USECASE: 
  * Provide different values for different environments, such as your machine during development and a website host when deployed, without having to modify the source code.

  * Store secrets, such as database URLs and credentials, or API keys.
* You can store environment variable values in a file that you add to your `.gitignore`, preventing the contents of that file from being exposed when changes are pushed.

### Loading environment variables
1. Defining the environment variables with their values directly in the command to run your code.
```sh
NODE_ENV=dev VIDEO_URL="https://www.youtube.com/watch?v=X2CYWg9-2N0" node index.js
```
<br>

2. ***export***
   * You can use the shell command export, which will save environment variables and their values to the ***current shell session***.
```sh
export NODE_ENV=dev VIDEO_URL="https://www.youtube.com/watch?v=X2CYWg9-2N0"
```
* The above command will set the two environment variables in the current shell environment only, meaning if you were to open a new shell, it would not have access to those environment variables since it’s a new environment.

> [!NOTE]
> `printenv`: To view all environment variables in the current shell.

<br>

3. ***dotenv***
* After installing the npm package, you can create a file called .env in the root of your project that will contain all of your environment variables in the format NAME="VALUE".
```sh
NODE_ENV=dev
VIDEO_URL="https://www.youtube.com/watch?v=X2CYWg9-2N0"
```
* This file must be added to your `.gitignore` file to keep secrets safe from being published.

* import dotenv into your app (as early as possible in the code) so it can load your variables.
```js
require("dotenv").config();
```
<br><br>

### Accessing environment variables
* Environment variables are accessed via Node’s built-in process object, more specifically its env property.
```js
//access
if (process.env.NODE_ENV === "dev") {
    // do production-specific stuff
}

// don't want to ruin the surprise by hardcoding the URL!
// it might even change every few days!
redirectUserToSuperSecretVideo(process.env.VIDEO_URL);
```
<br>

> [!TIP]
> Do also note that environment variables will always be strings, so you must convert if you want to use any as a number or boolean, for example.


