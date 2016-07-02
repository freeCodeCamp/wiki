# Algorithm Chunky Monkey

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

Write a function that splits an array, **arr** (first argument) into groups the length of **size** (second argument) and returns them as a two-dimensional array. These are the four sample objectives our code needs to pass:

1. `(['a', 'b', 'c', 'd'], 2)` is expected to be `[['a', 'b'], ['c', 'd']]`
2. `([0, 1, 2, 3, 4, 5], 3)` is expected to be `[[0, 1, 2], [3, 4, 5]]`
3. `([0, 1, 2, 3, 4, 5], 2)` is expected to be `[[0, 1], [2, 3], [4, 5]]`
4. `([0, 1, 2, 3, 4, 5], 4)` is expected to be `[[0, 1, 2, 3], [4, 5]]`

#### Relevant Links

- [JS Array Prototype Push](JS-Array-Prototype-Push)
- [JS Array Prototype Splice](JS-Array-Prototype-Splice)
- [JS Array Prototype Slice](JS-Array-Prototype-Slice)
- [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## :speech_balloon: Hint: 1

Use an empty array to store the smaller arrays using the `push()` method.

```javascript
var newArray = [];
```

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Use a `for` loop to iterate through the given array, **arr**.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Using the `splice()` method is the easiest way to handle the splitting of the given array. Another possible, but complex approach is using the `slice()` method. The key to implementing this algorithm is understanding how `for` loops, `size`, `splice()` method and `push()` method work together.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrLength = arr.length;
  var arrNew = [];

  while(arr.length) {
    arrNew.push(arr.splice(0, size));
  }

  return arrNew;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

:rocket: [Run Code](https://repl.it/C8Mn/0)

### Code Explanation:

- **arrLength** contains the length of original array, **arr**.
- **arrNew** is used to store the smaller arrays.
- A `while` loop is used to iterate through **arr**.
- A combination of the `push()` and `splice()` methods is used to store smaller arrays in **arrNew**.
- The new array **arrNew** is then returned.

#### Relevant Links

- [JS While Loop](JS-While-Loop)

## :sunflower: Intermediate Code Solution:

```javascript
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrNew = [];
  var i = 0;

  while(i < arr.length) {
    arrNew.push(arr.slice(i, i += size));
  }

  return arrNew;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

:rocket: [Run Code](https://repl.it/C8Mn/1)

### Code Explanation:

- **arrNew** is used to store the smaller arrays.
- A `while` loop is used to iterate through **arr**.
- A combination of the `push()` and `slice()` methods is used to store smaller arrays in **arrNew**.
- The new array **arrNew** is then returned.

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @kirah1314 @Rafase282 @jsommamtek @oshliaer @dakshshah96 for your help with Algorithm: Chunky Monkey`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
