# Commands
`ng` cmds will be available after angular cli is installed. 
<br/><br/>

### To create new angular project.
* `ng new <project-name>`
* project name convention:
  * lower case
  * `-` seperated.
### To start application.
* `npm start` or `ng serve`
### To create component.
* `ng generate component comp`
* or `ng g c comp`
* or `ng g c folder/comp --skip-tests`.
### To create directive.
* `ng generate directive auth/auth`
* or `ng g d auth/auth`
* or `ng g d auth/auth --skip-tests`.
### To create service.
* `ng generate service log/logging`
* or `ng g s logging`
* or `ng g s logging --skip-tests`.
### To create pipe.
* `ng generate pipe pipes/sort`
* or `ng g p sort`
* or `ng g p sort --skip-tests`.
<br/><br/>


# VS code extensions
* Angular Language Service (by angular.dev).
* Angular Essentials (Version 18) (by John Papa).
<br/><br/>

# Angular devtools
* It is Browser extension.
* With this installed you can get new tab in dev tools called `Angular` in developer tools.

<br/><br/>

# Different approaches

### Two way data binding
1. input & output combination (decorators or signals).
2. ngModel [(ngModel)].
3. Template Variables.
4. Custom Two-way data binding with input & output combination (decorators or signals) [( )].
5. `model()` function [( )].
   * Angular 17.2+.
<br/><br/>

### Different ways of accesing host element.
1. Dependency injection:
```ts
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  
  const address = this.hostElementRef.nativeElement.href;
```

2. Taking from $event: 
```ts
  onClick(event: MouseEvent) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=my';
      return;
  }
```

<br/><br/>

# host
* host.
* hostDirectives.