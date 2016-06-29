# Algorithm Chunky Monkey

![](https://i.imgur.com/RdrnNvA.png)

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help.md) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

Our goal for this Algorithm is to split `arr` (first argument) into smaller chunks of arrays with the length provided by `size` (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:

1. `(['a', 'b', 'c', 'd'], 2)` is expected to be `[['a', 'b'], ['c', 'd']]`
2. `([0, 1, 2, 3, 4, 5], 3)` is expected to be `[[0, 1, 2], [3, 4, 5]]`
3. `([0, 1, 2, 3, 4, 5], 2)` is expected to be `[[0, 1], [2, 3], [4, 5]]`
4. `([0, 1, 2, 3, 4, 5], 4)` is expected to be `[[0, 1, 2, 3], [4, 5]]`

#### Relevant Links

- [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## :speech_balloon: Hint: 1

The links above suggest to use `Array.push()`, so let's start by first creating a new array to store the smaller arrays we will soon have like this:

```javascript
var newArray = [];
```

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Next we'll need a `for loop` to loop through `arr`.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Finally, we need a method to do the actual splitting and we can use `Array.slice()` to do that. The key to this Algorithm is understanding how a `for loop`, `size`, `Array.slice()` and `Array.push()` all work together.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLjU/24)

### Code Explanation:

- Firstly, we create two empty arrays called `temp` and `result`, which we will eventually return.
- Our **for loop** loops until `a` is equal to or more than the length of the array in our test.
- Inside our loop, we push to `temp` using `temp.push(arr[a]);` if the remainder of `a / size` is not equal to `size - 1`.
- Otherwise, we push to `temp`, push `temp` to the `result` variable and reset `temp` to an empty array.
- Next, if `temp` isn't an empty array, we push it to `result`.
- Finally, we return the value of `result`.

#### Relevant Links

- [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## :sunflower: Intermediate Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLjU/25)

### Code Explanation:

- Firstly, we slice `arr` using `arr.slice()` and create an empty array called `arr2`.
- Our for loop loops until `i` is equal to or more than the length of the array in our test. We also add `size` onto `i` each time we loop.
- Inside our loop, we push to `arr2` using `arr.slice(0, size)`.
- After pushing to `arr2`, we let `arr` equal to `arr.slice(size)`.
- Finally, we return the value of `arr2`.

#### Relevant Links

- [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## :rotating_light: Advanced Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLjU/26)

### Code Explanation:

- Firstly, we create two variables. `newArr` is an empty array which we will push to. We also have the `i` variable set to zero, for use in our while loop.
- Our while loop loops until `i` is equal to or more than the length of the array in our test.
- Inside our loop, we push to the `newArr` array using `arr.slice(i, i+size)`. For the first time it loops, it will look something like:
```javascript
newArr.push(arr.slice(1, 1+2))
```
- After we push to `newArr`, we add the variable of `size` onto `i`.
- Finally, we return the value of `newArr`.

#### Relevant Links

- [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [While Loops](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @kirah1314 @Rafase282 @jsommamtek @oshliaer for your help with Algorithm: Chunky Monkey`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution.md) for reference.
