# Explanation:
This particular problem can be confusing because most people look for the smallest common multiple of the two number but forget the keyword **range.** This means that if you get `[1,5]` then you have to check for the smallest common multiple for all these numbers [1,2,3,4,5] that is evenly divisible by all of them.

## Hint: 1
Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.

## Hint: 2
You can use modulo `%` to check if the reminder is 0, which means it is evenly divisible.

## Hint: 3
If you sort the array from greater to lowest then you can check for the first two numbers as it is more likely to the the smallest common multiple than the lower numbers.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // run code while n is not the same as the array length.
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
```

# Code Explanation:
- Because the possibility of the smallest common denominator being among the two biggest numbers, it makes sense to check those first, so sort the array.
- Create a new array to sore all the numbers.
- Use a descending for loop to add the numbers from the biggest to the smallest in the new array.
- Declare the variables for the quotient, the number of loops and the variable that we will use in a for loop on another scope, this will allow us access outside the loop.
- Use a do while loop to check what we need while **n** is not the same length as the new array.
- In the **do** part, we are going to multiply the very first number, times the number of loops, times the second number.
- The loop part will allows us to increase the number beyond the greatest number we have without having to change the algorithm.
- We enter a for loop that will go from n being 2 and going up by one while it is smaller than the array with all the numbers.
- If the quotient is not even then stop the loop. If it is even then it check for the next elements in the array until it is not even or we find our answer.
- Outside the loop, increase the value of loop.
- At the end of the loop return the quotient.

If the array only has two elements then the for loop never gets used and the return value is the product of said numbers. Otherwise, from the third element and until n is the same and the array length check if the reminder of the quotient and the third value of the array is not 0, if it is not 0 then stop loop increases and then we start over. If the reminded was 0 then keep checking until the end of the array.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @Adoyle2014`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
