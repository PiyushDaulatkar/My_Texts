# What is angular?
* Angular is a frontend JS framework.

* It helps building interactive, modern web user interfaces.
* It's also a collection of tools and features (CLI, debugging tools, IDE plugin). 
<br><br>

# Why to use angular?
* ***Simplifies the process*** of building complex, interactive web user interfaces.

1. With angular ***you write declarative code***.
   * In simple terms, declarative code means you tell Angular what you want, and Angular takes care of how to do it.
   * Example: below you simply declare that the `<div>` should be shown if `isVisible` is true.
   * ***Angular takes care of updating the DOM when `isVisible` changes***.
```html
<div *ngIf="isVisible">Hello, World!</div>
```
2. Seperation of concerns via components.

3. Uses some OOP concepts & priciples.

4. Use Typescript.
<br><br>

> [!NOTE]
> Angular is stable framework.
> It is evolving framework.
> Has ***backward compatibility***.

<br><br>

# History
1st version > Angualar JS. <br/>
2nd version > Angular 2 (released 2016).<br/>
.<br/>
.<br/>
.<br/>
Angular 14 (introduces standalone component).<br/>
Angular 16 (introduces signals).<br/>
<br/>

# Angular CLI
* The Angular CLI is a command-line interface tool which allows you to scaffold, develop, test, deploy, and maintain Angular applications directly from a command shell.

* To convert/compile angular code into code that runs into browser.
* To run angular project you need node and npm installed.
<br/><br/>

# How Angular Starts?

1. **Browser Loads `index.html` File**  
   - The `index.html` file is the main entry point that the browser initially loads when the application starts.

2. **Execution of `main.ts` File**  
   - The first code executed is in the `main.ts` file, which bootstraps the Angular application.

3. **Automatic Injection of Script Files**  
   - In `index.html`, you won’t see direct references to other `.js` files (like `main.ts`).  
   - However, when the app runs in the browser, those files are injected automatically by Angular CLI (in `<script>` tags) after building and running the application.
<br/><br/>

# Components
### Types of components based on how they are defined or used in Angular:
1. ***Module-Based Components***
   * Traditional components that are declared within an NgModule (e.g., in AppModule or a feature module).
   * These components rely on Angular’s module system to be used in other parts of the application.

   * Imported via modules rather than directly.
```ts
// Declaring a component in a module
@NgModule({
  declarations: [HelloComponent],
  imports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
2. ***Standalone Components***
   * Standalone components are self-contained and do not need to be declared in any NgModule.
   * They are directly imported and used wherever needed.

   * This simplifies module management and improves tree-shaking (removing unused code).
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello, Angular!</h1>`,
  standalone: true
})
export class HelloComponent {}
```

# index.html
```html
<body>
  <app-root></app-root><!-- This is important -->
</body>
</html>
```
* The `<app-root>` tag is where Angular loads the root component of the application.

* ***But how does Angular know what `<app-root>` refers to?***
<br/><br/>

# main.ts
```ts
1. import { bootstrapApplication } from '@angular/platform-browser';
2. import { appConfig } from './app/app.config';
3. import { AppComponent } from './app/app.component';

4. bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```
* In 3rd line we import `appcomponent`, and in 4th line we tell angular to load it in `index.html`.
* In line 3, we import the AppComponent, which contains the definition for` <app-root>`.
In line 4, we tell Angular to bootstrap (initialize) the `AppComponent`, which is then rendered inside `<app-root>` in `index.html`.
<br/><br/>

### What if we want to display another component along with or instead of `AppComponent`?
* You can import(line 4) the desired component into `main.ts` and bootstrap it(line 6).
```ts
1. import { bootstrapApplication } from '@angular/platform-browser';
2. import { appConfig } from './app/app.config';
3. import { AppComponent } from './app/app.component';
4. import { AnotherComponent } from './app/another.component';

5. bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
6. bootstrapApplication(AnotherComponent, appConfig);
```
<br/><br/>

# Linking HTML Files or Markup in Standalone Components (Angular)
* using the ***`templateUrl`*** or ***`template`*** properties.
```ts
// 1: Linking an External HTML File.
@Component({
  standalone: true,
  templateUrl: './hello.component.html',
})

// 2: Using Inline HTML Template.
@Component({
  standalone: true,
  template: '<h1>Hello world</h1>',
})
```
<br/><br/>

# Linking CSS Files or styles in Standalone Components (Angular)
* using the ***`styles`*** or ***`styleUrl`*** or ***`styleUrls`*** properties.
```ts
// 1: Using Inline CSS style.
@Component({
  standalone: true,
  styles: [ 'h1 { color: blue; }' ]
})

// 2: Linking an External CSS File.
@Component({
  standalone: true,
  styleUrl: './single-style.component.css'
})

// 3: Linking multiples External CSS Files.
@Component({
  standalone: true,
  styleUrls: ['./multi-style1.component.css', './multi-style2.component.css']
})
```
<br/><br/>

# styles.css
* `styles.css` is a global stylesheet in an Angular project.

* It is automatically included by Angular CLI and applies styles globally across all components in the application unless overridden by component-specific styles.
<br/><br/>









<br/><br/>

# What is module?
<br><br>

# What is a <span style=color:Pink>***Directive***</span> in Angular?
* In Angular, a ***directive*** is a <span style=color:red>***class***</span> that allows you to <span style=color:gold>***manipulate the DOM (Document Object Model) or change the behavior of elements***</span> in the user interface (UI).

* The directive class uses a special decorator, <span style=color:Pink>***@Directive***</span>, to tell Angular that it’s a directive.

## Types of Directives in Angular
There are three main types of directives in Angular:

1. Structural Directives (like *ngIf, *ngFor)
2. Attribute Directives (like ngClass, ngStyle)
3. Component Directives (which are also a special kind of directive)

### 1. ***Structural*** Directives
* These directives <span style=color:gold>***change the***</span> <span style=color:red>***structure***</span> <span style=color:gold>***of the DOM***</span>.

* They can add or remove elements from the DOM based on certain conditions.

* Example: *ngIf, *ngFor
```html
<div *ngIf="isVisible">This content is visible when 'isVisible' is true.</div>
```
<hr><br>

### 2. Attribute Directives
* These directives <span style=color:gold>***change the***</span> <span style=color:red>***appearance or behavior***</span> <span style=color:gold>***of an existing DOM element***</span>. Unlike structural directives, they don't add or remove elements from the DOM, but instead modify the element they are attached to.

* Example: ngClass, ngStyle, mat-card-title

```html
<div [ngClass]="{ 'highlight': isHighlighted }">This div is highlighted if 'isHighlighted' is true.</div>

<div [ngStyle]="{ 'background-color': backgroundColor }">This div has a dynamic background color.</div>

<div mat-card-title>Card Title</div>
```
<hr><br>

### 3. Component Directives
* Technically, components in Angular are also a type of directive. Components are the most common kind of directive you'll work with. They include both the structure (HTML) and behavior (logic) for a part of your app.

* Example: <app-header>, <app-footer>
<hr><br>

### You can create your custom directive to manipulate DOM as per your requirement.
<hr>

#### Common Use Cases for Directives
  * Conditionally Render DOM Elements:

  * Apply Styles Dynamically:
  * Event Handling:
  * Create Reusable UI Elements:
  * Material Design Elements:
<hr><br><br>

# What is <span style=color:Pink>***providers***</span> in Angular?

<hr><br><br>

# What is <span style=color:Pink>***change detection***</span> in Angular?

* In Angular, change detection is the mechanism by which Angular <span style=color:gold>***determines when to update the view***</span> in response to ***changes in the application state*** (e.g., changes to component properties, events, or external data).
* The ChangeDetectionStrategy determines how Angular ***checks for these changes*** and updates the view accordingly.

* By default, Angular uses the `ChangeDetectionStrategy.Default` strategy, which checks the entire component tree for changes every time an event is triggered (such as a click or user input).

2. `ChangeDetectionStrategy.OnPush`
   * The OnPush change detection strategy is a performance optimization technique that tells Angular to only check for changes ***when certain conditions are met***.
   * When is it checked?
     * When one of its ***@Input() properties changes***.
     * When an ***event is triggered*** from the component (such as an emitted event).
     * If ***markForCheck()*** is called.

```ts
//syntax
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```
