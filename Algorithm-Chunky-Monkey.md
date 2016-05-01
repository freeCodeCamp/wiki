![](http://i.imgur.com/RdrnNvA.png)

# Explanation
Our goal for this Algorithm is to split `arr` (first argument) into smaller chunks of arrays with the length provided by `size` (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:
1. `(['a', 'b', 'c', 'd'], 2)` is expected to be `[['a', 'b'], ['c', 'd']]`
2. `([0, 1, 2, 3, 4, 5], 3)` is expected to be `[[0, 1, 2], [3, 4, 5]]`
3. `([0, 1, 2, 3, 4, 5], 2)` is expected to be `[[0, 1], [2, 3], [4, 5]]`
4. `([0, 1, 2, 3, 4, 5], 4)` is expected to be `[[0, 1, 2, 3], [4, 5]]`

Click **More information** under the Algorithm title and read the helpful links if you haven't yet.   

## How to approach the Algorithm
The helpful links suggest to use `Array.push()` so let's start by first creating a new array to store the smaller arrays we will soon have like this:

```js
var newArray = [];
```

  Next we'll need a `for loop` to loop through `arr` then finally we need a method to do the actual splitting and we can use `Array.slice()` to do that. The key to this Algorithm is understanding how a `for loop`, `size`, `Array.slice()` and `Array.push()` all work together.  

# How does a for loop and Array.slice() work
**For Loop**

A `for loop` keeps looping until a condition evaluates to false for example if we had:

```js
for (var i = 0; i < arr.length; i++)
```

  `i` starts with a value of 0, `i` loops until `i` is no longer less than the length of `arr` and during each repeat loop, the value of `i` increases by 1 (one). If `arr.length` happens to be 4 then the `for loop` stops right before `i` reaches 4.  

**Array.slice() Method**

`Array.slice()` method extracts a portion of an array and returns a copy into a new array. We can declare which element to start and which element to stop. For example, if `arr` is `['a', 'b', 'c', 'd']` and we used `arr.slice(1, 3);`, the `Array.slice()` method starts at element 1 and stops at element 3 then returns:

```js
["b","c"]
```

_Notice how it captures the start element but doesn't capture the stop element._  

# Using a for loop and Array.slice() together
If we use the following `for loop` while `size` is 2 (note: `size` = 2):

```js
(var i = 0; i < arr.length; i += size)
```

  The loop starts at element 0, loops once then `i += 2` which is another way of stating `i = i + 2` so now the new value of `i` becomes 2. What happens if we combine the following `arr.slice()` with the `for loop`?

```js
arr.slice(i, i + size)
```

# Push the arrays out
We can combine the `Array.slice()` method with the `Array.push()` method inside the `for loop` like this:

```js
for (var i = 0; i < arr.length; i += size) {
newArray.push(arr.slice(i, i + size));
}
```

  `arr.slice()` will start at element 0 and stop at element 2. Here's the fun part: once the `for loop`, loops again then the value of `i` becomes 2 while the `i` in the `arr.slice()` will also have a value of 2. The new `arr.slice()` becomes:

```js
arr.slice(2, 2 + 2)
```

  Now `arr.slice()` starts at the element 2 and stops at element 4 and in the next loop, `arr.slice()` will start at element 4 and stop at element 6. `newArray.push()` will push all the elements out into chunks of smaller arrays with the length of `size`.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**  

## Code Solution:

#### Solution 1:

```js
function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/24)

#### Solution 2:

```js
function chunkArrayInGroups(arr, size) {
  // Break it up
  // It's already broken :(
  arr = arr.slice();
  var arr2 = [];
  for(var i = 0, len = arr.length; i < len; i+=size) {
    arr2.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return arr2;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/25)

#### Solution 3:

```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

:rocket: [REPL It!](https://repl.it/CLjU/26)

#### Solution 4:

```js
// splice & slice, avoiding size counting
function chunkArrayInGroups(arr, size) {
  var ar = arr.slice();
  var res = [];
  do {
    res.push(ar.splice(0, size));
  } while (ar.length > 0);
  return res;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/27)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @kirah1314 @Rafase282 @jsommamtek @oshliaer for your help with Algorithm: Chunky Monkey`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)

