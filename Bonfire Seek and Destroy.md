# Author
![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128)

Submitted by Rafase282

[Github](https://github.com/Rafase282) | [FreeCodeCamp](http://www.freecodecamp.com/rafase282) | [CodePen](http://codepen.io/Rafase282/) | [LinkedIn](https://www.linkedin.com/in/rafase282) | [Blog/Site](https://rafase282.wordpress.com/) | [My Wiki](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)

## Explanation:
This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two **or more** but on the script you only see two. Many people hardcode this program for three arguments. You will remove any number from the first argument that is the same as any other other arguments.

## Hint: 1
You need to work with `arguments` as if it was a regular array. The best way is to convert it into one.

## Hint: 2
You need to filter, this also means you need to create a callback function, one that checks if the element is on the `indexOf()`

## Hint: 3
To convert `arguments` into an array use this code `var args = Array.prototype.slice.call(arguments);`

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## My code:

```
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
```

# My Code Explanation:
- The first line will turn the `arguments` variable into a full array instead of the limited array it currently it.
- Next I remove the first argument since I don't need, since I only want the other arguments passed besides the first which is the array we are going to compare against.
- The use the `filter()` to filter out the elements that are on the array and keep the ones that are not.

# If you enjoyed this guide, then type:
`thanks @Rafase282` in the chat!
