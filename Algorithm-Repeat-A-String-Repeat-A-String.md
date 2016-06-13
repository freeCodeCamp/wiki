# Algorithm Repeat a String

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

#### Relevant Links

- [Global String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## :speech_balloon: Hint: 1

You can't edit strings, you will need to create a variable to store the new string.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Create a loop to repeat the code as many times as needed.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Make the variable created store the current value and append the word to it.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
```

:rocket: [Run Code](https://repl.it/CLjU/19)

### Code Explanation:
- Create an empty string variable to store the repeated word.
- Use a while loop or for loop to repeat code as many times as needed according to `num`
- Then we just have to add the string to the variable created on step one, and increase or decrease `num` depending on how you set the loop.
- At the end of the loop, return the variable for the repeated word.

#### Relevant Links

- [JS while Loop](JS-while-Loop)
- [JS For Loops Explained](JS-For-Loops-Explained)

## :sunflower: Intermediate Code Solution:

```javascript
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}
```

:rocket: [Run Code](https://repl.it/CLjU/21)

### Code Explanation:
- This solution uses recursion.
- We check if `num` is negative and return an empty string if true.
- Then we check if it's equal to 1 and in that case we return the string itself.
- If not, we add the string to a call of our function with `num` being decreased by 1, which will add another `str` and another.. until eventually `num` is 1. And return that whole process.

#### Relevant Links

- [Functions - Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## :rotating_light: Advanced Code Solution:

```javascript
function repeatStringNumTimes(str, num) {
  return num >= 0 ? str.repeatStringNumTimes(num) : "";
}

repeatStringNumTimes("abc", 3);
```

:rocket: [Run Code](https://repl.it/CLjU/22)

### Code Explanation:
- This solution takes a declarative approach.
- It is similar to the third solution, except it uses the ternary operator form of the `if` statement.

#### Relevant Links

- [JS Ternary](JS-Ternary)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @shadowfool @Hallaathrad @sgalizia for your help with Algorithm: Repeat a String Repeat a String`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
