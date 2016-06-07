# Algorithm Truncate a String

### Explanation:

We need to reduce the length of the string or **truncate** it if it is longer than the given maximum lengths specified and add `...` to the end. If it is not that long then we keep it as is.

## Hint: 1

Strings are immutable in JavaScript so we will need a new variable to store the truncated string.

## Hint: 2

You will need to use slice() or substr() method and specify where to start and where to stop.

## Hint: 3

Do not forget that when we truncate the word, we also must count the length added by `...`

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Basic Solution:

```javascript
function truncateString(str, num) {
  if (str.length <= num)
    return str;

  if (num <= 3)
    return str.substr(0,num) + "...";

  return str.substr(0,num-3) + "...";
}
```

:rocket: [Run Code](https://repl.it/CLjU/23)

## Code Explanation:

First we need an if-statement to test if the length of the full string passed in as the first argument already fits within the size limit passed in as the second argument. If so we can just return the string that was passed in.

```javascript
if (str.length <= num)
  return str;
```

Then we need to check if the num fits into our special case, where the desired length is less than or equal to three. In this case we will return the string trimmed to our target length, followed by `"..."`. We don't need to worry about the `"..."` being counted against the length of our output string in this case.

```javascript
if (num <= 3)
  return str.substr(0,num) + "...";
```

Finally, we write the return for what happens when neither of the previous if-statements have been true. This call to `substr()` gives us a string that is 3 less than the target length specified by `num`, which is done so that we have room to add on the `"..."` and fit within that target.

```javascript
return str.substr(0,num-3) + "...";
```

## Advanced Solution:

```javascript
function truncateString(str, num) {
  return str.length <= num ? str : (str.slice(0, (num <= 3) ? num : num-3) + "...");
}
```

:rocket: [Run Code](https://repl.it/CLjU/53)

## Code Explanation:

- In order to understand this code, you first need to understand how a [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) works. The Ternary Operator is frequently used as a shortcut for the ```if``` statement and follows this format: ```condition ? expr1 : expr2```. If the ```condition``` evaluates to true, the operator returns the value of ```expr1```. Otherwise, it returns the value of ```expr2```.
- First we test ```(str.length <= num)```. If this evaluates to true, we simply return ```(str)``` and the function exits.
- However, if ```(str.length <= num)``` evaluates to false, we run the second half of the code: ```(str.slice(0, (num <= 3) ? num : num-3) + "...")```
- The slice method extracts a section of a string and returns a new string. Here we pass 0 as the starting point for our slice. To determine the endpoint, we use a nested ternary operator: ```(num <= 3) ? num : num-3```. If ```num``` is less than or equal to 3, our slice gets an end variable of ```num```. If ```num``` is larger than 3, we must factor in the three dots to our total length, and thus we end the slice at ```num-3```.

**Reference:-**
- [Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 @richyvk @ltegman @bmorelli25 for your help with Algorithm: Truncate a String`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
