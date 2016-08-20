# Algorithm Mutations

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

- Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array..

#### Relevant Links

- [String.indexOf()](JS-String-Prototype-IndexOf)

## :speech_balloon: Hint: 1

- If everything is lowercase it will be easier to compare.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

- Our strings might be easier to work with if they were arrays of characters.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

- A loop might help. Use `indexOf()` to check if the letter of the second word is on the first.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

**Procedural**

```javascript
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }
```

:rocket: [Run Code](https://repl.it/CLjU/30)

### Code Explanation:

First we make the two strings in the array lowercase. `test` will hold what we are looking for in `target`.  
Then we loop through our test characters and if any of them is not found we `return false`.

If they are _all_ found, the loop will finish without returning anything and we get to `return true`.

#### Relevant Links

- [String.toLowerCase()](JS-String-Prototype-ToLowerCase)
- [For loops](JS-For-Loops-Explained)

## :sunflower: Intermediate Code Solution:

**Declarative**

```javascript
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}
```

:rocket: [Run Code](https://repl.it/CLjU/31)

### Code Explanation:

Grab the second string, lowercase and turn it into an array; then make sure _every_ one of its _letters_ is a part of the lowercased first string.

`Every` will basically give you letter by letter to compare, which we do by using `indexOf` on the first string. `indexOf` will give you -1 if the current `letter` is missing. We check that not to be the case, for if this happens even once `every` will be false.

#### Relevant Links

- [Array.split()](JS-String-Prototype-Split)
- [Array.every()](JS-Array-Prototype-Every)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @sxmxc @Rafase282 @anuragaryan @hallaathrad for your help with Algorithm: Mutations`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
