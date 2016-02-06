Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.

```js
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

> tags: closure, javascript, js