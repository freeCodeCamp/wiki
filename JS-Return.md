# JavaScript Return

## Introduction

When a **return** statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, `undefined` is returned instead.

```javascript
return [[expression]];
```

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) | [MSDN link](https://msdn.microsoft.com/en-us/library/22a685h9.aspx)

## Examples

The following function returns the square of its argument, **x**, where **x** is a number.

```javascript
function square(x) {
   return x * x;
}
```

The following function returns the product of its arguments, **arg1** and **arg2**.

```javascript
function myfunction(arg1, arg2){
   var r;
   r = arg1 * arg2;
   return(r);
}
```
