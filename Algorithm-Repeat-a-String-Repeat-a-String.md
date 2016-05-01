# Explanation:
The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

## Hint: 1
You can't edit strings, you will need to create a variable to store the new string.

## Hint: 2
Create a loop to repeat the code as many times as needed.

## Hint: 3
Make the variable created store the current value and append the word to it.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

####First Solution
```js
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
```

:rocket: [REPL It!](https://repl.it/CLjU/19)

####Second Solution

```js
function repeatStringNumTimes(str, num) {
  var newstr = [];
  for (var i = 0; i < num; i++) {
    newstr.push(str);
  }
  return newstr.join('');
}

repeatStringNumTimes("abc", 3);
```

:rocket: [REPL It!](https://repl.it/CLjU/20)

####Third Solution 
(using Recursion)
```js
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}
```

:rocket: [REPL It!](https://repl.it/CLjU/21)

####Fourth Solution
(Declarative approach)

```js
function repeatStringNumTimes(str, num) {
  return num >= 0 ? str.repeatStringNumTimes(num) : "";
}

repeatStringNumTimes("abc", 3);
```

:rocket: [REPL It!](https://repl.it/CLjU/22)

# Code Explanation:

####First and Second solutions
- Create a variable to store the repeated word.
- Use a while loop or for loop to repeat code as many times as needed according to `num`
- Then we just have to add the string to the variable created on step one. and increase or decrease num depending on how you set the loop.
- At the end of the loop, return the variable for the repeated word.

####Third solution
(using recursiveness)
- We check if `num` is a negative and return an empty string if true.
- Then we check if it's equal to 1 and in that case we return the string itself.
- If not, we add the string to a call of our function with `num` being decreased by 1, which will add another `str` and another until eventually `num` is 1. And return that whole process.

####Fourth solution
(Declarative approach)
- This solution is somewhat similar to the third solution, except it uses the ternary operator form of the `if` statement.
- The conditional's first statement (in this case our checking whether `num` is a negative number) is followed by `?`.
- The next statement is what to execute, or in our case return, when the condition evaluates to true.
- The final statement is what to execute, or again in our case return, if the initial statement evaluates to false.
- In between the two statements for true and false, you use a colon `:` to indicate the separation.


# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 @shadowfool @Hallaathrad @sgalizia for your help with Algorithm: Repeat a String Repeat a String`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
