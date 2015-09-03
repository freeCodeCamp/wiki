# Problem Explanation:
- Explain what is asked in an easy to understand way.

## Hint: 1
- Add hint here.

## Hint: 2
- Add hint here.

## Hint: 3
- Add hint here.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```
var convert = function (num){

    // Create arrays with default conversion with matching indices.
    var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    // Create a copy of num to work on and an empty string variable for the final roman number
    var numCopy = num;
    var romanized = '';

    // While the decimal number is greater than 0,
    while (numCopy > 0) {
        // Loop through the indices of the decimalValue array.
        for (var index in decimalValue){
            // Get the maximum decimal number less or equal then the decimal number.
            if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy){
                // Add the Roman numeral & decrease numCopy by the decimal equivalent.
                romanized+= romanNumeral[index];
                numCopy-= decimalValue[index];
            }
        }
    }
    return romanized;
};

convert(36);
```

# Code Explanation:
- Read comments on code

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282`
