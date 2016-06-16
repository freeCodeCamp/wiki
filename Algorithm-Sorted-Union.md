# Algorithm Sorted Union

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

The program has to return a new array of unique values from two original arrays in the order they show up. So there is not sorting required, and there shouldn't be any duplicates.

#### Relevant Links

- [JS Arguments](JS-Arguments)

## :speech_balloon: Hint: 1

Since you have no idea how many parameters were passed, it would be best to loop through the **arguments** before looping through the arrays.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

It isn't necessary to use loops. You can use functions such as `map()`, `reduce()` or others if you want.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

You will have to check if the current value is already on the array to be returned for every value.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLnM/0)

### Code Explanation:

- Create empty array **finalResult** to store the final result.
- Loop through the **arguments** object in the outer loop and store it in **arrayArguments**.
- The inner loop is used to loop through individual array elements.
- If the element doesn't already exist in **finalArray**, add it.
- Return **finalArray**.

#### Relevant Links

- [JS For Loops Explained](JS-For-Loops-Explained)
- [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [JS String Prototype IndexOf](JS-String-Prototype-IndexOf)
- [JS Array Prototype Push](JS-Array-Prototype-Push)

## :sunflower: Intermediate Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLnO/0)

### Code Explanation:

- **arguments** object is converted into an array using `slice()`.
- `reduce()` function is used to flatten the array i.e., for every element that is in the array (or nested arrays), extract it's elements into one-dimensional array.
- After flattening the array, `filter()` is used to remove duplicate elements from **newArr**.

#### Relevant Links

- [JS Array Prototype Slice](JS-Array-Prototype-Slice)
- [JS Array Prototype Reduce](JS-Array-Prototype-Reduce)
- [JS Array Prototype Concat](JS-Array-Prototype-Concat)
- [JS Array Prototype Filter](JS-Array-Prototype-Filter)

## :rotating_light: Advanced Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLnN/0)

### Code Explanation:

- Number of arguments can change dynamically, so we don't need to bother providing our function `uniteUnique()` with arguments at all.
- We use a `while` loop to concatenate all the arguments into one array called **concatArr**.
- We use `filter()` to remove the duplicate elements by checking the index of each element and removing same elements with different positions.
- Ordering will be preserved here.

#### Relevant Links

- [JS While Loop](JS-While-Loop)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @sabahang @coded9 @dakshshah96 for your help with Algorithm: Sorted Union`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
