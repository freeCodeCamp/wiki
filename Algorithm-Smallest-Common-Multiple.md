# Algorithm Smallest Common Multiple

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

The smallest common multiple between two numbers is the smallest number that both numbers can divide into. This concept can be extended to more than two numbers as well.

We can first start with just finding the smallest common multiple between two numbers. Naively, you can start writing out multiple of each number until you write a multiple that exists from both numbers.

An example would be the numbers `3` and `4`. The multiples of `3` are `3, 6, 9, 12, 15, 18, ...` and the multiples of `4` are `4, 8, 12, 16, 20, ...`. The first smallest number we run into in both lists is `12` so this is the smallest common multiple between `3` and `4`.

This problem can be confusing because most people look for the smallest common multiple of just the two numbers but forget the keyword **range**. However, this means that if you are given `[1,5]`, then you have to check for the smallest common multiple for all the numbers `[1,2,3,4,5]` that is evenly divisible by all of them.

#### Relevant Links

- [Least (Smallest) Common Multiple](https://en.wikipedia.org/wiki/Least_common_multiple)

## :speech_balloon: Hint: 1

Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

You can use remainder operator (`%`) to check if the reminder of a division is 0, which means it is evenly divisible.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

If you sort the array from greatest to smallest, then you can use the first two numbers as a first check for the smallest common multiple. This is because they are more likely to be the smallest common multiple than the lower numbers.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1,5]);
```

:rocket: [Run Code](https://repl.it/CLn2/0)

### Code Explanation:

- Because of the possibility of the smallest common denominator being among the two biggest numbers, it makes sense to check those first, so sort the array.
- Create a new array to sort all the numbers, `newArr`.
- Use a descending `for` loop (`var i = arr[0]; i >= arr[1]; i--`) to add the numbers from the biggest to the smallest in the new array.
- Declare the variables for the quotient so we can access them outside the loop:
  - the quotient that'll be our smallest common multiple (`quot`)
  - the loop number we're checking (`loop`)
  - the index of the array of numbers (`n`)
- Use a `do` `while` loop to check what we need while `n` is not the same length as the new array.
- In the `do` part, we are going to multiply the very first number, times the number of loops, times the second number (`quot = newArr[0] * loop * newArr[1];`).
- The `loop` part will allows us to increase the number we're checking beyond the greatest number we have without having to change the algorithm.
- We enter a `for` loop that will go from `n` being 2 and going up by one (`loop++`) while it is smaller than the array with all the numbers (`n < newArr.length`).
- If the quotient does not divide evenly (`quot % newArr[n] !== 0`), then stop the loop (`break;`). If it is even, then check for the next elements (`n++`) in the array until it is not even or we find our answer.
- Outside the loop, increase the value of loop (`loop++`).
- At the end of the loop return the quotient (`return quot;`).

Note: If the array only has two elements, then the `for` loop never gets used and the return value is the product of said numbers.

#### Relevant Links

- [JS Array Prototype Sort](JS-Array-Prototype-Sort)
- [JS For Loops Explained](JS-For-Loops-Explained)
- [JS Array Prototype Push](JS-Array-Prototype-Push)
- [JS Do While Loop](JS-Do-While-Loop)
- [String.length](String.length)

## :sunflower: Intermediate Code Solution:

```javascript
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);
```

:rocket: [Run Code](https://repl.it/CLn4/0)

### Code Explanation:

- The first, basic solution requires over 2,000 loops to calculate the test case `smallestCommons([1,13])`, and over 4 million loops to calculate `smallestCommons([1,25])`. This solution evaluates `smallestCommons([1,13])` in around 20 loops and `smallestCommons([1,25])` in 40, by using a more efficient algorithm.
- Make an empty array **range**.
- All numbers between the given range are pushed to **range** using a `for` loop.
- The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.

#### Relevant Links

- [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm)
- [JS Math Max](JS-Math-Max)
- [JS Math Min](JS-Math-Min)

## :rotating_light: Advanced Code Solution:

```javascript
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    return range.reduce(function(previousValue, currentValue) {
    var gcdPrevCurr = gcd(previousValue, currentValue);
    return (previousValue * currentValue) / gcdPrevCurr;
    });

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);
```

:rocket: [Run Code](https://repl.it/CLn3/0)

### Code Explanation:

- Make an empty array **range**.
- All numbers between the given range are pushed to **range** using a `for` loop.
- Unlike the intermediate solution, the `.reduce()` method is used for the implementation of Euclidean algorithm here. There's no other difference between the intermediate and advanced solutions.

#### Relevant Links

- [JS Array Prototype Reduce](JS-Array-Prototype-Reduce)
- [JS Reduce Made Easy](JS-Reduce-Made-Easy)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @Adoyle2014 @erictleung for your help with Algorithm: Smallest Common Multiple`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
