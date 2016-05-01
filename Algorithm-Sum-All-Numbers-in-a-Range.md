# Problem Explanation:
- You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those numbers but any numbers in between. For example, [3,1] will be the same as `1+2+3` and not just `3+1`

## Hint: 1
- Use `Math.max()` to find the maximum value of two numbers.

## Hint: 2
- Use `Math.min()` to find the minimum value of two numbers.

## Hint: 3
- Remember to that you must add all the numbers in between so this would require a way to get those numbers.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution 1:

```js
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);
```
:rocket: [REPL It!](https://repl.it/CLm6/0)
## Code Explanation:
- First create a variable to store the max number between two.
- The same as before for the Smallest number.
- We create a temporary variable to add the numbers.

Since the numbers might not be always in order, using `max()` and `min()` will help organize.

## Code Solution 2:

```js
function sumAll(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}
```
:rocket: [REPL It!](https://repl.it/CLm7/0)

## Code Solution 3:

```js
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);
```

:rocket: [REPL It!](https://repl.it/CLm8/0)

## Code Explanation:
- Creating a variable sum to store the sum of the elements.
- Starting iteration of the loop from min element of given array and stopping when it reaches the max element. 
- Using a spread operator (...arr) allows passing the actual array to the function instead of one-by-one elements.

## References & Details:
- [Arithmetic Progression summing formula](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum)
- [ES6 arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Using Spread Operator in Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

The line `var sortedArr = arr.sort((a,b) => a-b);` is probably what will have you more confused. This would be the same as creating a function that returns `a-b` for the `sort()` which is the standard way to sort numbers from smallest to largest. Instead using arrow or fat arrow function, we are able to do all that in one single line thus allowing us to write less.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @abhisekp for your help with Algorithm: Sum All Numbers in a Range`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
