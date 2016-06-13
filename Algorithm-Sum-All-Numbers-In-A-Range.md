# Algorithm Sum All Numbers in a Range

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those numbers but any numbers in between. For example, [3,1] will be the same as `1+2+3` and not just `3+1`

## :speech_balloon: Hint: 1

Use `Math.max()` to find the maximum value of two numbers.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Use `Math.min()` to find the minimum value of two numbers.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Remember to that you must add all the numbers in between so this would require a way to get those numbers.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLm6/0)

### Code Explanation:

- First create a variable to store the max number between two.
- The same as before for the Smallest number.
- We create a temporary variable to add the numbers.

Since the numbers might not be always in order, using `max()` and `min()` will help organize.

#### Relevant Links

- [Math.max()](JS-Math-Max)
- [Math.min()](JS-Math-Min)
- [For Loops](JS-For-Loop)

## :sunflower: Intermediate Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLm7/0)

### Code Explanation:

- Firstly, we create a variable called `sortedArr` which sorts it from the lowest to the highest value.
- `firstNum` is equal to the first number and `lastNum` is equal to the second number.
- Next, using the Arithmetic Progression summing formula we let `sum` equal `(lastNum - firstNum + 1) * (firstNum + lastNum) / 2`.
- Finally, we return `sum`.

The line `var sortedArr = arr.sort((a,b) => a-b);` is probably what will have you more confused. This would be the same as creating a function that returns `a-b` for the `sort()` which is the standard way to sort numbers from smallest to largest. Instead using arrow or fat arrow function, we are able to do all that in one single line thus allowing us to write less.

#### Relevant Links

- [Array.sort()](JS-Array-Prototype-Sort)
- [Arithmetic Progression summing formula](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum)
- [ES6 arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## :rotating_light: Advanced Code Solution:

```javascript
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);
```

:rocket: [Run Code](https://repl.it/CLm8/0)

### Code Explanation:

- Creating a variable sum to store the sum of the elements.
- Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
- Using a spread operator (...arr) allows passing the actual array to the function instead of one-by-one elements.

#### Relevant Links

- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Using Spread Operator in Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @Rafase282 @abhisekp for your help with Algorithm: Sum All Numbers in a Range`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
