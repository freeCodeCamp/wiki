# Algorithm Symmetric Difference

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

Symmetric difference is the difference between two sets i.e., the collection of elements which are members of either set but not both.

In the symmetric difference algorithm, you would work through the arrays of numbers in this manner: `sym(A, B, C)` translates to `sym(sym(A, B), C)` i.e., the symmetric difference of set A and set B is found first and then, the symmetric difference of the resultant set and set C is found.

Example: `sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` equals `[1, 4, 5]`.

#### Relevant Links

- [YouTube - Symmetric difference](https://www.youtube.com/watch?v=PxffSUQRkG4)
- [Symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
- [JS Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JS Arguments](JS-Arguments)
- [JS Array Prototype Reduce](JS-Array-Prototype-Reduce)
- [JS Reduce Made Easy](JS-Reduce-Made-Easy)

## :speech_balloon: Hint: 1

The **arguments** object is not an array. It is similar to an array, but does not have any array properties except length. For example, it does not have the `pop` method. However, it can be converted to a real array: `var args = Array.prototype.slice.call(arguments);`

> _try to solve the problem now_

## :speech_balloon: Hint: 1

Write a function that returns the symmetric difference of the two arrays: `yourFunction([1, 2, 3], [2, 4, 6])` must return `[1, 3, 4, 6]`

> _try to solve the problem now_

## :speech_balloon: Hint: 1

Use `Array.prototype.reduce` along with `yourFunction` to repeat the process on multiple arguments

Something strange about the definition of symmetric difference is that if one identical item occurs in three different sets, it is a member of the symmetric difference. For example:

```
a = [1, 2, 5]
b = [2, 3, 5]
c = [3, 4, 5]

sym(a, b) = [1, 3]
sym([1, 3], c) = [1, 4, 5]
```

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    function symDiff(arrayOne, arrayTwo) {
        var result = [];

        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}
```
:rocket: [Run Code](https://repl.it/C4II/0)

### Code Explanation:

- `push()` is used to break down the **arguments** object to an array, **args**.
- The `symDiff` function finds the symmetric difference between two sets. It is used as a callback function for the `reduce()` method called on **args**.
- `arrayOne.forEach()` pushes the elements to **result** which are present only in **arrayOne** as well as not already a part of **result**.
- `arrayTwo.forEach()` pushes the elements to **result** which are present only in **arrayTwo** as well as not already a part of **result**.
- The **result**, which is the symmetric difference is returned. This solution works for any number of sets.

#### Relevant Links

- [JS For Loops Explained](JS-For-Loops-Explained)
- [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [JS Array Prototype Push](JS-Array-Prototype-Push)
- [JS Array Prototype ForEach](JS-Array-Prototype-ForEach)
- [JS Array Prototype IndexOf](JS-Array-Prototype-IndexOf)

## :sunflower: Intermediate Code Solution:

```javascript
function sym() {

  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {

    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  var symarray = args.reduce(getDiff, []);

  // Run filter function to get the unique values
  var unique = symarray.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
    });
  return unique;
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);
```

:rocket: [Run Code](https://repl.it/CLoc/0)

### Code Explanation:

- The `slice()` method is used to break down the **arguments** object to an array, **args**.
- The `getDiff` function finds the symmetric difference between two sets, **arr1** and **arr2**. It is used as a callback function for the `reduce()` method called on **args**.
- The first `filterFunction()` returns elements in **arr1** that don't exist in **arr2**.
- The next `filterFunction()` is run on each array against the other to check the inverse of the first check for uniqueness and concatenate it.
- **symarray** consists of the reduced arguments.
- `filter()` is used on **symarray** to keep only the unique values and **unique** is returned.

#### Relevant Links

- [JS Array Prototype Slice](JS-Array-Prototype-Slice)
- [JS Array Prototype Filter](JS-Array-Prototype-Filter)
- [JS Array Prototype Concat](JS-Array-Prototype-Concat)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @guyjoseph @jjmax75 @benschac @dakshshah96 for your help with Algorithm: Symmetric Difference`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
