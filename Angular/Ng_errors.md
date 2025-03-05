### NG0100:
* ***`ExpressionChangedAfterItHasBeenCheckedError`***

* `Expression has changed after it was checked. Previous value: '0.5233483633245455'. Current value: '0.8696352063533838'. Expression location: _InfoMessageComponent component`.
* For development mode Angular's change detection cycle runs twice to detect unwanted value changes that might happen after change detection was executed.
* For production mode, its only runs once.
* This error means data is changed in unintended way.

### No provider for _HttpClient!
* `ERROR NullInjectorError: R3InjectorError(Environment Injector)[_HttpClient -> _HttpClient]: 
  NullInjectorError: No provider for _HttpClient!
    Angular 9`.

* Because ***no provider*** is set up for `HttpClient` built in service of Angular.
* `SOLUTION`:
  1. Provide `provideHttpClient()` in ***providers array*** in `main.ts` file.
```ts
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
}).catch((err) => console.error(err));
```
