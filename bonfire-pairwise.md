# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

# [My Original Wiki](http://rafase282.github.io/My-FreeCodeCamp-Code/)

# Details

* Difficulty: 3/5

Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!

Remember to use [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-I-get-stuck) if you get stuck. Try to pair program. Write your own code.

# Useful Links

* [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

# Problem Script:

```
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

## Explanation:

The program should look for the numbers in the array which would add to make the number from the **arg.** Then instead of adding those numbers up, you will add their **indices** which is the reason why you get 11 on the example from detail.

Remember that arrays start at index 0 and go from there so from [1,4,2,3,0,5] if we switch to their indices it would be [0,1,2,3,4,5] then we add indices 1 + 2 + 3 + 5 and we get 11. That is what we need to return.

## Hint: 1

soon

## Hint: 2
soon

## Hint: 3
soon

# My code

```
soon to come
```
