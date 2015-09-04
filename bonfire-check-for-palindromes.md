# Explanation:
You have to check if the string you get as an input is a palindrome and return true if it is, and false otherwise.

## Hint: 1
Make sure to turn the string to lowercase.

## Hint: 2
You will need to use split() and join()

## Hint: 3
Using regular expressions to change to lowercase will make things easier and the code simpler.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## First

```js
function palindrome(str) {
  str = str.replace(/[^a-zA-Z]/g,'').toLowerCase();
  if (str === str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
```

## Second

```js
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}
```

# Code Explanation:
We use regular expressions to replace any uppercase letter into a lowercase. Then we check if the string is the same as the reversed string using `split()` to split the original string by characters, then reverse and then join it back together.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282`