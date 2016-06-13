# Algorithm Finders Keepers

### :checkered_flag: Problem Explanation:

The problem is quite simple to understand. You will check for each element in the array that is passed in the first argument, if the element plugged in to the function passed as the second argument returns true the first time. We do not care about the second or third one that is true, only the very first one if any. If there are none, then return undefined. This last bit is not explained but it is part of the tests used.

#### Relevant Links
[str.substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

## :speech_balloon: Hint: 1

You can use the function directly from the parameter, no need to rename it or anything.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

You need to pass an element and record it if the function returns true, for this you just have to pass the element as the parameter for the function.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

If no element satisfy the function then you must return **undefined**

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function findElement(arr, func) {
  // Make num undefined by default
  var num;

  // Loop thorugh the array and use the function to check
  for (var a = 0; a < arr.length; a++) {
    if (func(arr[a])) {
      // Store the first case and break the loop
      num = arr[a];
      return num;
    }
  }

  // otherwise return undefined
  return num;
}

findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});

// test here
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
```

:rocket: [Run Code](https://repl.it/CLn6/0)

### Code Explanation:

- To make the code easier, create an undefined variable that will be returned.
- Loop through the array to check for each element if it satisfy the function. This is done by passing the arr[index of the loop] as the parameter for the function from the second argument.
- If true, then store the array element, and return it. This will stop the loop. No else needed.
- If the loop was not broken and it has ended, then return **num** which by default is undefined. This means that none of the elements from the array satisfied the function.

#### Relevant Links

- [JS For Loops Explained](JS-For-Loops-Explained)

## :sunflower: Intermediate Code Solution:

```javascript
function findElement(arr, func) {
  filterArr = arr.filter(func); //filter array with the function provided

  return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
}

// test here
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
```

:rocket: [Run Code](https://repl.it/CLn7/0)

#### Relevant Links

- [JS Array Prototype Filter](JS-Array-Prototype-Filter)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @Rafase282 @JamesKee for your help with Algorithm: Finders Keepers`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
