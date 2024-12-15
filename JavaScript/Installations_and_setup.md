# Install WebStrom (JS IDE) (not free)
### On Linux (ubuntu)
* on browser search ***snap webstorm***.
* https://snapcraft.io/webstorm
* Click on install.
* Copy and run command on yout terminal.
<br></br>
<br></br>

# Creating a node project from scratch
1. Create a folder with project name.
2. cd folder name.
3. `npm init` or `npm init -y`
    * This will create a basic package.json file with default values.
    * The package.json file is used to manage project dependencies and scripts.
4. Create `app.js file`
5. Write code in above file.
6. Run `node app.js` command to run project.
<br></br>
<br></br>

# Scripts
* In package.json
```json
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
* use `npm run` <key from script> to run the command from scripts.
* Ex:
  * npm run start.
  * npm run test.
<br></br>
<br></br>

# Webpack
* Install below two packages:
  * `npm install --save-dev webpack webpack-cli`.
  * OR `npm install -D webpack webpack-cli`.

  * `--save-dev` OR `-D` refers to record our these packages as ***development dependencies***.

* To bundle owr code, we’ll need a ***Webpack configuration file*** in ***root***, which will contain all the details we need for bundling, such as the ***entry point***, the ***output destination***, and anything like plugins and loaders.
* In root directory of project: "`touch webpack.config.js`" or "`touch webpack.config.cjs`".
```js
// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
// this file uses CommonJS (CJS) syntax instead of ESM. That’s because this file (and Webpack itself) runs in NodeJS and not the browser. By default, NodeJS uses CJS syntax.
```
* now run Webpack
  * `npx webpack`

* `node dist/main.js`
<br></br>

## Handling HTML
* Install ***HtmlWebpackPlugin***
* `npm install --save-dev html-webpack-plugin`.
* This plugin automatically injects the output JavaScript bundle(s) into the generated HTML file as a `<script>` tag. No need to add script tag in html.
```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
```
<br></br>

## Loading CSS
* Install css-loader & style-loader.
* `npm install --save-dev style-loader css-loader`.
* ***css-loader*** will read any CSS files we import in a JavaScript file and store the result in a string.

* ***style-loader*** then takes that string and actually adds the JavaScript code that will apply those styles to the page. 
```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```
<br></br>

# Webpack dev server
* `npm install --save-dev webpack-dev-server
`.
* `npx webpack serve`.
* By this we need not to run npx webpack after every change.
<br></br>
<br></br>
