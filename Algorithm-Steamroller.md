# Algorithm Steamroller

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

This problem seems simple but you need to make sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.

## :speech_balloon: Hint: 1

You need to check if an element is an array or not.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [[4]] then instead of returning [4] you need to return 4\. If you get [[[4]]] then the same, you want the 4\. You can access it with arr[index1][index2] to go a level deeper.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. Have fun!

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function steamrollArray(arr) {
  var flattenedArray = [];

  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
```

:rocket: [Run Code](https://repl.it/CLnh/0)

## Code Explanation:

- Create a new variable to keep flattened arrays called `flattenedArray`.
- Create a function that will add non array elements to the new variable, and for the ones that are array it loops through them to get the element.
- It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. if it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
- Invoke the function, the first time you will always pass it an array, so it always fall in to the isArray branch
- Return the flattened array.

#### Relevant Links

- [Array.push()](JS-Array-Prototype-Push)
- [For Loops](JS-For-Loop)

## :sunflower: Intermediate Code Solution:

```javascript
function steamrollArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
```

:rocket: [Run Code](https://repl.it/CLni/0)

## Code Explanation:

- Use reduce to concatenate each element into the last element
- If the new element is an Array itself call the function recursively to flatten it before merging it with the rest of result
- Pass an empty array to reduce as initial value to make sure even the first element will be processed

**Credit goes to this [StackOverflow Answer](http://stackoverflow.com/a/15030117/1075499).**

#### Relevant Links

- [Array.reduce()](JS-Array-Prototype-Reduce)
- [Array.concat()](JS-Array-Prototype-Concat)
- [Array.isArray()](JS-Array-IsArray)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @Rafase282 @sabahang for your help with Algorithm: Steamroller`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
