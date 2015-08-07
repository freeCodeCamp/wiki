![](http://i.imgur.com/CuXtGin.jpg)

Our goal for this bonfire is to split `arr` (first argument) into smaller chunks of arrays with the length provided by `size` (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this bonfire:

1. `(['a', 'b', 'c', 'd'], 2)` is expected to be `[['a', 'b'], ['c', 'd']]`
2. `([0, 1, 2, 3, 4, 5], 3)` is expected to be `[[0, 1, 2], [3, 4, 5]]`
3. `([0, 1, 2, 3, 4, 5], 2)` is expected to be `[[0, 1], [2, 3], [4, 5]]`
4. `([0, 1, 2, 3, 4, 5], 4)` is expected to be `[[0, 1, 2, 3], [4, 5]]`

Click **More information** under the bonfire title and read the helpful links if you haven't yet. 
&nbsp;

## How to approach the bonfire

The helpful links suggest to use `Array.push()` so let's start by first creating a new array to store the smaller arrays we will soon have like this: 

    var newArray = [];

&nbsp;
Next we'll need a `for loop` to loop through `arr` then finally we need a method to do the actual splitting and we can use `Array.slice()` to do that. The key to this bonfire is understanding how a `for loop`, `size`, `Array.slice()` and `Array.push()` all work together.
&nbsp;

## How does a for loop and Array.slice() work

**For Loop**

A `for loop` keeps looping until a condition evaluates to false for example if we had: 

    for (var i = 0; i < arr.length; i++) 

&nbsp;
`i` starts with a value of 0, `i` loops until `i` is no longer less than the length of `arr` and during each repeat loop, the value of `i` increases by 1 (one). If `arr.length` happens to be 4 then the `for loop` stops right before `i` reaches 4.
&nbsp;

**Array.slice() Method**

`Array.slice()` method extracts a portion of an array and returns a copy into a new array. We can declare which element to start and which element to stop. For example, if `arr` is `['a', 'b', 'c', 'd']` and we used `arr.slice(1, 3);`, the `Array.slice()` method starts at element 1 and stops at element 3 then returns: 
```js
["b","c"]
``` 
_Notice how it captures the start element but doesn't capture the stop element._
&nbsp;

## Using a for loop and Array.slice() together

If we use the following `for loop` while `size` is 2 (note: `size` = 2):

    (var i = 0; i < arr.length; i += size)

&nbsp;
The loop starts at element 0, loops once then `i += 2` which is another way of stating `i = i + 2` so now the new value of `i` becomes 2. What happens if we combine the following `arr.slice()` with the `for loop`?
```js
arr.slice(i, i + size)
```
&nbsp;

## Push the arrays out 

We can combine the `Array.slice()` method with the `Array.push()` method inside the `for loop` like this:

    for (var i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size)); 
    }

&nbsp;
`arr.slice()` will start at element 0 and stop at element 2. Here's the fun part: once the `for loop`, loops again then the value of `i` becomes 2 while the `i` in the `arr.slice()` will also have a value of 2. The new `arr.slice()` becomes:

    arr.slice(2, 2 + 2)

&nbsp;
Now `arr.slice()` starts at the element 2 and stops at element 4 and in the next loop, `arr.slice()` will start at element 4 and stop at element 6. `newArray.push()` will push all the elements out into chunks of smaller arrays with the length of `size`.
&nbsp;