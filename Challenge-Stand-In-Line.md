# Checkpoint: Stand In Line

***About queues***

In Computer Science a **queue** is an abstract *Data Structure* where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the *queue*.

***Instructions***

Write a function nextInLine which takes an "array" and an "item" as arguments.

Add the item onto the end of the array, then remove the first element of the array.

The nextInLine function should return the element that was removed.

Remember to use [ Read-Search-Ask](How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program. Write your own code.

## Useful Links
- [Challenge: Manipulate Arrays With push()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-push)
- [Challenge: Manipulate Arrays With shift()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift)
- [Challenge: Passing Values to Functions with Arguments](http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments)

## Problem Explanation:
- Change the code below `//Your Code here` and up to `//Change this line`
- Take note that you are editing the inside of the nextInLine function
- Use an array function you learned to add the `item` to the end of the array `arr`
- Use an array function you learned to remove the first element from array `arr`
- Return the element removed

## Hint: 1
- `push` adds an item to the end of an array.

## Hint: 2
- `shift` removes the first element of an array. It also gives that element back to you.

## Hint: 3
- The function nextInLine uses `arr` and `item`. Those are what the tests will use to pass the arrays and elements they will test with and allows the function to be reusable. Do not hardcode any of the tests inside the function.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}
```

# Code Explanation:
- Pushes item at the end of arr
- Calls shift on arr to get the first item and stores it in removed
- Returns removed

***Example Run***
- Test `nextInLine([2], 1);` runs
- The `nextInLine` function is called. `arr` becomes [2]. `item` becomes 1.
- `arr.push(item);` Pushes 1 to [2]. So `arr` is now [2,1]
- `var removed = arr.shift();` Removes the first element. So `arr` is now [1]. 2 has been removed and is stored in `removed`
- `return removed;` 2 is returned

***Note***
You don't actually need to store it in a variable if you return it directly!

```js
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();  // Change this line
}
```

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @CaroleAnneHannon for your help with Checkpoint: Stand in Line`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
