# Algorithm Slasher Flick

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

For example: `slasher([1, 2, 3], 2);` must return [3].

#### Relevant Links

- [JS Array Prototype Splice](JS-Array-Prototype-Splice)
- [JS Array Prototype Slice](JS-Array-Prototype-Slice)

## :speech_balloon: Hint: 1

- We need only the remaining part of an array, so we can just remove what we don't.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

- `splice()` function can be used.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

- `slice()` function can be used.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}
slasher([1, 2, 3], 2);
```

:rocket: [Run Code](https://repl.it/CLjU/28)

### Code Explanation:

- This solution uses the `splice()` function.
- First argument, **arr** is the array to be modified.
- Second argument, **howMany** is the number of elements to be removed starting with **arr[0]**.
- Modify the array with `splice()` and return it.

## :sunflower: Intermediate Code Solution:

```javascript
function slasher(arr, howMany) {

  // Return string after the amount chopped off.
  return arr.slice(howMany);

}
```

:rocket: [Run Code](https://repl.it/CLjU/29)

### Code Explanation:

- This solution uses the `slice()` function.
- The argument **howMany** is the number of elements to be removed starting with **arr[0]**.
- Modify the array with `slice()` and return it.

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @clint74 @Rafase282 @M-Bowe @dakshshah96 for your help with Algorithm: Slasher Flick`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
