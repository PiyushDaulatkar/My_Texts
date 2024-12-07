What is module?

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
