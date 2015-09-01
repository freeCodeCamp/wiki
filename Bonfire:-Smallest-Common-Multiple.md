# **Bonfire: Smallest Common Multiple**

Find the smallest number that is evenly divisible by all numbers in the provided range.

In other words, given the range [3,7], you will need to find the least common multiple of 3, 4, 5, 6, and 7.

The range will be an array of two numbers that will not necessarily be in numerical order.

Remember to use [Read-Search-Ask](https://github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

[Smallest Common Multiple](https://www.mathsisfun.com/least-common-multiple.html)


## Hint
Here freeze a multiple candidate starting from the biggest array value - call it J 
`for (var j = max; j <= 1000000; j++){...}`

## Hint
Now you have to test your candidate
`//I increase the denominator from min to max
    for (var k = arr[0]; k <= arr[1]; k++) {

      if (j % k === 0) { // every time the modulus is 0 increase a counting 
        count++; // variable
      }`

## Final Hint
When your candidate is a multiple?
`if (count === numbers.length) { 
      multiple.push(j); 
    }
`