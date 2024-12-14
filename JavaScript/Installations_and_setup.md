# Install WebStrom (JS IDE) (not free)
### On Linux (ubuntu)
* on browser search ***snap webstorm***.
* https://snapcraft.io/webstorm
* Click on install.
* Copy and run command on yout terminal.

# Creating a node project from scratch
1. Create a folder with project name.
2. cd folder name.
3. `npm init` or `npm init -y`
    * This will create a basic package.json file with default values.
    * The package.json file is used to manage project dependencies and scripts.
4. Create `app.js file`
5. Write code in above file.
6. Run `node app.js` command to run project.

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
