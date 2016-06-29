# Algorithm Boo Who

![](https://i.imgur.com/CgROCEF.jpg)

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### Problem Explanation:

This program is very simple, the trick is to understand what a boolean primitive is. The programs requires a true or false answer.

#### Relevant Links

- [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## :speech_balloon: Hint: 1

- You will need to check for the type of the parameter to see if it is a boolean.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

- To check for the type of a parameter, you can use `typeof`.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

- Since you must return true or false you can use if statements or just have it return the boolean used for the if statement.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function booWho(bool) {
  return typeof bool === 'boolean';
}

// test here
booWho(null);
```

:rocket: [Run Code](https://repl.it/CLnK/0)

# Code Explanation:

Uses the operator `typeof` to check if the variable is a boolean. If it is, it will return `true`. Otherwise, if it is any other type it will return `false`.

#### Relevant Links

- [Using typeof](Challenge-Using-Typeof.md)
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @Rafase282 for your help with Algorithm: Boo-who`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution.md) for reference.
