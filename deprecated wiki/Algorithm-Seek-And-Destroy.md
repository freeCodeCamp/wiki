# Algorithm Seek and Destroy

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two **or more** but on the script you only see two. Many people hardcode this program for three arguments. You will remove any number from the first argument that is the same as any other other arguments.

#### Relevant Links

- [Arguments object](JS-Arguments)
- [Array.filter()](JS-Array-Prototype-Filter)

## :speech_balloon: Hint: 1

You need to work with `arguments` as if it was a regular array. The best way is to convert it into one.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

You need to filter, this also means you need to create a callback function, one that checks if the element is on the `indexOf()`

> _try to solve the problem now_

## :speech_balloon: Hint: 3

To convert `arguments` into an array use this code `var args = Array.prototype.slice.call(arguments);`

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
```

:rocket: [Run Code](https://repl.it/CLjU/35)

### Code Explanation:

- The first line will turn the `arguments` variable into a full array instead of the limited array it currently is.
- Next I remove the first argument since I don't need, since I only want the other arguments passed besides the first which is the array we are going to compare against.
- Then use the `filter()` to filter out the elements that are on the array and keep the ones that are not.

#### Relevant Links

- [Array.indexOf()](JS-Array-Prototype-IndexOf)
- [Array.splice()](JS-Array-Prototype-Splice)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 for your help with Algorithm: Seek and Destroy`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
