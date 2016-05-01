![](http://i.imgur.com/usiNBDU.jpg)

# Problem Explanation:
- You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

## Hint: 1
- There are two base case, A-T and C-G, these go both way. You can use regular expression, if statements of anything that you can think of.

## Hint: 2
- I would recommend using a switch, as it makes things a lot smoother.

## Hint: 3
- The result must be an array of arrays, so keep that in mind when pushing things.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

### Solution 1
```js
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");
```
:rocket: [REPL It!](https://repl.it/CLmz/0)

# Code Explanation:
- The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
- Since we have to the original and the pair, I decided to take all four cases instead of the base two.
- Create an empty array and use the `search` function to push the right values to the array and return them.

### Solution 2
```js
function pairElement(str) {
  //define a map object with all pair possibilities 
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}

// test here
pairElement("GCG");
```
:rocket: [REPL It!](https://repl.it/CLnA/0)

# Code Explanation:
- Read the comments

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @sabahang for your help with Algorithm: DNA Pairing`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
