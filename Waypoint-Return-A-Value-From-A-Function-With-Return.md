#Waypoint: Return a Value from a Function with Return

We can pass values into a function with `arguments`. You can use a `return` statement to send a value back out of a function.

##Example

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

`plusThree` takes an `argument` for `num` and returns a value equal to `num + 3`.