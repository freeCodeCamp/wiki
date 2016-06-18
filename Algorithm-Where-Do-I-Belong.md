# Algorithm Where do I Belong

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.

#### Relevant Links
- [JS Array Sort](JS-Array-Prototype-Sort)

## :speech_balloon: Hint: 1

The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Once the array is sorted, then just check for the first number that is bigger and return the index.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

If there is no index for that number then you will have to deal with that case too.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }

  return arr.length;
}
```

:rocket: [Run Code](https://repl.it/CLjU/36)

## Code Explanation:

- First I sort the array using `.sort(callbackFuntion)` to sort it by lowest to highest, from left to right.
- Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.

## :sunflower: Intermediate Code Solution:

**Using `.indexOf()`**

```javascript
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b)
           {return a-b;}
          );
  return arr.indexOf(num);
 }
```

:rocket: [Run Code](https://repl.it/CLjU/37)

## Code Explanation:

- First insert the number into the array using the `Array.push()` method.
- Then use the numerical sort method to sort the elements of the array. in the end just return the index value of the number that was push earlier using the `Array.indexOf()` method.

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 and @rahul1992 for your help with Algorithm: Where do I belong`**

## :clipboard: NOTES FOR CONTRIBUTIONS:
- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
