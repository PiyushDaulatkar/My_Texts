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
1st version > Angular JS. <br/>
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

>[!IMPORTANT]
> Above `main.ts` code is valid only for `standalone components` (i.e. `AppComponent`, `AnotherComponent` should be `standalone components`).  
> For Modules, bootstraping angular app is described later in notes.

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

# Binding template(HTML) with component
* Three ways:
1. <h3>String Interpolation</h3> 

   * Syntax: ***{{ public property from component }}***.

   * use in ***{{ }}***.
   * Used to directly display property values from the component inside the HTML.

2. <h3>Property binding & outputting computed values</h3>

   * Syntax: ***[property]="value"*** (where value is typically a property from the component).

   * The property to be set is wrapped in square brackets ***[ ]***.
3. <h3>Two way data binding.</h3>
```html
<div>
  <button>
    <!-- 1. String interpolation -->
    <span>{{ selectedUser.name }}</span>
    
    <!-- 2. Property binding -->
    <img [src]="'assets/users/' + selectedUser.avatar" [alt]="selectedUser.name"/> 
  
  </button>
</div>
```
<br/><br/>

#### Attribute Binding
* In Angular, when you use Property Binding, you're actually binding a property of a DOM element, ***not its HTML attribute***.
* For common properties like `src`, using property binding works perfectly because Angular can directly update the DOM property.
```html
<img [src]="someSrc">
```
* This binds the src property of the <img> DOM element to someSrc. Even though it looks like you're setting the src attribute, Angular is actually updating the DOM property.
* ***Sometimes, you need to set special attributes that don't have corresponding DOM properties. For example, ARIA attributes (used for accessibility) like aria-valuenow or aria-valuemax don’t have matching properties in the DOM.***

* If you try to use property binding for them, Angular won't find a matching DOM property, and it won't work as expected.

* Solution: `attr`. Binding
* Angular gives you a special way to bind attributes directly by using the attr. prefix. This tells Angular:
  * ***"Hey, I want to bind an HTML attribute, not a DOM property."***
```html
<div 
  [attr.aria-valuenow]="currentVal" 
  [attr.aria-valuemax]="maxVal">
</div>
```
<br/><br/>

# Using ***getters*** for computed values

* Use `get` keyword.
* Benifit: no need to call like method(imagePath<s>()</s>)
```ts
get imagePath() {
  return this.user.image;
}
```
```html
<img [src]="imagePath">
```
<br/><br/>

# Listening to Events with ***Event binding***
* In Angular, event binding allows you to listen for and respond to user events (like clicks, input changes, etc.) in your component's template using ***parentheses ()***.
```html
 <input (input)="onInputChange($event)" (blur)="onInputBlur()">
```
```ts
onInputChange(event: Event) {
    console.log('Input changed');
  }

  onInputBlur() {
    console.log('Input blur');
  }
```

> [!NOTE]
> Angular convention
> Those methods that are meant to execute on some event start with `on` as prefix (to make it clear that they are executed on event).

<br/><br/>

# UI state
* The ***current data or values used by your application*** that drive the rendering and behavior of the user interface (UI).

* Two approaches of updating state:
  1. Zone.js & change detection
  2. Signals
<br/><br/>

# 1. `Zone.js` in Angular
* ***It allows Angular to automatically detect and trigger change detection whenever an asynchronous event, such as a user interaction, HTTP request, or timer, completes***.

* Angular's change detection mechanism needs to know when to update the view. Instead of requiring developers to manually inform Angular about changes, Zone.js patches asynchronous APIs (like setTimeout, Promise, addEventListener, etc.) to monitor when these tasks start and finish. This way, Angular can automatically detect changes in the application state and update the DOM accordingly.
* ***Zone.js, zones(groups) components and whenever a state is updated it checks all component if they are affected***.
<br/><br/>

# 2. ***Signals*** in Angular (Introduced in Angular 16)
* A signal is an object that stores value.
* Signals are ***reactive***: Angular automatically tracks changes and updates only the affected parts of the UI.
```ts
// import signal function.
import { signal } from '@angular/core';

const x = signal(initialValue); // Optional initial value
```
* Changing signal values:
```ts
x.set(newValue);               // Directly sets a new value
x.update(value => value + 1); // Updates based on the current value
```
* To read a signal's value, call it like a function:
```ts
x();
```
* ***How Angular Tracks Signals***:
  *  Where we read the value of signal that place is subscribed/register, and when signal is updated that place is reevaluated, rerendered and updated on the UI.
  * When you read a signal's value in a component or template (e.g., mySignal()), Angular registers a subscription to the signal.

  * If the signal's value changes, Angular reevaluates and updates only the places where the value is used.
* Angular manages subscription to the signal to get notified about the value change.
<table style="border-style: solid;">
<thead style="border-style: solid;">
<tr><td>Aspect</td><td>Zone.js</td><td>Signals</td></tr>
</thead><tboby>
<tr><td>Change Detection	</td><td>Checks all components for changes.</td><td>Updates only the places where signals are used.</td></tr>
<tr><td>Performance</td>
<td>May trigger unnecessary checks.</td>
<td>More efficient, updates specific parts of the UI.</td></tr>
<tr><td>Explicit Reactivity</td>
<td>Zone.js</td>
<td>Signals</td></tr>
<tr><td>Aspect</td>
<td>Implicit, tracked via zones.</td>
<td>Explicit, based on signal usage.</td></tr>
<tr><td></td><td></td>
<td>This eliminates the need for Zone.js to perform a global change detection cycle.</td></tr></tbody></table>
<br/><br/>

### Using signal for ***computed(calculated) values***
```ts
// import computed function.
import { signal, computed } from '@angular/core';
```
* It takes a function as an argument.
* It returns signal object.
```ts
x = signal(10); // Base signal
y = computed(() => this.x() * 2); // Computed signal
```
<br/><br/>

# ***Component Inputs*** (passing data from parent component to child component)
* You can pass data to component as ***attributes***.
* `@Input` decorator is used to define properties that a parent component can bind to when using the child component.
```ts
// example
<img [src]="imagePath">
```
* In the component.ts file which will receive this input, add ***@Input() decorator***.
```ts
@Input() x;

// in ts we need to specify type
@Input() x: string;

// also we need to initalize it
// but with `!` we can tell ts, that x will get initialized later some point in time or initialize in constructor.
@Input() x!: string;
```
### Static binding vs dynamic binding
<table border="1" style="border-collapse: collapse; text-align: left;">
  <thead>
    <tr>
      <th>Aspect</th>
      <th>&lt;app-user x="i"&gt;</th>
      <th>&lt;app-user [x]="i"&gt;</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Syntax</td>
      <td><s>without []<s></td>
      <td>With []</td>
    </tr>
    <tr>
      <td>Type of Value</td>
      <td>Static string "i"</td>
      <td>Dynamic value from a variable <code>i</code></td>
    </tr>
    <tr>
      <td>Use Case</td>
      <td>When the value is fixed or constant.</td>
      <td>When the value comes from a variable or expression.</td>
    </tr>
  </tbody>
</table>

### @Input congifurations
```ts
  // This enforces that this attribute should compulsary to component.
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
```
```html
 <li>
    <!-- Here both atrributes should be compulsarily be passed -->
    <app-user [avatar]="users[0].avatar" [name]="users[0].name"/>
</li>
```
<br/><br/>

# To accept input as `Signal`
* Import `input` function.
* `input` > special function vs `Input` > decorator.
```ts
x = input();
x = input('default value');
x = input<string>();
x = input.required<string>(); // with required you cannot set default value.
```
* To make input as signal, ***we dont neccesarliy need to pass it signal object***.

* input signals are readonly, i.e. you can notcall set function on them and change there values.
* There values can only be changed if you pass different value to component form here ex:
```html
<app-user [x]="users[0].avatar" [y]="users[0].name"/>

<!-- OR -->

 <app-user [x]="users[1].avatar" [y]="users[1].name"/>
```
<br/><br/>

# ***Component Outputs*** (passing data from child component to parent component)
* You can send data from a component to its parent using `events`.
* The `@Output` decorator is used ***to define properties*** that a child component can ***emit as events*** for the parent component to listen to.
1. Create an Output Event in the Child Component:
   * Use the `@Output` decorator to define an event and an `EventEmitter` instance.
```ts
//child.ts
@Output() select = new EventEmitter();
```
1. Emit the value where & when you want:
```ts
//child.ts
this.select.emit(this.id);
```
1. Listen to the Emitted Value in the Parent Component:
```html
<!-- parent.html -->
<app-user (select)="onSelectUser($event)"/>
```
```ts
//parent.ts
onSelectUser(id: string) {
  console.log('selected user id :>> ', id);
}
```
* The `@Output` decorator defines a custom event that the child component can emit to its parent.
* The `EventEmitter` instance is used to trigger the event and pass data (e.g., `this.select.emit(this.id)`).
* The parent listens to the child component's event in its template using `(eventName)="handler($event)"`.

* ***The `$event` variable contains the value emitted by the child***.
* `$event` is availabe with both custom events(select) and built-in DOM events(click).
<br/><br/>

# output function
* Alternative of `@Output`.
* import `output` function.
```ts
//select = output();
select = output<string>();

onSelectUser() {
  this.select.emit(this.id);
}
```
* Here is implicitly creates `EventEmitter`.
* The `output` function is a simpler, more streamlined way to create event emitters in Angular, introduced in Angular 16. It implicitly creates an `EventEmitter` and reduces boilerplate.

* Benefits over @Output of output():
    1. Reduces syntax.
    2. if you use input() instead of <s>@Input</s> then it will look good if you dont use <s>@Output</s>.
    3. Forces ***Type Safety*** of emitted values.

* Forces ***Type Safety*** of emitted values.
```ts
// 1. output()
select = output<string>();

onSelectUser() {
  // emit function will only accept string value and will give error for other types.
  this.select.emit(this.id);
}


// 2. @Output
@Output() select = new EventEmitter();

onSelectUser() {
  // emit function will accept any type of value.
  this.select.emit(this.id);
}

// 3. To make @Output Typesafe
    // EventEmitter<string>()
@Output() select = new EventEmitter<string>();

onSelectUser() {
  // Now, emit function will only accept string value and will give error for other types.
  this.select.emit(this.id);
}
```
<br/><br/>

# Outputting list contents
### 1. @for
* From angular 17.
```html
@for (user of users; track user.id) {
      <li>
        <app-user
          [user]="user"
          (select)="onSelectUser($event)"
        />
      </li>
    }
```
* ***`track`*** (Angular’s trackBy mechanism)
  * Used with structural directives like `*ngFor` to ***optimize the rendering of lists*** by uniquely identifying each item in the list.

  * This is especially helpful when the list changes dynamically (e.g., adding, removing, or reordering items).
  * Without `track`, updating the list causes Angular to re-render all items in the list. However, with `track`, only the new or changed items are rendered, improving performance.
<br/><br/>

### 2. *ngFor (structural directive)
1. `import { NgFor } from '@angular/common';`
2. `imports: [NgFor],`

```html
<li *ngFor="let user of users">
      <app-user [user]="user" (select)="onSelectUser($event)" />
    </li>
```

# Outputting condtional content
### 1. @if
* From angular 17.
```html
@if (selectedUser) {
    <app-tasks [name]="selectedUser ? selectedUser.name : ''"/>
   } @else {
    <p id="fallback">Select the user to see their task!</p>
   }
   <!-- you can also use: -->
   <!-- @else if () {} -->
```
<br/><br/>

### 2. *ngIf (structural directive)
* `import { NgIf } from '@angular/common';`
* `imports: [NgIf],`
```html
<app-tasks *ngIf="selectedUser; else fallback" [name]="selectedUser!.name" />
  <ng-template #fallback>
    <p id="fallback">Select the user to see their task!</p>
  </ng-template>
```
<br/><br/>

# Conditional class binding
```html
<button [class.active]="selected">button</button>
```
* `[class.active]`: This binds the active class to the button element conditionally.
* `selected`: This is a boolean property in the component's TypeScript class that determines whether the active class should be applied.
<br/><br/>

# Two-way-binding using directives (property + eventbinding)
* Combination of property and eventbinding.
### `ngModel`
* Used with form related elements(input, text area) to get access to the value entered by the user into those elements.
* `[(ngModel)]`: property[] + eventbinding().
1. Register the directive.
```ts
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
})
export class NewComp {
    enteredTitle = '';
}
```
```html
<input type="text" id="title" name="title" [(ngModel)]="enteredTitle"/>
```
### Two way databinding using signals
```ts
import { signal } from '@angular/core';

export class NewComp {
    enteredTitle = signal('');
}
```
<br/><br/>

# FormsModule
* Form module is used to take control of `<form>` element.
* Hence it can be use to handle `form` submission on client side.
* To be notified when form submission occurs, `FormsModule` gives a special event that will be emitted i.e. `ngSubmit`.
* Now you can run your own code in response to submit event.

### `ngSubmit` event
* To be notified when form submission occurs.

### `ng-content` tag
* Used for ***content projection***.
* It allows you to project content from a parent component into a child component(content in between of child elements tag).
```html
<!-- parent.html -->
<app-child>
  <p>This is content.</p>
  <button>Click Me</button>
</app-child>
```
```html
<!-- child.html -->
<div>
  <!-- <ng-content></ng-content> OR-->
   <ng-content />
</div>
```
<br/><br/>

# Pipes
* Output transformers.
* Things that transform output in templates.
* Ex: if you want to show date in proper format.
```ts
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
})
```
```html
<time>{{ task.date | date }}</time>

<!-- o/p without pipe: 15-06-24 -->
<!-- o/p with pipe: Jun 15, 2024 -->
```
* We can change formatting by reading pipes documentation and adding extra properties.
```html
<time>{{ task.dueDate | date:'full' }}</time>
<!-- o/p: Wednesday, December 31, 2025 at 12:00:00 AM GMT+05:30 -->
```
<br/><br/>

# Service
* Performs some operation and/or manages data.
<br/><br/>

# Dependency injection
* `Service` is a `class` and `class` is a blueprint in order to use that `service` in other `class` we need `object` of it.

# Inappropriate approach
```ts
import {TasksService} from './task.service'

export class TasksComponent {
  private taskService = new TasksService();

  getTasks() {
    return this.taskService.getTasks();
  }
}
```
* ***Problem***:
  * If we want to use service in another components then we need to create seperate independent instance(object) of the service in that component.

  * We would not be sharing one common object. Due to this if we change data manage by that service in one component then those changes will not relflect in another component.

* ***Solution***: DI.
### Appropriate approach
* Use ***dependency injection***.
* Here we dont create instance on our own, but instead tell angular that we need such an instance and angular will create it.

* So angular will create one instance that we can use everywhere to operate on same data.

### 1. You need to register the service(class) as something injectable with Angular by `@Injectable()` decorator. So that Angular knows that it can be injected.
```ts
@Injectable({ providedIn: 'root' })
class TasksService() {
}
```
#### DI way 1: constructor
* You tell `Angular` which type of value you need and `Angular` creates it and ***provides it as an argument***.
```ts
  // 1. long cut:
  private taskService: TasksService;

  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }

///////////////////////////////////////////////////

  // 2. short cut (by add private or public keyword)
  // This will automatically create property of same name.
  constructor(private taskService: TasksService) {
  }
```
#### DI way 2: inject() function
```ts
import { inject } from '@angular/core';

export class NewTaskComponent {
  private taskService = inject(TasksService);
}
```
<br/><br/>

# What is Angular `modules`?
* Angular modules make component (& more) available to each other.

* Famous on older versions of angular.
* Angular `modules`: here you ***don't specify at component level*** which components that component uses in its template.
* `Standalone component`: you specify at component level which components that component uses in its template.
<br><br>

### Creating module
* Create `root app module` next `root app component`.
* Add `@NgModule` over class.
* In declarations you declare & register `components` and `directives` that need to work together.

* `Standalone components` ***cannot be added*** in `NgModule declarations`.
```ts
import { NgModule } from '@angular/core'

@NgModule({
  declarations: []
})
export class AppModule {}
```

### main.ts
* Bootstraping Angular application with `module`.
```ts
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule);
```
* Also in AppModule specify root components you wanna set for your application in `bootstrap` array.
```ts
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
<br/><br/>

# Using `standalone components` in `Module`
* Decalare standalone components in `imports` array of `@NgModule`.
```ts
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppModule {}
```
>[!NOTE]
> `Imports` array is used for enabling standalone components.
>
> And ***also for including other modules***.
<br/><br/>

### BrowserModule
* Module provided by Angular that provides collection of things that are needed by every Angular application in order to run correctly.

>[!TIP]
> You can also add `Modules` to `standalone components`.
>
> e.x.: `imports: [FormsModule]`.

<br/><br/>

### Shared modules
* Break your application into multiple smaller modules and then combine them as needed.

* `exports`: In this array, we define modules that are not only required internally by the current module, but also those that should be made available to any other module that imports this module.
```ts
@NgModule({
  declarations: [CardComponent], // Declare components within the module
  exports: [CardComponent], // Export components to make them available to other modules that import this shared module
})
export class SharedModule {}
```
* When a module imports another module, it will only have access to the components, directives, and pipes that are explicitly listed in the exports array of the imported module.

* If a module needs something it must decalre or import it itself, it can't get it from any parent module that might be using this module.
* `BrowserModule` is meant to be imported in root module, for other modules you can import `CommonModule`.
<br/><br/>

>[!IMPORTANT]
> ### Public folder
> There’s no need to prepend the public/ directory when referencing assets. For example, instead of using:
>
> <s>img src="public/image.png"</s>
> 
> `img src="image.png"`
> 
> Angular automatically serves files from the src/assets or public folder, so you don’t need to specify the folder name in the path.

<br/><br/>

>[!NOTE]
>Value from form input will always be string.
<br/><br/>

>[!TIP]
> ## asReadonly() function
> To get ***read-only version*** of a `signal`.
>
> `results = this.investmentService.resultsData.asReadonly();`

<br/><br/>

# ***Source Maps*** for Debugging Logical Errors.
* The ***Sources tab*** allows you to analyze your Angular (TypeScript) code at runtime.
* You can add breakpoints.

* Your TypeScript code doesn't run directly in the browser. Instead, the code you write is `compiled` by `Angular CLI`, and it's the `compiled JavaScript` that is executed in the browser.
* `Source maps` are generated by `Angular CLI` during the build process. They allow the browser to map the executing code back to the original TypeScript source.
* In the Sources tab of Developer Tools, you can view the original TypeScript code (via source maps).
* To access this, go to Developer Tools > Sources.
<br/><br/>


# Splitting up components into smaller components
* Promotes S.O.C: Seperation of concerns.
* You can reuse that smaller component.

* Each component should only perform signle task.
<br/><br/>
<br/><br/>

# [***Component Selector***](https://angular.dev/guide/components/selectors)
There are two types of component selectors in Angular:
1. ***Element selector***.

2. ***Attribute selector***.
3. ***Class selector***.

## 1. Element selector
* An element selector ***defines a custom HTML element***, such as `<app-button>`, which Angular treats as a `component`.
```ts
@Component{
  selector: 'app-button',
}
```
```html
<app-button>
```
<br/><br/>

## 2. Attribute selector
* An attribute selector ***is used to apply a component to an element*** that has a specific attribute.

* When you add this attribute to an element, the component becomes active and would effectively replace it or take control of it.
```ts
@Component{
  selector: '[appButton]',
  // selector: 'button[appButton]',
  // selector: 'button[appButton], a[appButton]',
}
```
<br/><br/>

>[!IMPORTANT]
> We need to import our component in that component where we are using it.
> 
> Otherwise it will fail silently. 

<br/><br/>

## 3. Class selector
```ts
@Component{
  selector: '.button',
  //selector: 'button.button',
}
```
<br/><br/>

### Example of DOM Structure with Element Selector vs Attribute Selector
1. Using Element Selector:
   * Unnecessary wrapping over button element.
```html
<!-- HTML -->
<app-button>...</app-button>

<!-- DOM -->
 <app-button>
  <button>...</button>
</app-button>
```
2. Using Attribute Selector:
```html
<!-- HTML -->
<button appButton>...</button>


<!-- DOM -->
<button>...</button>
```
<br/><br/>

<table border="1">
  <tr>
  <th>Syntax</th>
    <th>selector: '[appButton]'</th>
    <th>selector: 'button[appButton]'</th>
    <th>selector: '.button'</th>
    <th>selector: 'button.button'</th>
  </tr>
  <tr>
    <th>Targets</th>
    <td>This selector applies to any element that has the appButton attribute, regardless of its tag type. It doesn't matter whether the element is a &lt;button&gt;, &lt;div&gt;, &lt;input&gt;, or any other HTML element. As long as it has the appButton attribute, the component will control it.</td>
    <td>This selector targets only &lt;button&gt; elements that also have the appButton attribute. It’s more specific than the previous one because it requires the element to be a &lt;button&lt; in addition to having the appButton attribute.</td>
    <td>It applies to any element with the button class, regardless of the element type.</td>
    <td>This selector targets only &lt;button&lt; elements that have the button class. It’s specific to the &lt;button&lt; tag and requires the element to have a particular class.</td>
  </tr>
  <tr>
    <th>Example</th>
    <td>
      &lt;button appButton&gt;Click me!&lt;/button&gt;<br/>
      &lt;input appButton value="Click me!" /&gt;<br/>
      &lt;div appButton&gt;Some text&lt;/div&gt;
    </td>
    <td>
      &lt;button appButton&gt;Click me!&lt;/button&gt;
    </td>
    <td> &lt;button class="button"&gt;Click me!&lt;/button&gt;<br/>
      <br/>
      &lt;div class="button"&gt;Click me!&lt;/div&gt;</td>
    <td>
      &lt;button class="button"&gt;Click me!&lt;/button&gt;
    </td>
  </tr>
</table>

<br/><br/>

# Supporting Content Projection with Multiple Slots
* In this scenario, the button component has a piece of content (the `Login` text) and an additional content element (the `→` arrow).

* The idea is to use content projection to insert these pieces of content into different slots in the component’s template.

### `select` attribute
* The `select` attribute in the `<ng-content>` element in Angular allows for ***content projection with specific conditions***.
* ***You can target specific elements from the parent template that match a CSS selector, and project them into specific slots inside the child component***.

```html
<button appButton>
    Login
  <span class="icon">→</span>
</button>
```
```html
<span>
  <ng-content />
</span>
 <ng-content select=".icon"/>
```
<br/><br/>

### `ngProjectAs`
```html
<button appButton>
    Login
  <span ngProjectAs="icon">→</span>
</button>
```
```html
<span>
  <ng-content />
</span>
 <ng-content select=".icon"/>
```
<br/><br/>

### Defining Fallbacks if Content Projection failed
* The content inside the `<ng-content>` tag can serve as a `fallback` if no matching content is found based on the specified `select` attribute.
```html
<ng-content select="icon">»</ng-content>
```




<br/><br/>
# What is a <span style=color:Green>***Directive***</span> in Angular?
* To add extra functionality to elements.
* Similar to Components(component have templates(html) but directives dont).
* Components are directives with template.
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
