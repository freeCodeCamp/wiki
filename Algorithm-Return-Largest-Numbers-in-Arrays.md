:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :memo:

# :checkered_flag: Problem Explanation:

You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.

## :speech_balloon: Hint: 1

You will need to keep track of the array with the answer and the largest number of each sub-array.

> *try to solve the problem now*

## :speech_balloon: Hint: 2

You can work with multidimensional arrays by `Array[Index][SubIndex]`

> *try to solve the problem now*

## :speech_balloon: Hint: 3

Pay close attention to the timing of the storing of variables when working with loops

> *try to solve the problem now*

## Spoiler Alert!

[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solutions ahead!**

## :beginner: Basic Code Solution:

**(Procedural approach)**

```js
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = 0;
    for (var sb = 0; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/15)

### Code Explanation:

- Create a variable to store the _results_ as an array.
- Create an outer loop to iterate through the outer array.
- Create a second variable to hold the largest number. This must be outside an inner loop so it won't be reassigned until we find a larger number.
- Create said inner loop to work with the sub-arrays.
- Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
- After the inner loop, save the largest number in the corresponding position inside of the `results` array.
- And finally return said array.

## :sunflower: Intermediate Code Solution:

**(Declarative approach)**

```js
function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    }, 0);
  });
}
```

:rocket: [REPL It!](https://repl.it/CLjU/16)

### Code Explanation:

- we map all items within the main array to a new array using `Array.prototype.map()` and return this array as the final result
- within each inner array, we reduce its contents down to a single value using `Array.prototype.reduce()`
- the callback function passed to the reduce method takes the previous value (or 0) and the current value and compares the two values
- if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it's the last item  

**Reference:-**

- [Array.prototype.map()](js-Array-prototype-map)
- [Array.prototype.reduce()](js-Array-prototype-reduce)

## :rotating_light: Advanced Code Solution:

**(Declarative approach)**

```js
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
```

:rocket: [REPL It!](https://repl.it/CLjU/17)

### Code Explanation:

TL;DR: We build a special callback function (using the `Function.bind` method), that works just like `Math.max` but also has `Function.prototype.apply`'s ability to take arrays as its arguments :smiley:

- We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.
- Now the need a callback function to find the max of each inner array provided by the map.

  So we want to create a function that does the work of `Math.max` and accepts input as an array (which by it doesn't by default).

  In other words, it would be really nice and simple if this worked by itself:

  `Math.max([9, 43, 20, 6]); // Resulting in 43`

  Alas, it doesn't.

- To do the work of accepting arguments in the shape of an array, there is this `Function.prototype.apply` method, but it complicates things a bit by _invoking_ the _context_ function.<br>

  i.e. `Math.max.apply(null, [9, 43, 20, 6]);` would invoke something like a `Max.max` method. What we're looking for... almost.

Here we're passing `null` as the _context_ of the `Function.prototype.apply` method as `Math.max` doesn't need any context.

- Since `arr.map` expects a callback function, not just an expression, we create a function out of the previous expression by using the `Function.bind` method.
- Since, `Function.prototype.apply` is a static _method_ of the same `Function` _object_, we can call `Function.prototype.bind` on `Function.prototype.apply` i.e. `Function.prototype.apply.bind`.
- Now we pass the _context_ for the `Function.prototype.apply.bind` call (in this case we want `Math.max`so we can gain its functionality).
- Since the embedded `Function.prototype.apply` method will also require a context as it's 1st argument, we need to pass it a bogus _context_.

  - So, we pass `null` as the 2nd param to `Function.prototype.apply.bind` which gives a _context_ to the `Math.max` method.
  - Since, `Math.max` is independent of any _context_, hence, it ignores the bogus _context_ given by `Function.prototype.apply` method call.
  - Thus, our `Function.prototype.apply.bind(Math.max, null)` makes a new function accepting the `arr.map` values i.e. the inner arrays.

**Reference:-**

- [Math.max](Math.max)
- [Array.prototype.map()](js-Array-prototype-map)
- [Function.prototype.apply on DevDocs](http://devdocs.io/#q=js+Function+apply)
- [Function.bind on DevDocs](http://devdocs.io/#q=js+Function+bind)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 @abhisekp @Hallaathrad @cloudb for your help with Algorithm: Return Largest Numbers in Arrays`**

## :clipboard: NOTE TO CONTRIBUTORS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories -- **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
