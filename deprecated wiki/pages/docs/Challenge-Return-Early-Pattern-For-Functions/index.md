---
title: Challenge Return Early Pattern For Functions
order: 5
---
# Challenge Return Early Pattern for Functions

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

## Example

```javascript
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

The above outputs "Hello" to the console, returns "World", but `"byebye"` is never output, because the function exits at the `return` statement.