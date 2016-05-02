# Problem Explanation:
Return the remaining elements of an array after chopping off n elements from the head.

For example: `slasher([1, 2, 3], 2);` must return [3]

## Analysis:
We need only the remaining part of an array, so we can just remove what we don't.

## Understanding slicing:
`.slice()` allows to get only what you want from an array.

## Understanding the splice:
If you want the **tail** of a snake remove the head first. The `.splice()` method changes the content of an array by removing existing elements and/or adding new elements. This can be handy. Get an array, remove the first part and return the remaining.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```javascript
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0,howMany);
  //return the remaining or the tail  \__/(**)-<
  return arr;
}
slasher([1, 2, 3], 2);
```

:rocket: [REPL It!](https://repl.it/CLjU/28)

## Code Solution 2:

```javascript
function slasher(arr, howMany) {

  //Return string after the amount chopped off.
  return arr.slice(howMany);

}
```

:rocket: [REPL It!](https://repl.it/CLjU/29)

# References
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @clint74 @Rafase282 @M-Bowe for your help with Algorithm: Slasher Flick`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)

```
           ,,,         ,,,
          ;"   ^;     ;'   ",
          ;    s$$$$$$$s     ;
          ,  ss$$$$$$$$$$s  ,'
          ;s$$$$$$$$$$$$$$$
          $$$$$$$$$$$$$$$$$$
         $$$$P""Y$$$Y""W$$$$$      -{ Happy Camping! }
         $$$$  p"$$$"q  $$$$$
         $$$$  .$$$$$.  $$$$
          $$DcaU$$$$$$$$$$
            "Y$$$"*"$$$Y"
                "$b.$$"
```