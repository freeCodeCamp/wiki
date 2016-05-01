# Problem Explanation:
- The program has to return a new array of unique values from two original arrays in the order they show up. So there is not sorting required, and no duplicates.

## Hint: 1
- Since you have no idea how many parameters were passed, it would be best to loop through the `arguments` before looping through the arrays.

## Hint: 2
- I used loops, you can use something else like map, reduce or others if you want.

## Hint: 3
- You will have to check if the current value is already on the array to be returned for every value.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:
#### First Solution:

```js
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
:rocket: [REPL It!](https://repl.it/CLnM/0)

# Code Explanation:
- Check comments in code.

#### Second Solution:

```js
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  }); 
  return uniqueArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
:rocket: [REPL It!](https://repl.it/CLnN/0)

# Code Explanation:
- Number of arguments can change dynamically so we don't need to bother providing our func with args at all
- we use a while loop to concatanate all the arguments into one Array called `concatArr`
- we use `filter` to remove the duplicate elements by checking the index of each element and removing same elements with different positions
- ordering will be preserved as we didn't mess with it

#### Third Solution:

```js
function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;                    
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
:rocket: [REPL It!](https://repl.it/CLnO/0)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @sabahang @coded9 for your help with Algorithm: Sorted Union`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
