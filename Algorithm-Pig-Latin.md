# Algorithm Pig Latin

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

You need to create a program that will translate from English to Pig Latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. It might not be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.

#### Relevant Links

- [Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin)
- [JS Regex Resources](JS-Regex-Resources)
- [JS String Prototype Match](JS-String-Prototype-Match)

## :speech_balloon: Hint: 1

You will probably want to use regular expressions. This will allow you to convert the words easily.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

If the first character is a vowel, then take that whole word and add 'way' at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add 'ay'. This might be confusing but, it is not just the first consonant but all of them before the first vowel.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

You will need to use everything you know about string manipulation to get the last part right. However, it can be done with `substr` alone.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");
```

:rocket: [Run Code](https://repl.it/CLmt/0)

### Code Explanation:

- Make an empty string to hold your Pig Latin word.
- Assign your appropriate regular expression to a variable.
- If the first character is a vowel, just add **way** to end of string and return it.
- If the first character is not a vowel:
  - Find number of consonants before first vowel with help of `indexOf()`, `match()` and regex.
  - Start Pig Latin string with first vowel till the end.
  - Add letters before first vowel to end of string.
  - `substr()` is used for string manipulation here.
  - Add **ay** to end of string and return it.

#### Relevant Links

- [JS String Prototype IndexOf](JS-String-Prototype-IndexOf)
- [JS String Prototype Substr](JS-String-Prototype-Substr)

## :sunflower: Intermediate Code Solution:

```javascript
function translatePigLatin(str) {
  // finding all the consonants in the beginning of the str.
  // by using && below I'm achieving a concept called Intersection of Regular Expressions
  // where your pattern finds the union of two or more RegEx rules.
  // In Java you can achieve this with RegEx special character '&&'
  // but in Javascript you can use the following instead.
  // Credit goes to http://stackoverflow.com/q/6595477
  var consChars = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');

  //if no consonants found (i.e. str starts with vowels)
  //use replace to remove consonants and construct newStr else add 'way' in the end
  if (consChars !== ''){
    newStr = str.replace(consChars, '') + consChars + "ay";
  } else {
    newStr = str + "way";
  }
  return newStr;
}

// test here
translatePigLatin("consonant");
```

:rocket: [Run Code](https://repl.it/CLmu/0)

### Code Explanation:

- By using intersection of regular expressions, find all consonants in beginning of given string.
- If string starts with vowel, add **way** to the end.
- If string starts with consonant(s), use `replace()` to remove consonants and construct Pig Latin string.

#### Relevant Links

- [JS Array Prototype Join](JS-Array-Prototype-Join)
- [JS String Prototype Replace](JS-String-Prototype-Replace)

## :rotating_light: Advanced Code Solution:

```javascript
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");
```

:rocket: [Run Code](https://repl.it/CLmv/0)

### Code Explanation:

- `isConsonant()` is used to check if a character is a consonant.
- If first character is vowel, add **way** to end of string and return it.
- If first character is not a vowel:
  - Split string into array using `split()`.
  - Push all consonants to end of array with help of `shift()` and `push()`.
  - Convert array to string using `join()` and add **ay** to end of string. Return it.

#### Relevant Links

- [JS String Prototype CharAt](JS-String-Prototype-CharAt)
- [JS String Prototype Split](JS-String-Prototype-Split)
- [JS Array Prototype Shift](JS-Array-Prototype-Shift)
- [JS Array Prototype Push](JS-Array-Prototype-Push)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
