# Problem Explanation:
Symmetric Difference is the difference between **two** sets.

So in the Symmetric Difference Bonfire you would work through the arrays of numbers something like this -

`sym(A, B, C)` Translates to `sym(sym(A,B),C)`

Or in plain English - First find the Symmetric Difference of Set A and Set B. Then find the Symmetric Difference of this new set and Set C.

So -

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])`

would equal

`[1,4,5]`

Here's a nice video tutorial (with an awful fake British accent!) -

[YouTube - Symmetric Difference](https://www.youtube.com/watch?v=PxffSUQRkG4)

## Hint: 1
- Add hint here.

## Hint: 2
- Add hint here.

## Hint: 3
- Add hint here.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function sym() {

  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {

    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the opposite then get unique values
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function(item, idx, arr) {
        return arr.indexOf(item) === idx;
      });
  };

  // Reduce all arguments getting the difference of them
  return args.reduce(getDiff, []);
}
```

# Code Explanation:
- First read comments in code.

# Related Links
https://en.wikipedia.org/wiki/Symmetric_difference

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @guyjoseph @jjmax75`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
