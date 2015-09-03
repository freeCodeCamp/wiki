# Explanation:
The program needs to check if the second argument is a [truthy](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/js-truthy) element, and it must check this for each object in the first argument.

## Hint: 1
Remember to iterate through the first argument to check each object.

## Hint: 2
Only if all of them are truth will we return true, so make sure all of them check.

## Hint: 3
You could use loops or callbacks functions, there are multiple ways to solve this problem.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```
function every(collection, pre) {
  var counter = 0;
  for (var c in collection) {
    if (collection[c].hasOwnProperty(pre) || collection[c][pre] == pre){ counter++;}
  }
  if (counter == collection.length) {
    return true;
  } else
    return false;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa',
'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
```

# Code Explanation:
- First I create a counter to check how many cases are actually true.
- Then check for each object if it it has the same property or the same property value. If true then add one to the counter.
- Outside the loop, I check to see if the counter variable has the same value as the length of **collection**, if true then return **true**, otherwise, return **false**

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Rafase282`
