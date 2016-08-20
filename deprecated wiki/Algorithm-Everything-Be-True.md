# Algorithm Everything Be True

![](https://i.imgur.com/oKEJJJI.jpg)

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

The program needs to check if the second argument is a [truthy](JS-Truthy) element, and it must check this for each object in the first argument.

#### Relevant Links

- [JavaScript Truthy](JS-Truthy)
- [JavaScript Arguments](JS-Arguments.md)

## :speech_balloon: Hint: 1

Remember to iterate through the first argument to check each object.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Only if all of them are truth will we return true, so make sure all of them check.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

> _try to solve the problem now_

You could use loops or callbacks functions, there are multiple ways to solve this problem.

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solutions ahead!**

## :beginner: Basic Code Solution:

**Using for-in loop & hasOwnProperty**

```javascript
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

:rocket: [Run Code](https://repl.it/CLnw/0)

### Code Explanation:

- First I create a counter to check how many cases are actually true.
- Then check for each object if the value is truthy
- Outside the loop, I check to see if the counter variable has the same value as the length of **collection**, if true then return **true**, otherwise, return **false**

#### Relevant Links

- [JS Loops](JS-Loops)
- [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## :sunflower: Intermediate Code Solution:
**Using Array.every()**

```javascript
function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

:rocket: [Run Code](https://repl.it/CLny/0)

### Code Explanation:

- Uses the native "every" method to test whether all elements in the array pass the test.
- This link will help [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### Relevant Links

- [JS Array.prototype.every()](JS-Array-Prototype-Every)
- [MDN Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## :rotating_light: Advanced Code Solution:

**Using Array.reduce**

```javascript
function truthCheck(collection, pre) {
  return collection.reduce(function(acc, next) {
    if (next[pre]) {
      return acc;
    } 
    else {
      acc = false;
      return acc;
    }
  },true);
}

// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

:rocket: [Run Code](https://repl.it/CLnv/0)

### Code Explanation:

- Set initial reduce value to true.
- Change it to false only when there is no key of a given name or it's falsy. Otherwise stick to the initial truthy value.

#### Relevant Links

- [JS Reduce Made Easy](JS-Reduce-Made-Easy)
- [JS Array Reduce](JS-Array-Prototype-Reduce)

## :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat: 

**`Thanks @Rafase282 @estevanmaito @HermanFassett for your help with Algorithm: Everything Be True`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
