# Problem Explanation:
- You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.

## Hint: 1
- Find the index where `before` is in the string.

## Hint: 2
- Check first letter case.

## Hint: 3
- Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution #1:

```js
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
:rocket: [REPL It!](https://repl.it/CLmo/0)

## Code Solution #2:

```js
function myReplace(str, before, after) {
//Create a regular expression object
  var re = new RegExp(before,"gi");
//Check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])){
  //Change the word to be capitalized
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
     //Replace the original word with new one
  var  newStr =  str.replace(re,after);

 return newStr;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

:rocket: [REPL It!](https://repl.it/CLmp/0)

## Code Solution #3:

```js
function myReplace(str, before, after) {

    // create a function that will change the casing of any number of letter in parameter "target" 
    // matching parameter "source"
    function applyCasing(source, target) {
        // split the source and target strings to array of letters
        var targetArr = target.split("");
        var sourceArr = source.split("");
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortes array
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            // find out the casing of every letter from sourceArr using regular expression
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case 
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
            else targetArr[i] = targetArr[i].toLowerCase();
        } 
        // join modified targetArr to string and return
        return (targetArr.join(""));
    }
    
    
    // replace "before" with "after" with "before"-casing 
    return str.replace(before, applyCasing(before, after));
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

```

:rocket: [REPL It!](https://repl.it/CLmq/0)

# Code Explanation:
- Read comments on program.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @coded9 @aganita for your help with Algorithm: Search and Replace`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
