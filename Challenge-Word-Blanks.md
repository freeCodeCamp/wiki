# Details
We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

## Instructions
You will need to use string operators to build a new string, result, using the provided variables: `myNoun`, `myAdjective`, `myVerb`, and `myAdverb`.

You will also need to provide additional strings, which will not change, in between the provided words.

Remember to use [ Read-Search-Ask](How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program. Write your own code.

## Useful Links
- [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)
- [Challenge: Constructing Strings with Variables](http://www.freecodecamp.com/challenges/constructing-strings-with-variables)
- [Challenge: Concatenating Strings with Plus Operator](http://www.freecodecamp.com/challenges/concatenating-strings-with-plus-operator)
- [Challenge: Concatenating Strings with the Plus Equals Operator](http://www.freecodecamp.com/challenges/concatenating-strings-with-the-plus-equals-operator)

## Problem Explanation:
- Change the code below `//Your Code here` and up to `//Change this line`.
- Take note that you are editing the inside of the `wordBlanks` function.
- You will have basically create a sentence with the provided variables and strings you will make.

## Hint: 1
- `+` can be used for _concatenating_ with strings.

## Hint: 2
- Just as you can chain strings by concatenating, you can asign them to an existing variable instead of a new one.

## Hint: 3
- `+=` will allow you use an existing variable, a string in this case. Remember to add your own **non-letters** in between each variable.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

    // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
```

**Example Run**
- Test `wordBlanks("dog", "big", "ran", "quickly");` runs.
- Variable `result` is declared with an empty string `""`.
- `result` will be changed with a new string composed of the concatenated strings "dog", "big", "ran", "quickly" through the variables `myNoun`, `myAdjective`, `myVerb`, `myAdverb` respectively; the order is changed and whitespace added.
- `result` is returned.

# Code Explanation:
- Use `result` to concatenate the given variables separated by whitespace and added strings to forma full sentence.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 for your help with Checkpoint: Word Blanks`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
