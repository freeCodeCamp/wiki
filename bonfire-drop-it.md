# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

# [My Original Wiki](http://rafase282.github.io/My-FreeCodeCamp-Code/)

# Details

* Difficulty: 2/5

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
Remember to use [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-I-get-stuck) if you get stuck. Try to pair program. Write your own code.

# Useful Links

* [Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
* [Array.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

# Problem Script:

```
function drop(arr, func) {
  // Drop them elements.
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
```

## Explanation:

Basically while the second argument is not true, you will have to remove the first element from the left of the array that was passed as the first argument.

## Hint: 1
You can use Array.shift() or filter that you should be more familiar with to solve this problem in a few lines of code.

## Hint: 2
Shift returns the element that was removed which we don't really need, all we need is the modified array that is left.

## Hint: 3
If you still can't figure out how to solve it with shift, then try solving it with filter, and check how filter works, if you become familiar with it, then you can make the code with shift.

## My code:

```
function drop(arr, func) {
  return arr.filter(func);
}

drop([1, 2, 3], function(n) {return n < 3; });
```

## My Code Explanation:

* I used filter as I was more familiar with it.
* I have it filter the array to remove the elements that needs to be removed.