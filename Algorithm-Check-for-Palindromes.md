![](http://i.imgur.com/ozDWKEi.jpg)

# Explanation:
Our goal for solving this problem is tidying up the string passed in, and checking whether it is in fact a palindrome.
- If you are unsure of what a palindrome is, it is a word or phrase that when reversed spells the same thing forwards or backwards. A simple example is `mom`, when you reverse the letters, it spells the same thing! Another example of a palindrome is `race car`. When we take out anything that is not a character it becomes `racecar` which is the same spelled forwards or backwards!

Once we have determined whether it is a palindrome or not we want to return either `true` or `false` based on our findings.

## Hint: 1
Regular expressions, `RegEx`, can be used to remove unwanted characters from the string.
- [http://devdocs.io/#q=js+RegExp](http://devdocs.io/#q=js+RegExp)

## Hint: 2
The `Array.prototype.split` and `Array.prototype.join` methods can be of use here. `For` and `while` loops are another alternative, or why not even `map`!
- [http://devdocs.io/#q=js+String+split](http://devdocs.io/#q=js+String+split)
- [http://devdocs.io/#q=js+Array+join](http://devdocs.io/#q=js+Array+join)
- [http://devdocs.io/#q=js+for](http://devdocs.io/#q=js+for)

## Hint: 3
`String.prototype.toLowerCase` can be used to make a string lowercase.
- [http://devdocs.io/#q=js+String+toLowerCase](http://devdocs.io/#q=js+String+toLowerCase)

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## First Solution

```js
function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}
```

:rocket: [REPL It!](https://repl.it/CLjU/2)

## Second Solution

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

:rocket: [REPL It!](https://repl.it/CLjU/3)

## Third Solution
(using recursion)
```js
function palindrome(str) {
// make all letters lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z|1-9]/g, "");

  // if the length of the string is 0 then it is a palindrome
  if (str.length === 0){
    return true;
  }
  // if the first letter and the last letter of the string
  // do not equal each other, then it is not a palindrome
  if (str[0] !== str[str.length-1]){
    return false;
  }
  //Else, run the function without the first and last characters.
  else{
    return palindrome(str.slice(1,str.length - 1));
  }
}
```

:rocket: [REPL It!](https://repl.it/CLjU/4)

# Code Explanation:

## First Solution
- We start by using regular expressions to replace any white space or non-alphanumeric characters with nothing (or `null`), which essentially removes them from the string.

- Next we *chain* `.toLowerCase()` to remove any capital letters because `A` is a different character than `a`. The problem did not ask us to worry about making sure the case of the characters was identical, just the spelling.

- Our next step is to take our string and `.split()` it, `.reverse()` it, and finally `.join()` it back together.

- Last step is to check that the string is the same forwards and backwards and return our result!

## Second solution
- We start by using the same methods of replacing characters we don't want in the string using `RegEx`'s, regular expressions, and then make our string lowercase.

- Next we set up our `for` loop and declare an index `i` to keep track of the loop. We set our escape sequence to when `i` is greater than the length of the string divided by two, which tells the loop to stop after the halfway point of the string. And finally we set `i` to increment after every loop.

- Inside of each loop we want to check that the letter in element `[i]` is equal to the letter in the length of the string minus i, `[str.length - i]`. Each loop, the element that is checked on both sides of the string moves closer to the center until we have checked all of the letters. If at any point the letters do not match, we return `false`. If the loop completes successfully, it means we have a palindrome and therefore we return `true`!

## Third Solution

- This solution uses the power of recursion instead of a for loop! Our first step is to once again use `RegEx`'s to remove any characters that we do not want in the string, like whitespace or non-alphanumeric characters.

- Our next step is check if the length of the string is 0, if it is we return `true` because it is a palindrome. (this will make a little more sense after you read all the steps).

- Next we want to check that the first and last elements of the string are the same. If they are not the same, we return false which exits the function, and breaks out of the recursive loop.

- If neither of the first two conditions are met, then we assume that the two characters are equal, and we return a recursive call to the function. The difference here is that we pass the current value of `str` and we slice the first and last elements off the string. This process continues until there are no characters left to check!

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 @abhisekp @shadowfool for your help with Algorithm: Check for Palindromes`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
