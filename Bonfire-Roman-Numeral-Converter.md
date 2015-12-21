# Problem Explanation:
- You will create a program that converts an integer to a roman numeral.

## Hint: 1
- Creating an array with the Roman Numerals and one with the decimal equivalent for the new forms will be very helpful.

## Hint: 2
- If you add the numbers that go before the new letter is introduced, it will save you plenty of code, like values for 4, 9, and 40.

## Hint: 3
- You can't have more than three consecutive Roman numerals together.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

# Code Solution 1:

```js
var convert = function(num) {

  // Create arrays with default conversion with matching indices.
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  //empty string variable for the final roman number
  
  var romanized = '';

  // Loop through the indices of the decimalValue array.
  for (var index = 0; index < decimalValue.length; index++) {
    // Continue to loop while the value at the current index will fit into numCopy
    while (decimalValue[index] <= num) {
      // Add the Roman numeral & decrease numCopy by the decimal equivalent.
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};
```

# Code Explanation:
- Read comments on code.

# Code Solution 2:

```js
var convert = function(num) {

  // Create arrays with default conversion with matching indices
  var decimalNumArray = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumArray = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var resultRomanNumber = [];

  // Loop through the indices of the decimalNumArray array
  for (var index = 0; index < decimalNumArray.length; index++) {
    // Build the roman numerial while the decimal vaue from decimalNumArray is smaller or equal num
    while (decimalNumArray[index] <= num) {
      // Add the roman numeral to the romanNumber array
      resultRomanNumber.push(romanNumArray[index]);
      // Decrease num by the decimal equivalent
      num -= decimalNumArray[index];
    }
  }

  // String concatenation is slower and causes major performance problems in older versions of IE 
  // Working with arrays is a more efficient approach
  // Therefore it is highly recommended to use .push then use join("") to return a result string 
  return resultRomanNumber.join("");
};
```

# Code Explanation:
- The only differnce between Solution 1 and Solution 2 is use of an array instead of string concatenation.
- [Optimizing JavaScript code](https://developers.google.com/speed/articles/optimizing-javascript?hl=en)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: 
`Thanks @Rafase282 @SaintPeter @benschac @aganita`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
