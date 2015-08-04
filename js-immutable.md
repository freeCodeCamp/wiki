> Immutable means unchangeable i.e. you can't change.

Javascript has lots of immutable types e.g. `string` primitive type. Try this in your console.

```js
s = "red";
console.log(s[1]); //→ "e"
s[1] = "x";
console.log(s) //→ "red"
```
the `s` didn't change! WAT!

## details
Some string methods like String.replace will return a new string. 


tags: js, immutability