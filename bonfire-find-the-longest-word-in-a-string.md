# Explanation:
You have to go through each word and figure out which one is the longest and return not the word, but how many characters it has.

## Hint: 1
You should split the string into an array of words.

## Hint: 2
You will need to figure out a way to keep track globally of the greatest current length.

## Hint: 3
Remember how to get the length of elements on the array? `Array[index].length`

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function findLongestWord(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
```

# Code Explanation:
Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

## Alternate Solution
Using `.reduce()`
```js
function findLongestWord(s) {return s.split(' ').reduce(function(x,y){return Math.max(x, y.length)}, 0)}
```
for more information: [Click.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
