# Explanation:
The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

## Hint: 1
You can't edit strings, you will need to create a variable to store the new string.

## Hint: 2
Create a loop to repeat the code as many times as needed.

## Hint: 3
Make the variable created store the current value and append the word to it.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function repeat(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
```

Second Solution:

```js
function repeat(str, num) {
  var newstr = [];
  for (var i = 0; i < num; i++) {
    newstr.push(str);
  };
  return newstr.join('');
}

repeat("abc", 3, "");
```

Third Solution:

```js
function repeat(str, num) {
  if (num < 0) {
    num = 0;
  }
 var str = str.repeat(num);
 return str;
}

repeat("abc", 3, "");
```
# Code Explanation:
- Create a variable to store the repeated word.
- Use a while loop or for loop to repeat code as many times as needed according to `num`
- The we just have to add the string to the variable created on step one. and increase or decrease num depending on how you set the loop.
- At the end of the loop, return the variable for the repeated word.

# Solution 3 Code Explanation:
- Create an if loop to turn negative numbers into a "0" for the variable "num".
- Create a new variable with .repeat() where variable "num" is the argument.
- Then return the new variable for the repeated word.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)