# Problem Explanation:
Remove all falsey values from an array.

## Hint: 1
Falsey is something which evaluates to FALSE. There are only five falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.

## Hint: 2
We need to make sure we have all the falsey values to compare, we can know it, maybe with a function with all the falsey values...

## Hint: 3
Then we need to add a `filter()` with the falsey values function...

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Solution Code:

```
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // I've a hammer fist.

  return arr.filter(Boolean);
}
```

## Code Explanation:
With the `falseyValues(n)` function we return all the falsey values so we can then add to the `filter()` and lastly return the `arr`.
