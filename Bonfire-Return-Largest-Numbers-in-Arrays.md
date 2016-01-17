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

#### First solution
(Procedural approach)

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

#### Second solution
(Declarative approach)
> NOTE: This is an advanced solution. NOT FOR BEGINNERS.

```js
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
```

# Code Explanation:

#### First Solution
(Procedural approach)

- Create a variable to store the *results* as an array.
- Create an outer loop to iterate through the outer array.
- Create a second variable to hold the largest number. This must be outside an inner loop so it won't be reassigned until we find a larger number.
- Create said inner loop to work with the sub-arrays.
- Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
- After the inner loop, save the largest number in the corresponding position inside of the `results` array.
- And finally return said array.

#### Second Solution
(Declarative approach)

> TL;DR: **We build a special callback function (using the `Function.bind` method), that works just like `Math.max` but also has `Function.apply`'s ability to take arrays as its arguments ** :smiley:

- We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.

- Now the need a callback function to find the max of each inner array provided by the map.<br>So we want to create a function that does the work of `Math.max` and accepts input as an array (which by it doesn't by default).<br><br>In other words, it would be really nice and simple if this worked by itself:
`Math.max([9, 43, 20, 6]); // Resulting in 43`<br>Alas, it doesn't.

- To do the work of accepting arguments in the shape of an array, there is this `Function.apply` method, but it complicates things a bit by *invoking* the *context* function.<br>
i.e. `Math.max.apply(null, [9, 43, 20, 6]);` would invoke something like a `Max.max` method. What we're looking for... almost. 

> Here we're passing `null` as the *context* of the `Function.apply` method as `Math.max` doesn't need any context.

- Since `arr.map` expects a callback function, not just an expression, we create a function out of the previous expression by using the `Function.bind` method. 
- Since, `Function.apply` is a static *method* of the same `Function` *object*, we can call `Function.prototype.bind` on `Function.apply` i.e. `Function.apply.bind`.

- Now we pass the *context* for the `Function.apply.bind` call (in this case we want `Math.max`so we can gain its functionality).
- Since the embedded `Function.apply` method will also require a context as it's 1st argument, we need to pass it a bogus *context*.
  - So, we pass `null` as the 2nd param to `Function.apply.bind` which gives a *context* to the `Math.max` method.
  - Since, `Math.max` is independent of any *context*, hence, it ignores the bogus *context* given by `Function.apply` method call. 
  - Thus, our `Function.apply.bind(Math.max, null)` makes a new function accepting the `arr.map` values i.e. the inner arrays.

*Bien noté*? :neutral_face:


**Reference:-**
- http://devdocs.io/#q=js+Math+max
- http://devdocs.io/#q=js+Array+map
- http://devdocs.io/#q=js+Function+apply
- http://devdocs.io/#q=js+Function+bind

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 @abhisekp @Hallaathrad for your help with Bonfire: Return Largest Numbers in Arrays`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
