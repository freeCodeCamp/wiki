# Problem Explanation
Write an algorithm that will take an `array` for the first argument and return an `array` with all the  `object`s that matches all the properties and values in the `Object` passed as second parameter.

## Hint: 1
You may use `for` loop or the `Array.prototype.filter` method?
- [http://devdocs.io/#q=js+for](http://devdocs.io/#q=js+for)
- [http://devdocs.io/#q=js+Array+filter](http://devdocs.io/#q=js+Array+filter)

## Hint: 2
Try to use `Object.prototype.hasOwnProperty` method to know if the property name exists in an object (as its own property).
- [http://devdocs.io/#q=js+Object+hasOwnProperty](http://devdocs.io/#q=js+Object+hasOwnProperty)

## Hint: 3
Check equivalence of `Object` in `collection` with `Object` passed as second parameter to `where` function.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:
### First

```js
function where(collection, source) {
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
```

### Second

```js
function where(collection, source) {
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
```

### Third

```js
function where(collection, source) {
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
```

## Code Explanation:
> Please read the comments in the source code.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282  @abhisekp @dting @benmcmahon100`
