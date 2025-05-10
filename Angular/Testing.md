# Configuring ***JEST*** framework for unit testing in Angular.

* https://medium.com/@megha.d.parmar2018/angular-unit-testing-with-jest-2023-2676faa2e564

### Removing ***Karma/Jasmine*** from Angular.

#### Step 1: Uninstall all karma jasmine packages.
* In `package.json` see all the packages with karma or jasmine.
* Uninstall them.
```json
// package.json
  "devDependencies": {
    "@angular-devkit/build-angular": "^18.2.15",
    "@angular/cli": "^18.2.15",
    "@angular/compiler-cli": "^18.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.2.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.5.2"
  }
```
cmd: `npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter`

#### Step 2: Remove test object from angular.json.
```json
// angular.json
// remove below block
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }
```

#### Step 3: Delete karma.conf.js file and test.ys file.

#### Step 4: Install required jest packages:
* `npm i --save-dev jest @types/jest jest-preset-angular`.

#### Step 5: Create `setup.jest.ts` file.
* Add this to it:
  * `import 'jest-preset-angular/setup-jest';`

#### Step 6: Update `tsconfig.spec.json` file.
```json
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest" // 1
    ],
    "esModuleInterop": true, // 2
    "emitDecoratorMetadata": true // 3
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

#### Step 7: To create `jest.config` file use below command:
`npx jest --init`
```
✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
```

#### Set preset and setupFilesAfterEnv value in `jest.config.ts` file which are mentioned on below:
```
Set preset and setupFilesAfterEnv value in jest.config.ts file which are mentioned on below:

preset: 'jest-preset-angular',
setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
```

#### Step 8: We are require to install ts-node for the TypeScript configuration files
`npm install --save-dev ts-node`

#### Step 9: Add jest configuration on package.json inside script tag
```
"test": "jest --verbose",
"test:coverage": "jest --coverage",
"test:watch": "jest --watch"
```