# Algorithm Spinal Tap Case

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

Convert the given string to a lowercase sentence with words joined by dashes.

#### Relevant Links

- [String global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JS Regex Resources](JS-Regex-Resources)
- [JS String Prototype Replace](JS-String-Prototype-Replace)
- [JS String Prototype ToLowerCase](JS-String-Prototype-ToLowerCase)

## :speech_balloon: Hint: 1

Create a regular expression for all white spaces and underscores.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

You will also have to make everything lowercase.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with underscores using `replace()`.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');
```

:rocket: [Run Code](https://repl.it/CLnS/0)

### Code Explanation:

- **regex** contains the regular expression `/\s+|_+/g`, which will select all white spaces and underscores.
- The first `replace()` puts a space before any encountered uppercase characters in the string **str** so that the spaces can be replaced by dashes later on.
- While returning the string, another `replace()` replaces spaces and underscores with dashes using **regex**.

## :sunflower: Intermediate Code Solution:

```javascript
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');
```

:rocket: [Run Code](https://repl.it/CLnT/0)

### Code Explanation:

- Similar to the first solution, the first `replace()` puts a space before any encountered uppercase characters in the string **str** so that the spaces can be replaced by dashes later on.
- Instead of using `replace()` here to replace whitespace and underscores with dashes, the string is `split()` on the regular expression `/(?:_| )+/` and `join()`-ed on `-`.

#### Relevant Links

- [JS String Prototype Split](JS-String-Prototype-Split)
- [JS Array Prototype Join](JS-Array-Prototype-Join)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @anuragaryan @dakshshah96 for your help with Algorithm: Spinal Tap Case`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
