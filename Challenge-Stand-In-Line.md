# Challenge Stand In Line

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

In Computer Science a _queue_ is an abstract **data structure** where items are kept in order. New items can be added at the back of the **queue** and old items are taken off from the front of the **queue**.

Write a function `nextInLine` which takes an array (**arr**) and a number (**item**) as arguments. Add the number to the end of the array, then remove the first element of array. The `nextInLine` function should then return the element that was removed.

- Change the code below `//Your Code here` and up to `//Change this line`.
- Ensure that you are editing the inside of the `nextInLine` function.
- Use an array function you learned to add the **item** to the end of the array **arr**.
- Use an array function you learned to remove the first element from array **arr**.
- Return the element removed.

#### Relevant Links

- [Challenge: Manipulate Arrays With push()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-push)
- [Challenge: Manipulate Arrays With shift()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift)
- [Challenge: Passing Values to Functions with Arguments](http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments)

## :speech_balloon: Hint: 1

The `push()` method adds an item to the end of an array.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

The `shift()` method removes the first element of an array. It also returns the element removed.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

The function `nextInLine` uses **arr** and **item**. Those are what the tests will use to pass the array elements they will test with. It allows the function to be reusable. Do not hardcode any of the tests inside the function.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}
```

### Code Explanation:

- Pushe **item** at the end of **arr**.
- Call the `shift()` method on **arr** to get the first item and store it in **removed**.
- Return **removed**.

**Example Run**

- Test `nextInLine([2], 1);` runs.
- The `nextInLine` function is called. **arr** becomes [2]. **item** becomes 1.
- `arr.push(item);` Pushes 1 to [2]. So **arr** is now [2,1].
- `var removed = arr.shift();` removes the first element. So **arr** is now [1]. 2 has been removed and is stored in **removed**.
- `return removed;` 2 is returned.

**_Note_**: You don't actually need the variable **removed**. The element removed can be returned directly using `return arr.shift();`.

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @CaroleAnneHannon for your help with Checkpoint: Stand in Line`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
