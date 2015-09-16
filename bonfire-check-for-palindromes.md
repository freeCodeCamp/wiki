# Explanation:
You have to check if the string you get as an input is a palindrome and return `true` if it is, and `false` otherwise.

## Hint: 1
You may use regular expressions (`RegExp`) to remove unwanted characters from the string.
- [http://devdocs.io/#q=js+RegExp](http://devdocs.io/#q=js+RegExp)

## Hint: 2
You may use `Array.prototype.split` and `Array.prototype.join` methods or `for` loop.
- [http://devdocs.io/#q=js+String+split](http://devdocs.io/#q=js+String+split)
- [http://devdocs.io/#q=js+Array+join](http://devdocs.io/#q=js+Array+join)
- [http://devdocs.io/#q=js+for](http://devdocs.io/#q=js+for)

## Hint: 3
You may lowercase the string using `String.prototype.toLowerCase`.
- [http://devdocs.io/#q=js+String+toLowerCase](http://devdocs.io/#q=js+String+toLowerCase)

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## First

```js
function palindrome(str) {
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
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

```js
function palindrome(str) {
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseStr;
}
```

# Code Explanation:
We use regular expressions to replace any uppercase letter into a lowercase. Then we check if the string is the same as the reversed string using `split()` to split the original string by characters, then reverse and then join it back together.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282 @abhisekp`
