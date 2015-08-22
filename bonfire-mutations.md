# Problem Explanation:
- Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array..

## Hint: 1
- If everything is lowercase it will be easier to compare.

## Hint: 2
- Our strings might be easier to work with if they were arrays of characters.

## Hint: 3
- A loop might help.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Solution Code:

```
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  test = test.split('');
  target = target.split('');
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }
```

## Code Explanation:
- First, we make the to strings in the array lowercase.  
- Second, we split the individual strings in to 2 separate arrays of characters. test variable holds what we are looking for. target variable is where we are looking.   
- Third, we loop through our test characters, and if they are not _all_ found we return false.
