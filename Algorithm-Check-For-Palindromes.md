# Algorithm Check for Palindromes

![](https://i.imgur.com/ozDWKEi.jpg)  

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

Our goal for solving this problem is tidying up the string passed in, and checking whether it is in fact a palindrome.

- If you are unsure of what a palindrome is, it is a word or phrase that when reversed spells the same thing forwards or backwards. A simple example is `mom`, when you reverse the letters, it spells the same thing! Another example of a palindrome is `race car`. When we take out anything that is not a character it becomes `racecar` which is the same spelled forwards or backwards!

Once we have determined whether it is a palindrome or not we want to return either `true` or `false` based on our findings.

#### Relevant Links

- [String.prototype.replace](JS-String-Prototype-Replace)
- [String.prototype.toLowerCase](JS-String-Prototype-ToLowerCase)

## :speech_balloon: Hint: 1

Regular expressions, `RegEx`, can be used to remove unwanted characters from the string.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

The `Array.prototype.split` and `Array.prototype.join` methods can be of use here. `For` and `while` loops are another alternative, or why not even `map`!

> _try to solve the problem now_

## :speech_balloon: Hint: 3

`String.prototype.toLowerCase` can be used to make a string lowercase.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}
```

:rocket: [Run Code](https://repl.it/CLjU/2)

### Code Explanation:

- We start by using regular expressions to replace any white space or non-alphanumeric characters with nothing (or `null`), which essentially removes them from the string.

- Next we _chain_ `.toLowerCase()` to remove any capital letters because `A` is a different character than `a`. The problem did not ask us to worry about making sure the case of the characters was identical, just the spelling.

- Our next step is to take our string and `.split()` it, `.reverse()` it, and finally `.join()` it back together.

- Last step is to check that the string is the same forwards and backwards and return our result!

#### Relevant Links

- [String.prototype.split](JS-String-Prototype-Split)
- [Array.prototype.reverse](JS-Array-Prototype-Reverse)
- [Array.prototype.join](JS-Array-Prototype-Join)

## :sunflower: Intermediate Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLjU/3)

### Code Explanation:

- We start by using the same methods of replacing characters we don't want in the string using `RegEx`'s, regular expressions, and then make our string lowercase.

- Next we set up our `for` loop and declare an index `i` to keep track of the loop. We set our escape sequence to when `i` is greater than the length of the string divided by two, which tells the loop to stop after the halfway point of the string. And finally we set `i` to increment after every loop.

- Inside of each loop we want to check that the letter in element `[i]` is equal to the letter in the length of the string minus i, `[str.length - i]`. Each loop, the element that is checked on both sides of the string moves closer to the center until we have checked all of the letters. If at any point the letters do not match, we return `false`. If the loop completes successfully, it means we have a palindrome and therefore we return `true`!

## :sunflower: Intermediate Code Solution (using a while loop):

```javascript
function palindrome(str) {
  str = str.replace(/[_\W+\s+]/gi,"").toLowerCase();

  var i = 0;
  var lastChar = str.length - 1;

  while (i < str.length/2) {
      if (str.charAt(i) !== str.charAt(lastChar)) {
        return false;
      }
      i++;
      lastChar--;
    }
    return true;
}

```
:rocket: [Run Code](https://repl.it/C4Hc)

### Code Explanation:

- First we remove all non-alphanumerical characters and turn the strings into lower case

- Next we declare variables that will help us run the while loop. Index 'i' starts at the beginning of the string, 'lastChar' is the last character of the string.

- Finally we set our while loop:  While 'i' is less than half of the length of the string, compare 'i' to 'lastChar'. If they are not equal, return false (not a palindrome). Increase 'i' by one (next character to be compared is [1]) and decrease 'lastChar' by 1 (next character to be compared will be str.length - 2). If matched, 'i' will again increase by one and 'lastChar' will decrease by one. The while loop will continue to run until eventually 'i' and 'lastChar' meet in the middle.

#### Relevant Links

- [Regex](JS-Regex-Resources)

## :rotating_light: Advanced Code Solution (using recursion):

```javascript
function palindrome(str) {
// make all letters lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z|0-9]/g, "");

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

:rocket: [Run Code](https://repl.it/CLjU/4)

### Code Explanation:

- This solution uses the power of recursion instead of a for loop! Our first step is to once again use `RegEx`'s to remove any characters that we do not want in the string, like whitespace or non-alphanumeric characters.

- Our next step is check if the length of the string is 0, if it is we return `true` because it is a palindrome. (this will make a little more sense after you read all the steps).

- Next we want to check that the first and last elements of the string are the same. If they are not the same, we return false which exits the function, and breaks out of the recursive loop.

- If neither of the first two conditions are met, then we assume that the two characters are equal, and we return a recursive call to the function. The difference here is that we pass the current value of `str` and we slice the first and last elements off the string. This process continues until there are no characters left to check!

#### Relevant Links

- [String.prototype.slice](JS-String-Prototype-Slice)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @Rafase282 @abhisekp @shadowfool for your help with Algorithm: Check for Palindromes`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
