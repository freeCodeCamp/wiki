# Algorithm Pig Latin

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

You need to create a program that will translate from English to Pig Latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. It might not be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.

#### Relevant Links

- [Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin)
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

- [JS Regex Resources](JS-Regex-Resources)
- [JS String Prototype IndexOf](JS-String-Prototype-IndexOf)
- [JS String Prototype Substr](JS-String-Prototype-Substr)

## :sunflower: Intermediate Code Solution:

```javascript
function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant");
```

:rocket: [Run Code](https://repl.it/CLmw/0)

### Code Explanation:

- This is a declarative as well as recursive approach to this problem.
- `check()` is a function which checks for first letter of string to be in the array of vowels, `['a','i','u','e','o']`.
- In case of consonants, `check()` calls itself on the next characters until finding the first vowel.
- It'll return the index of whatever it finds to be the last initial consonant i.e., Schmidtsville's would be 3.
- Then, letters up until that index are removed from the string and concatenated with either that same chunk of removed string or **w** accordingly, and then **ay** regardless.

#### Relevant Links

- [JS String Prototype CharAt](JS-String-Prototype-CharAt)
- [JS String Prototype Concat](JS-String-Prototype-Concat)

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

- [JS String Prototype Split](JS-String-Prototype-Split)
- [JS Array Prototype Shift](JS-Array-Prototype-Shift)
- [JS Array Prototype Push](JS-Array-Prototype-Push)
- [JS Array Prototype Join](JS-Array-Prototype-Join)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
