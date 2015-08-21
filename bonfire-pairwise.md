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

Remember to return the smaller sum if multiple are possible. This mean ```[1,1,1],1 should use 0 + 1 instead of 0+1 & 1 +1 , etc```

## Hint: 2
Try using an array of indices to track when an index has been used or not.

## Hint: 3
It is easy to confuse indices as being numbers, but since you will be interacting with them, make sure to work with them as integers to prevent the code from behaving erratically.

# My code

```
function pairwise(arr, arg) {
    var index = [];
    for (var a in arr){
        var temp = arr[a];
        for (var i=1; i < arr.length; i++) {
            var temp2 = arr[i];
            if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1){
                index.push (+a,+i);
            }
        }
    }
    if (index.length >= 1) {
        return index.reduce(function(a, b){
          return a + b;
        });
    } else {
        return 0;
    }
}
```
# Code Explained

* First I create an empty array to store the indices that i will be adding.
* Then I create an outer loop to get the first number.
* Then get the second number from another inner loop.
* Then I check to make sure that the two numbers add to arg that was passed as a parameter to the function; we also have to make sure the index from the second loop is grater than the one from the first loop to avoid adding wrong indices. We also have to check to make sure the indices are not already part of the **index** array.
* If all that is true, then we add the two indices as integer by using '+' or parseInt(), and then we stop the inner loop since everything else would be redundant and wrong.
* After all the loops are over, check in **index** is empty, if it is then return 0, otherwise return the addition of all the integers in it using Array.reduce(callbackFunc) to return the sum of the numbers.