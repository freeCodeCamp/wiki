# Author
![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128)

Submitted by Rafase282

[Github](https://github.com/Rafase282) | [FreeCodeCamp](http://www.freecodecamp.com/rafase282) | [CodePen](http://codepen.io/Rafase282/) | [LinkedIn](https://www.linkedin.com/in/rafase282) | [Blog/Site](https://rafase282.wordpress.com/) | [My Wiki](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)

# Explanation:
We have to create a program that will take an array for the first argument and return the object that matches the properties on the second parameter. You will need to be familiar with objects a little bit.

## Hint: 1
Remember how to check for an element in a double array? `Array[index][subIndex]` That will be the first key.

## Hint: 2
You remember how to access properties using Bracket and dot notation? `Obj[key]` and `Obj.key` You will be using them together the the first hint to access the information.

## Hint: 3
The rest is to check if they are the same and add it to a variable to be returned at the end.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## My code:

```
function where(collection, source) {
  var arr = [];
  for (var ob in collection) {
    if (collection[ob][Object.keys(source)] === source[Object.keys(source)]) {
      arr.push(collection[ob]);
    }
  }
  return arr;
}
```

# My Code Explanation:
We first create an empty array, then go through the collection of objects and check if each of them has the same key that we are searching for. If they do, then we push them to the array we created.

# If you enjoyed this guide, then type:
`thanks @Rafase282` in the chat!
