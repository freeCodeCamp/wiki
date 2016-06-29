# Algorithm Falsy Bouncer

![](https://i.imgur.com/GluUbAz.jpg)

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

Remove all [falsy](JS-Falsy) values from an array.

#### Relevant Links

- [Falsy Values](JS-Falsy)

## :speech_balloon: Hint: 1

Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values...

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Then we need to add a `filter()` with the falsy values function...

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :rotating_light: Advanced Code Solution:

```javascript
function bouncer(arr) {
  return arr.filter(Boolean);
}
```

:rocket: [Run Code](https://repl.it/CLjU/32)

### Code Explanation:

The `Array.prototype.filter` method expects a function that returns a `Boolean` value which takes a single argument and returns `true` for [truthy](JS-Truthy) value or `false` for [falsy](JS-Falsy) value. Hence we pass the built-in `Boolean` function.

#### Relevant Links

- [Boolean](JS-Boolean)
- [Truthy](JS-Truthy)
- [Array.prototype.filter()](JS-Array-Prototype-Filter)

## :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat: 

**`Thanks @renelis @abhisekp @Rafase282 for your help with Algorithm: Falsy Bouncer`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
