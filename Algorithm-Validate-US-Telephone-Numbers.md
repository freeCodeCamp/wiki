# Problem Explanation:
- The task is not that hard to understand, implementing it is the hardest part. You have a to validate an US phone number. This means there is a certain amount of numbers required, while you don't need to put the country code, you will still need the area code and use one of the few formats allowed.

## Hint: 1
- There is no way around it, you will need to brush up your regular expressions skills.

## Hint: 2
- Try using a site like [http://regexpal.com/](http://regexpal.com/) to test the regex live while you create it.

## Hint: 3
- Start by trying to get it to validate each format from the example, each one should take a new line, once you get to select them all, then add examples that should not be selected and make sure they are not selected.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**


## Code Solution 1:

```js
function telephoneCheck(str) {
    
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
   return regex.test(str);
}

// test here
telephoneCheck("555-555-5555");
```
:rocket: [REPL It!](https://repl.it/CLo9/0)

# Code Explanation:
- `^` denotes the beginning of the string `(1\s?)?` checks allows for a "1" or a "1 " at the beginning.
- `\d{n}` checks for exactly n number of digits so  `(\(\d{3}\)|\d{3})` checks for three digits that are allowed to be between parenthesis.
- `[\s\-]?` checks for spaces or dashes between the groups of digits.
- `$` denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 a").
- Lastly we use `regex.test(str)` to test if the string adheres to the regular expression and return `true` or `false`.

## Code Solution 2:

```js
function telephoneCheck(str) {
  // Comprehensive regex from @dting 
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;

  return re.test(str);
}

// test here
telephoneCheck("555-555-5555");
```
:rocket: [REPL It!](https://repl.it/CLoa/0)

# Code Explanation
- This is an example of a very comprehensive and robust solution to validating US phone numbers client side. In such cases it might be much better and easier to implement this library [libphonenumber.](https://github.com/googlei18n/libphonenumber)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @guyjoseph @dting @jhalls @crisvdkooij for your help with Algorithm: Validate US Telephone Numbers`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
