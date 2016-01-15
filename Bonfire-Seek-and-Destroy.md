# Explanation:
This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two **or more** but on the script you only see two. Many people hardcode this program for three arguments. You will remove any number from the first argument that is the same as any other other arguments.

## Hint: 1
You need to work with `arguments` as if it was a regular array. The best way is to convert it into one.

For solution #2 The `arguments` object is an array-like object and have some behavior identical with a regular array. You can use this to identify each argument separately.

## Hint: 2
You need to filter, this also means you need to create a callback function, one that checks if the element is on the `indexOf()`

## Hint: 3
To convert `arguments` into an array use this code `var args = Array.prototype.slice.call(arguments);`
For solution #2 no need to convert `arguments` in regular array.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution #1:

```js
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
```
## Code Solution #2:

```js
function destroyer(arr) {
  // Remove all the values
  
  var toremove;
  
  function remover(value,index, array){
    return value !== toremove; 
  }
  //for each of two arguments, remove the value from first argument (array) if the same value
  for (i=1;i<arguments.length; i++){
    //store the current argument in the variable to use in filter function
    toremove = arguments[i];
    //filter the array for the current argument
    arr = arr.filter(remover);
  }
  return arr;
}
```
# Code Explanation: 

Solution #1:
- The first line will turn the `arguments` variable into a full array instead of the limited array it currently is.
- Next I remove the first argument since I don't need, since I only want the other arguments passed besides the first which is the array we are going to compare against.
- Then use the `filter()` to filter out the elements that are on the array and keep the ones that are not.

Solution #2:
- Read the comments in code.




# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282, @livike for your help with Bonfire: Seek and Destroy`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
