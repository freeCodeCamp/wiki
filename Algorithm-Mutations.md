# Problem Explanation:
- Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array..

## Hint: 1
- If everything is lowercase it will be easier to compare.

## Hint: 2
- Our strings might be easier to work with if they were arrays of characters.

## Hint: 3
- A loop might help. Use `indexOf()` to check if the letter of the second word is on the first.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

# Code Solutions:

####First solution (Procedural):
```js
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }
```

:rocket: [REPL It!](https://repl.it/CLjU/30)

####Second Solution (Declarative):
```js
function mutation(arr) {
 return arr[1].toLowerCase()
              .split('')
              .every(function (letter){
                return arr[0].toLowerCase()
                             .indexOf(letter) != -1;
              });
}
```

:rocket: [REPL It!](https://repl.it/CLjU/31)

# Code Explanations:
####First solution (Procedural):
First we make the two strings in the array lowercase. `test` will hold what we are looking for in `target`.   
Then we loop through our test characters and if any of them is not found we `return false`.

If they are _all_ found, the loop will finish without returning anything and we get to `return true`.

####Second solution (Declarative):

Grab the second string, lowercase and turn it into an array; then make sure *every* one of its *letters* is a part of the lowercased first string.

`Every` will basically give you letter by letter to compare, which we do by using `indexOf` on the first string.
`indexOf` will give you -1 if the current `letter` is missing. 
We check that not to be the case, for if this happens even once `every` will be false.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @sxmxc @Rafase282 @anuragaryan @hallaathrad for your help with Algorithm: Mutations`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
