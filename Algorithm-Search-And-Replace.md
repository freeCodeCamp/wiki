# Algorithm Search and Replace

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.

#### Relevant Links

- [String global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JS String Prototype Replace](JS-String-Prototype-Replace)

## :speech_balloon: Hint: 1

- Find the index where `before` is in the string.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

- Check first letter case.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

- Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLmo/0)

### Code Explanation:

- Use `indexOf()` to find location of **before** in string.
- If first letter of **before** is capitalized, change first letter of **after** to uppercase.
- Replace **before** in the string with **after**.
- Return the new string.

#### Relevant Links

- [JS String Prototype IndexOf](JS-String-Prototype-IndexOf)
- [JS String Prototype ToUpperCase](JS-String-Prototype-ToUpperCase)
- [JS String Prototype CharAt](JS-String-Prototype-CharAt)
- [JS String Prototype Slice](JS-String-Prototype-Slice)

## :sunflower: Intermediate Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLmp/0)

### Code Explanation:

- In this solution, regular expression `[A-Z]` is used to check if character is uppercase.
- Create a new regular expression object, **re**.
- If first letter of **before** is capitalized, change the first letter of **after** to uppercase.
- Replace **before** with **after** in the string.
- Return the new string.

#### Relevant Links

- [JS Regex Resources](JS-Regex-Resources)

## :rotating_light: Advanced Code Solution:

```javascript
function myReplace(str, before, after) {

    // create a function that will change the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {
        // split the source and target strings to array of letters
        var targetArr = target.split("");
        var sourceArr = source.split("");
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
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

:rocket: [Run Code](https://repl.it/CLmq/0)

### Code Explanation:

- Both the **before** and **after** are passed as arguments to `applyCasing()`.
- The function `applyCasing()` is used to change the case of respective characters in **targetArr** i.e., **after** in accordance with that of characters in **sourceArr** i.e., **before**.
- `replace()` is used to replace **before** with **after**, whose casing is same as **before**.

#### Relevant Links

- [JS String Prototype Split](JS-String-Prototype-Split)
- [JS For Loops Explained](JS-For-Loops-Explained)
- [JS Math Min](JS-Math-Min)
- [String.length](String.length)
- [JS String Prototype ToLowerCase](JS-String-Prototype-ToLowerCase)
- [JS Array Prototype Join](JS-Array-Prototype-Join)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @coded9 @aganita for your help with Algorithm: Search and Replace`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
