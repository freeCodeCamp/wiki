![](http://i.imgur.com/Z7vhddH.jpg)

# Explanation:
The function is a whole Boolean operation. You need to return true if the first argument ends with the second argument. This means that for the problem script, it should return true for the `confirmEnding('Bastian', 'n'); case.`

## Hint: 1
Take a look at how substr() works. You will be trying to get the last Nth characters.

## Hint: 2
To get the Nth-to-Last character you will use length() and turn it into a negative number.

## Hint: 3
Check that you have the proper syntax and that you use `===` to compare.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/18)

# Code Explanation:
We use the subtring() with the negative value of the lengths of target. We could use -1 to get the last element but if the target is actually longer than one letter then the program will provide the wrong information. Then we return the value of this boolean expression.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 for your help with Algorithm: Confirm the Ending`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
