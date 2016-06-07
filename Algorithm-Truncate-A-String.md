# Algorithm Truncate a String

### Explanation:

We need to reduce the length of the string or **truncate** it if it is longer than the given maximum lengths specified and add `...` to the end. If it is not that long then we keep it as is.

## Hint: 1

Strings are immutable in JavaScript so we will need a new variable to store the truncated string.

## Hint: 2

You will need to use the [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method and specify where to start and where to stop.

## Hint: 3

Do not forget that when we truncate the word, we also must count the length added by `...`

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```javascript
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
```

:rocket: [Run Code](https://repl.it/CLjU/54)

## Code Explanation:

- First we need an if-statement to test if the length of the full string passed in as the first argument already fits within the size limit passed in as the second argument. If so we can just return the string that was passed in.

```javascript
if (str.length <= num)
  return str;
```

- If our ```if``` statement above fails, we move to the ```else```, where we are going to return a "slice" of the string. The slice method extracts a section of a string and returns a new string. Here we pass 0 as the starting point for our slice. To determine the endpoint, we use a ternary operator: ```num > 3 ? num - 3 : num```. In our ternary, if ```num``` is larger than 3, we must factor in the three dots to our total length, and thus we end our slice at ```num-3```. If num is less than or equal to 3, our slice gets an end variable of just ```num```. Finally, the ```'...'``` is appended to the end of our new string and is returned.

```javascript
} else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
```

- **NOTE** In order to understand the above code, you need to understand how a [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) works. The Ternary Operator is frequently used as a shortcut for the ```if``` statement and follows this format: ```condition ? expr1 : expr2```. If the ```condition``` evaluates to true, the operator returns the value of ```expr1```. Otherwise, it returns the value of ```expr2```.

**Reference:-**
- [Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 @richyvk @ltegman @bmorelli25 for your help with Algorithm: Truncate a String`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
