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

**Solution ahead!**

## Code Solution:

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

# Code Explanation:
- Create a variable to store the results as an array.
- Create an outer loop to iterate through the main array.
- Before going into the inner loop, create a variable to hold the largest number. This must be outside the inner loop.
- Create another for loop to work with the sub-arrays.
- Check if the element of the sub array is larger than the current largest number. If so, then save the number.
- After the inner loop, save the largest number in the variable for the results.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
