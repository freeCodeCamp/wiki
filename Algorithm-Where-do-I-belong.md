# Explanation:
This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.

## Hint: 1
The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.

## Hint: 2
Once the array is sorted, then just check for the first number that is bigger and return the index.

## Hint: 3
If there is no index for that number then you will have to deal with that case too.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }

  return arr.length;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/36)

# Code Explanation:
- First I sort the array using `.sort(callbackFuntion)` to sort it by lowest to highest, from left to right.
- Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.

## Code Solution 2:

```js
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b)
           {return a-b;}
          );
  return arr.indexOf(num);
 }
```

:rocket: [REPL It!](https://repl.it/CLjU/37)

# Code Explanation:
- First insert the number into the array using the `Array.push()` method.
- Then use the numerical sort method to sort the elements of the array. in the end just return the index value of the number that was push earlier using the `Array.indexOf()` method.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 and @rahul1992 for your help with Algorithm: Where do I belong`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
