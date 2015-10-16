# Explanation:
You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.

## Hint: 1
You will need to keep track of the array with the answer and the largest number of each sub-array.

## Hint: 2
You can work with multidimensional arrays by `Array[Index][SubIndex]`

## Hint: 3
Pay close attention to the timing of the storing of variables when working with loops

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solutions ahead!**

## Solution 1:

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

# Code Explanation:
- Create a variable to store the results as an array.
- Create an outer loop to iterate through the main array.
- Before going into the inner loop, create a variable to hold the largest number. This must be outside the inner loop.
- Create another for loop to work with the sub-arrays.
- Check if the element of the sub array is larger than the current largest number. If so, then save the number.
- After the inner loop, save the largest number in the variable for the results.

## Solution 2:

```js
function largestOfFour(arr) {
  // You can do this!
  // Yes, I can. :P
  return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

# Code Explanation:
- The `Function.apply.bind(Math.max, null)` makes a new function accepting the `arr.map` values i.e. the inner arrays.

Now the new function needs to find the max of the input inner array.
- So we want to create a function that does the work of `Math.max` and accepts input as an array.

e.g. wouldn't be nice if the `Math.max` would be accepting inputs like this `Math.max([9, 43, 20, 6]); // 43`.
- To do the work of accepting params as array, there is this `Function.apply` method but it *invokes* the *context* function.

i.e. `Math.max.apply(null, [9, 43, 20, 6]); // 43` would invoke the `Max.max` method. 

> Here we're passing `null` as the *context* of the `Function.apply` method as `Math.max` doesn't need any context.

But that's not useful for `arr.map` which accepts a function value. So we create a function value using `Function.bind` method. 
- Since, `Function.apply` method is an `instanceof` `Function` constructor, so we can call `Function.bind` on `Function.apply` i.e. `Function.apply.bind`.

- Now we pass the *context* for `Function.apply.bind` i.e. `Math.max`  as the 1st argument which gives us the functionality of `Math.max` function.
- And to pass a bogus *context* for `Function.apply`, we pass `null`as the 2nd param to `Function.apply.bind`.

> According to the documentation of [`Function.bind`](https://devdocs.io/javascript/global_objects/function/bind) method, once a *context* is decided for `Function.bind`, it can't be changed. Hence, the `Function.apply` gets a *bogus* context. :stuck_out_tongue_winking_eye: 

**So in the end we get a function (using `Function.bind` method) that works like `Math.max` but accepts params as an array like `Function.apply`** :smiley: 

*comprendido*?

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282 @abhisekp`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
