![](http://i.imgur.com/IUY2p6Y.jpg)

# Problem Explanation
Write an algorithm that will take an `array` for the first argument and return an `array` with all the  `object`s that matches all the properties and values in the `Object` passed as second parameter.

## Hint: 1
You may use `for` loop or the `Array.prototype.filter` method.
- [http://devdocs.io/#q=js+for](http://devdocs.io/#q=js+for)
- [http://devdocs.io/#q=js+Array+filter](http://devdocs.io/#q=js+Array+filter)

## Hint: 2
Try to use `Object.prototype.hasOwnProperty` method to know if the property name exists in an object (as its own property).
- [http://devdocs.io/#q=js+Object+hasOwnProperty](http://devdocs.io/#q=js+Object+hasOwnProperty)

## Hint: 3
Check equivalence of `Object` in `collection` with `Object` passed as second parameter to `whereAreYou` function.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:
### First

```js
function whereAreYou(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      // check if obj in collection doesn't have the key
      // or if it does have the key,
      // then check if the property value doesn't match the value in source
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// test here
whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```
:rocket: [REPL It!](https://repl.it/CLmh/0)

### Second

```js
function whereAreYou(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    // return a Boolean value for `filter` method
    return srcKeys.every(function (key) {
      // reduce to Boolean value to be returned for `every` method
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```
:rocket: [REPL It!](https://repl.it/CLmi/0)

### Third

```js
function whereAreYou(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    // return a Boolean value for filter callback using reduce method
    return srcKeys.reduce(function (res, key) {
      // reduce to Boolean value to be returned by reduce method
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    }, false);
  });
}

// test here
whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```
:rocket: [REPL It!](https://repl.it/CLmj/0)

### Fourth

```js
function whereAreYou(collection, source) {
//Array for storing the matched objects
  var arr = [];
  //For maintaining the number of key-value matches
  var count ;
  collection.forEach(function(collObj) { 
  //Initialize to zero for each object in collection
     count = 0 ; 
     for(var prop in source){
     //Check whether the key exists and the key-value is matched
        if( collObj.hasOwnProperty(prop) && collObj[prop] === source[prop])
        //Increase the count if matched
        count++; 
       }
     //Check whether all key-value pairs in source are matched
     if(count>=Object.keys(source).length){ 
        arr.push(collObj);
      }
    
    });
    return arr;
}
// test here
whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```

:rocket: [REPL It!](https://repl.it/CLml/0)

## Code Explanation:
> Please read the comments in the source code.

Check this http://repl.it/BFZQ/19 for pretty debugging and code explanation

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @abhisekp @dting @coded9 for your help with Algorithm: Where art Thou`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
