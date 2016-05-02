![](http://i.imgur.com/GluUbAz.jpg)

# Problem Explanation:
Remove all [falsy](js-falsy) values from an array.

## Hint: 1
Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.

## Hint: 2
We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values...

## Hint: 3
Then we need to add a `filter()` with the falsy values function...

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Solution Code:

```js
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // I've a hammer fist.

  return arr.filter(Boolean);
}
```

:rocket: [REPL It!](https://repl.it/CLjU/32)

```js
function bouncer(arr) {
  function isTruthy(arg) {
    return Boolean(arg);
  }

  var filteredArray = arr.filter(isTruthy);
  return filteredArray;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/33)

```js
function bouncer(arr) {
	arr = arr.filter(function(element){
		return Boolean(element);
	});
  return arr;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/34)

# Code Explanation:
The `Array.prototype.filter` method expects a function that returns a `Boolean` value which takes a single argument and returns `true` for [truthy](js-truthy) value or `false` for [falsy](js-falsy) value. Hence we pass the built-in `Boolean` function. The second solution replaces the array in-place, and utilises an anonymous function as the callback for the `filter` method. This avoids polluting the global scope with a single-use function, and makes our code more concise.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @renelis @abhisekp @Rafase282 for your help with Algorithm: Falsy Bouncer`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
