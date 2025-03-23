To allow for multiple types in a single value you can use Union Types: `myVal: number | string`
<br/><br/>

# Enums
* Group of allowed values.
<br/><br/>

### Setting specific string values as types uses a TypeScript feature called 'Literal Types'. The idea is to only allow the specific (string) values - instead of all strings.
```TYPESCRIPT
// Example

  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd< 0.5  ){
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000)
  }
```
<br/><br/>

### private interval?: ReturnType<typeof setInterval>;

<br/><br/>

>[!TIP]
> ### Whenever you to update array, copy it into new object and return that object.
