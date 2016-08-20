# Algorithm Wherefore Art Thou

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

Write an algorithm that will take an `array` for the first argument and return an `array` with all the `object`s that matches all the properties and values in the `Object` passed as second parameter.

#### Relevant Links

- [For Loops](JS-For-Loop)
- [Array.prototype.filter()](JS-Array-Prototype-Filter)
- [Object.hasOwnProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## :speech_balloon: Hint: 1

You may use `for` loop or the `Array.prototype.filter` method.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Try to use the `Object.prototype.hasOwnProperty` method to know if the property name exists in an object (as its own property).

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Check equivalence of `Object` in `collection` with `Object` passed as second parameter to `whatIsInAName` function.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

:rocket: [Run Code](https://repl.it/CLmh/0)

### Code Explanation:

- We filter through the array using `.filter()`.
- Using a `for loop` we loop through each item in the object.
- We use a `if statement` to check if the object in the collection doesn't have the key and the property value doesn't match the value in source.
- We return `false` if the above `if statement` is correct. Otherwise, we return `true`;

#### Relevant Links

- [For Loops](JS-For-Loop)
- [Array.prototype.filter()](JS-Array-Prototype-Filter)
- [Object.hasOwnProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## :sunflower: Intermediate Code Solution:

```javascript
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

:rocket: [Run Code](https://repl.it/CLmi/0)

### Code Explanation:

- We filter through the collection using `.filter()`.
- Next, we return a `Boolean` value for the `.filter()` method.
- Finally, we reduce to `Boolean` value to be returned for the `.every()` method.

#### Relevant Links

- [Array.prototype.filter()](JS-Array-Prototype-Filter)
- [Array.prototype.every()](JS-Array-Prototype-Every)
- [Object.hasOwnProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## :rotating_light: Advanced Code Solution:

```javascript
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    return srcKeys.reduce(function (res, key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    }, false);
  });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

:rocket: [Run Code](https://repl.it/CLmj/0)

### Code Explanation:

- We start by filtering through `collection` using `Array.filter()`.
- Next, we return a `Boolean` value for the filter callback using `.reduce()`.
- We reduce to `Boolean` value to be returned by `.reduce()`.

#### Relevant Links

- [Array.prototype.filter()](JS-Array-Prototype-Filter)
- [Array.prototype.reduce()](JS-Array-Prototype-Reduce)
- [Object.hasOwnProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @abhisekp @dting @coded9 for your help with Algorithm: Wherefore Art Thou`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
