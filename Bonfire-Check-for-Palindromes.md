![](http://i.imgur.com/ozDWKEi.jpg)

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
  var reverseStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseStr;
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

## Recursive Solution
```js
function palindrome(str) {
// make all letters lowercase and remove non-alphanumeric characters
  str = str.toLowerCase();
  str = str.replace(/[^a-z|1-9]/g, "");
  
  // if the length of the string is 0 then it is a palindrome
  if (str.length === 0){
    return true;
  }
  // if the first letter and the last letter of the string do not equal eachother then it is not a palindrome
  if (str[0] !== str[str.length-1]){
    return false;
  }
  //Else, run the function without the first and last characters.
  else{
    return palindrome(str.slice(1,str.length - 1));
  }
}
```

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282 @abhisekp @shadowfool`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
