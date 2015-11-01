![](http://i.imgur.com/CgROCEF.jpg)

# Problem Explanation:
- This program is very simple, the trick is to understand what a boolean primitive is. The programs requires a true or false answer.

## Hint: 1
- You will need to check for the type of the parameter to see if it is a boolean.

## Hint: 2
- To check for the type of a parameter, you can use `typeof`

## Hint: 3
- Since you must return true or false you can use if statements or just have it return the boolean used for the if statement.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function boo(bool) {
  // Uses the operator typeof to check if is a boolean
  // if yes then return true, if it is another type then return false
  return typeof bool === 'boolean';
}
```

# Code Explanation:
- Read comments on code.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
