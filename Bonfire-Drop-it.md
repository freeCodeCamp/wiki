![](http://i.imgur.com/goyTFy2.png)

# Explanation:
Basically while the second argument is not true, you will have to remove the first element from the left of the array that was passed as the first argument.

## Hint: 1
You can use Array.shift() or filter that you should be more familiar with to solve this problem in a few lines of code.

## Hint: 2
Shift returns the element that was removed which we don't really need, all we need is the modified array that is left.

## Hint: 3
If you still can't figure out how to solve it with shift, then try solving it with filter, and check how filter works, if you become familiar with it, then you can make the code with shift.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution 1:

```js
function drop(arr, func) {
  // Drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
drop([1, 2, 3], function(n) {return n < 3; });
```
## Code Solution 2:
```
function drop(arr, func) {
  // Drop them elements.
  
  arr = arr.filter(func);

  return arr;
}

drop([1, 2, 3, 4], function(n) {return n >= 3;});
```


# Code Explanation:
- Create a for loop to check each element.
- Then check for the function given if true then stop, otherwise remove that element.
- return the array.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282 @mhelmetag`
