![](http://i.imgur.com/HkEgef5.gif)

# Explanation:
Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

## Hint: 1
- Merge the list to make it easy to compare functions.

## Hint: 2
- Use filter to get the new array, you will need to create a callback function.

## Hint: 3
- The best way to go about the callback function is to check if the number from the new merged array is not in **both** original arrays and return it.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}

// test here
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
:rocket: [REPL It!](https://repl.it/CLma/0)

## Code Solution 2:

```js
function diffArray(arr1, arr2) {
  // Same, same; but different.
  var newArr = arr1.filter(function (el) {
    return arr2.indexOf(el) === -1;
    
    // concat the previous output of filter method
    // with the next output of filter method
  }).concat(arr2.filter(function (el) {
    return arr1.indexOf(el) === -1;
  }));
  return newArr;
}

// test here
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
:rocket: [REPL It!](https://repl.it/CLmc/0)

## Code Solution 3:

```js
// This solution runs two times faster than solutions 1 and 2
function diffArray(arr1, arr2) {
  var newArr = [];
  // Looping through arr1 to find elements that do not exist in arr2  
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      // Pushing the unique to arr1 elements to the newArr
      newArr.push(arr1[i]);
    } 
  }
  // Looping through arr2 to find elements that do not exist in arr1
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      // Pushing the unique to arr2 elements to the newArr    
      newArr.push(arr2[j]);
    } 
  }
  
  return newArr;
}

// test here
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
:rocket: [REPL It!](https://repl.it/CLme/0)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @aganita for your help with Algorithm: Diff Two Arrays`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
