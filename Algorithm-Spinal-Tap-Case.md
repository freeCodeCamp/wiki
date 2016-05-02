# Problem Explanation:
- Convert the given string to an all lowercase sentence joined by dashes.

## Hint: 1
- Create a regex to for all white spaces and underscores.

## Hint: 2
- You will also have to make everything lowercase.

## Hint: 3
- The tricky part is getting the regex part to work, once you do that then just turn the uppercase to lowercase and replace spaces with underscores using `replace()`

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:
#### First solution

```js
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');
```
:rocket: [REPL It!](https://repl.it/CLnS/0)

#### Second solution
```js
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');
```
:rocket: [REPL It!](https://repl.it/CLnT/0)

# Code Explanation:
#### First and Second solutions
- Read comments in code.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @anuragaryan for your help with Algorithm: Spinal Tap Case`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
