The `for..or` statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```js
for (variable of object) {
  statement
}
```

|          | Description                          |
|----------|-------------------------------------|
| variable | On each iteration a value of a different property is assigned to variable.                                 |
| object | Object whose enumerable properties are iterated. |

[MDN link](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of) | [MSDN link](https://msdn.microsoft.com/library/dn858238%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)

## Examples

```js
let arr = [ "fred", "tom", "bob" ];

for (let i of arr) {
    console.log(i);
}

// Output:
// fred
// tom
// bob
```

```js
var m = new Map();
m.set(1, "black");
m.set(2, "red");

for (var n of m) {
console.log(n);
}

// Output:
// 1,black
// 2,red
```